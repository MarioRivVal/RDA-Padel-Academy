// components/Reveal.jsx
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Reveal({ className, style, children, ...opts }) {
  const anim = useRevealOnScroll(opts); // { ref, style }
  return (
    <div
      ref={anim.ref}
      style={{ ...anim.style, ...style }}
      className={className}
    >
      {children}
    </div>
  );
}
