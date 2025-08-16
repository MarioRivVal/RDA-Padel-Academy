import s from "../assets/styles/components/titleBox.module.css";

export default function TitleBox({ heading, bg }) {
  const { title2, title3, paragraph } = heading;
  return (
    <header className={s.container}>
      <div className={s.titles}>
        <h2 className={`${s.title2} ${bg === "black" ? "u-text-white" : ""}`}>
          {title2}
        </h2>
        <h3 className={s.title3}>{title3}</h3>
      </div>

      <p className={`${s.paragraph} ${bg === "black" ? "u-text-white" : ""}`}>
        {paragraph}
      </p>
    </header>
  );
}
