import s from "../assets/styles/layouts/equiposSection.module.css";
import sIntroB from "../assets/styles/components/introBox.module.css";

import { equipos } from "../data/headings";
import TitleBox from "../components/TitleBox";
import IntroBox from "../components/IntroBox";
import { equiposOne, equiposTwo, equiposThree } from "../data/introBoxes";
import TrophyIcon from "../assets/icons/trophy.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";

export default function EquiposSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={equipos} bg="black" />
      <div className={s.grid}>
        <IntroBox data={equiposOne} bg="black">
          <div>
            <ul>
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
          </div>
        </IntroBox>

        <IntroBox data={equiposTwo} bg="black">
          <div className={sIntroB.childrenEquiposTwo}>
            <TrophyIcon />
            <ul>
              <li className={`${sIntroB.item} u-text-white`}>
                <span>2 Equipos Federados</span>
              </li>
              <li className={`${sIntroB.item} u-text-white`}>
                <span>3 de SNP</span>
              </li>
            </ul>
          </div>
        </IntroBox>

        <IntroBox data={equiposThree} bg="black">
          <div className={sIntroB.childrenEquiposThree}>
            <div className={sIntroB.contact}>
              <span>Llamanos</span>
              <div>
                <PhoneIcon />
                <a href="tel:628800205">628 800 205</a>
              </div>
            </div>
            <div className={sIntroB.contact}>
              <span>Escríbenos</span>
              <div>
                <MailIcon />
                <a href="mailto:info@rdapadel.com">Info@rdapadel.com</a>
              </div>
            </div>
          </div>
        </IntroBox>
      </div>
    </div>
  );
}
