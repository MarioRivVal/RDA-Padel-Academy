import s from "../assets/styles/components/responsiveImage.module.css";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const ResponsiveImage = ({
  name,
  ext = "jpg",
  alt,
  className,
  overlay,
  delay,
  duration,
  once,
  reveal = true,
}) => {
  const revealProps = useRevealOnScroll({
    distance: 50,
    duration: duration || 1000,
    delay: delay || 50,
    direction: "up",
    once,
  });

  const ref = reveal ? revealProps.ref : null;
  const style = reveal ? revealProps.style : undefined;

  return (
    <picture
      ref={ref}
      style={style}
      className={`${className} ${overlay ? s.imageWrapper : ""}`}
    >
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img src={`/images/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
