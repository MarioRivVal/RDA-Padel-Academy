import s from "../assets/styles/layouts/imagenSection.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";
import TitleBox from "../components/TitleBox";
import { imagen } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import IntroBox from "../components/IntroBox";
import ArrowGreenIcon from "../assets/icons/arrowGreen.svg?react";
import { imagenData } from "../data/introBoxes";
import Button from "../components/Button";

export default function imagenSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={imagen} />
      <div className={s.grid}>
        <div className={s.images}>
          <ResponsiveImage
            name="imagen/field"
            ext="png"
            alt="Campo de Pádel visto desde el alto"
            className={s.fieldImg}
            overlay={false}
          />
          <ResponsiveImage
            name="imagen/shirt-1"
            ext="png"
            alt="Camisetas oficiales con logo RDA"
            className={s.shirtImg}
            overlay={false}
          />
          <div className={s.iconBox}>
            <ArrowGreenIcon />
          </div>
        </div>
        <div className={s.statsBox}>
          <div className={s.stats}>
            <p className={s.amount}>
              200<span className="u-text-green">+</span>
            </p>
            <span className={s.label}>Alumnos inscritos</span>
          </div>
          <div className={s.stats}>
            <p className={s.amount}>
              3<span className="u-text-green">+</span>
            </p>
            <span className={s.label}>Años de Experiencia</span>
          </div>
        </div>
        <div className={s.content}>
          <IntroBox data={imagenData}>
            <Button text="Saber más" onClick="" className={greenBtn} />
          </IntroBox>
        </div>
      </div>
    </div>
  );
}
