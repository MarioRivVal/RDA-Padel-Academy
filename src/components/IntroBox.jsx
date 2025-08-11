import s from "../assets/styles/components/introBox.module.css";
import ResponsiveImage from "./ResponsiveImage";

export default function IntroBox({ data, bg, children }) {
  return (
    <div className={s.box}>
      <div className={s.content}>
        <div className={s.titles}>
          <h4 className={`${s.title4} ${bg === "black" ? "u-text-white" : ""}`}>
            {data.title4}
          </h4>
          <h3 className={`${s.title3} ${bg === "black" ? "u-text-white" : ""}`}>
            {data.title3}
          </h3>
        </div>
        <p className={`${s.paragraph} ${bg === "black" ? "u-text-white" : ""}`}>
          {data.paragraph}
        </p>

        <div className={s.childrenBox}>{children}</div>
      </div>
      <ResponsiveImage
        name={data.img.name}
        alt={data.img.alt}
        className={s[data.img.className]}
        overlay={true}
      />
    </div>
  );
}
