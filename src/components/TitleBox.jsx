import s from "../assets/styles/components/titleBox.module.css";

export default function TitleBox({ heading }) {
  const { title2, title3, paragraph } = heading;
  return (
    <div className={s.container}>
      <div className={s.titles}>
        <h2 className={s.title2}>{title2}</h2>
        <h3 className={s.title3}>{title3}</h3>
      </div>

      <p className={s.paragraph}>{paragraph}</p>
    </div>
  );
}
