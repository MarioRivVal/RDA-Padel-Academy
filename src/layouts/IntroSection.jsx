import s from "../assets/styles/layouts/introSection.module.css";
import { item } from "../assets/styles/components/introBox.module.css";
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
          <ul>
            <li className={item}>
              <CheckIcon />
              <span>Pasión</span>
            </li>
            <li className={item}>
              <CheckIcon />
              <span>Compromiso</span>
            </li>
            <li className={item}>
              <CheckIcon />
              <span>Excelencia</span>
            </li>
          </ul>
          <Button text="Más sobre mi" onClick="" className={greenBtn} />
        </IntroBox>
      </div>
    </div>
  );
}
