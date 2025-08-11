import s from "../assets/styles/layouts/equiposSection.module.css";
import { item } from "../assets/styles/components/introBox.module.css";

import { equipos } from "../data/headings";
import TitleBox from "../components/TitleBox";
import IntroBox from "../components/IntroBox";
import { equiposOne } from "../data/introBoxes";
import TrophyIcon from "../assets/icons/trophy.svg?react";

export default function EquiposSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={equipos} bg="black" />
      <div className={s.grid}>
        <IntroBox data={equiposOne} bg="black">
          <>
            <TrophyIcon />
            <ul>
              <li className={`${item} u-text-white`}>
                <span>2 Equipos Federados</span>
              </li>
              <li className={`${item} u-text-white`}>
                <span>3 de SNP</span>
              </li>
            </ul>
          </>
        </IntroBox>
      </div>
    </div>
  );
}
