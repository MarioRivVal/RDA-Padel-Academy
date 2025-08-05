import s from "../assets/styles/layouts/clasesSection.module.css";
import TitleBox from "../components/TitleBox";
import { clases } from "../data/headings";

export default function ClasesSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={clases} />
      <div className={s.grid}></div>
    </div>
  );
}
