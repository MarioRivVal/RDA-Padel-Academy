import s from "../assets/styles/layouts/CoachSection.module.css";
import TitleBox from "../components/TitleBox";
import ResponsiveImage from "../components/ResponsiveImage";
import { coach } from "../data/headings";
import { coachHistory } from "../data/coachHistory.jsx";

export default function CoachSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={coach} bg="white" />
      <div className={s.grid}>
        {coachHistory.map((item) => (
          <div key={item.id} className={s.item}>
            <div className={s.icon}>{item.icon}</div>
            <span className={s.title}>{item.title}</span>
            <p className={s.paragraph}>{item.paragraph}</p>
          </div>
        ))}
        <ResponsiveImage
          name="coach-bg"
          ext="png"
          className={s.coachImage}
          alt="El fundador y coach de la Academia RDA Padel Mario Rodríguez"
          overlay={false}
        />
      </div>
    </div>
  );
}
