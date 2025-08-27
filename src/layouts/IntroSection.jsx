import s from "../assets/styles/layouts/equiposSection.module.css";
import sIntroB from "../assets/styles/components/introBox.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";

import IntroBox from "../components/IntroBox";
import { coachIntro } from "../data/introBoxes";
import Button from "../components/Button";
import CheckIcon from "../assets/icons/check.svg?react";

export default function IntroSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <IntroBox data={coachIntro}>
          <ul className={sIntroB.list}>
            <li className={sIntroB.item}>
              <CheckIcon />
              <span>Pasión</span>
            </li>
            <li className={sIntroB.item}>
              <CheckIcon />
              <span>Compromiso</span>
            </li>
            <li className={sIntroB.item}>
              <CheckIcon />
              <span>Excelencia</span>
            </li>
          </ul>
          <Button text="Más sobre mi" href="#coach" className={greenBtn} />
        </IntroBox>
      </div>
    </div>
  );
}
