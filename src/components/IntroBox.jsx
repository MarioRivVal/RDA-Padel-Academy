import s from "../assets/styles/components/introBox.module.css";
import ResponsiveImage from "./ResponsiveImage";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function IntroBox({ data, bg, children }) {
  const { ref, style } = useRevealOnScroll({
    distance: 50,
    duration: 1000,
    delay: 500,
    direction: "up",
  });

  return (
    <div className={s.box}>
      <div
        ref={ref}
        style={style}
        className={`${s.content} ${bg === "black" ? "u-text-white" : ""}`}
      >
        <div className={s.titles}>
          <h4 className={`${s.title4} u-text-green`}>{data.title4}</h4>
          <h3 className={s.title3}>{data.title3}</h3>
        </div>
        <p className={s.paragraph}>{data.paragraph}</p>

        <div className={s.childrenBox}>{children}</div>
      </div>
      {data.img?.name ? (
        <ResponsiveImage
          name={data.img.name}
          alt={data.img.alt ?? ""}
          className={data.img?.className ? s[data.img.className] : s.image}
          overlay
          delay={700}
        />
      ) : null}
    </div>
  );
}
