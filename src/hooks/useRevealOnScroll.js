// hooks/useRevealOnScroll.js
import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll({
  threshold = 0.1,
  root = null,
  rootMargin = "0px 0px -10% 0px",
  distance = 24, // px que recorre al aparecer
  duration = 600, // ms de transición
  delay = 0, // ms
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  once = false, // si false, se oculta al salir de viewport
  direction = "up", // "up" | "down" | "left" | "right"
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { root, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, root, rootMargin, once, reduceMotion]);

  const axis = direction === "left" || direction === "right" ? "X" : "Y";
  const sign = direction === "up" || direction === "left" ? 1 : -1;
  const translate = visible ? 0 : sign * distance;

  const style = reduceMotion
    ? undefined
    : {
        opacity: visible ? 1 : 0,
        transform: `translate${axis}(${translate}px)`,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
        willChange: "opacity, transform",
      };

  return { ref, style, "data-reveal": visible ? "in" : "out" };
}
