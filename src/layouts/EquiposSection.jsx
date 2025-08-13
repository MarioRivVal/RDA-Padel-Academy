import s from "../assets/styles/layouts/equiposSection.module.css";
import {
  item,
  childrenEquiposTwo,
  childrenEquiposThree,
} from "../assets/styles/components/introBox.module.css";

import { equipos } from "../data/headings";
import TitleBox from "../components/TitleBox";
import IntroBox from "../components/IntroBox";
import { equiposOne, equiposTwo, equiposThree } from "../data/introBoxes";
import TrophyIcon from "../assets/icons/trophy.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";

export default function EquiposSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={equipos} bg="black" />
      <div className={s.grid}>
        <IntroBox data={equiposOne} bg="black">
          <div>
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
          </div>
        </IntroBox>

        <IntroBox data={equiposTwo} bg="black">
          <div className={childrenEquiposTwo}>
            <TrophyIcon />
            <ul>
              <li className={`${item} u-text-white`}>
                <span>2 Equipos Federados</span>
              </li>
              <li className={`${item} u-text-white`}>
                <span>3 de SNP</span>
              </li>
            </ul>
          </div>
        </IntroBox>

        <IntroBox data={equiposThree} bg="black">
          <div className={childrenEquiposThree}></div>
        </IntroBox>
      </div>
    </div>
  );
}
