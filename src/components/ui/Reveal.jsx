// components/Reveal.jsx
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Reveal({ style, children, ...opts }) {
  const anim = useRevealOnScroll(opts); // { ref, style }
  return (
    <div ref={anim.ref} style={{ ...anim.style, ...style }}>
      {children}
    </div>
  );
}
