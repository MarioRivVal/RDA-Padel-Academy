import { useState } from "react";
import s from "../assets/styles/layouts/clasesSection.module.css";
import sBtn from "../assets/styles/components/button.module.css";
import TitleBox from "../components/TitleBox";

import { clases } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import ChevronIcon from "../assets/icons/chevron.svg?react";

export default function ClasesSection() {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={s.container}>
      <TitleBox heading={clases} />
      <div className={s.grid}>
        <div className={s.category}>
          <div className={`${s.content} ${open ? s.visible : ""}`}>
            <h4 className={s.title4}>Particulares</h4>
            <div className={s.description}>
              <p className={s.paragraph}>
                Formamos grupos de entrenamiento que se adapten a las
                capacidades técnicas de cada alumno pero sobretodo, que la
                personalidad de todos los alumnos encaje. El pago de esta
                modalidad se realiza de forma mensual.
              </p>
              <Button
                text="Saber más"
                onClick={handleButtonClick}
                className={sBtn.greenBtn}
              />
            </div>
            <div
              className={`${s.icon} ${open ? s.iconOpen : ""}`}
              onClick={() => setOpen(!open)}
            >
              <ChevronIcon width={26} height={26} />
            </div>
          </div>
        </div>
        <ResponsiveImage
          name="clases/clase-1"
          alt="Entrenador Mario enseñando tecnica de golpe"
          className={s.image}
          overlay={true}
        />
      </div>
    </div>
  );
}
