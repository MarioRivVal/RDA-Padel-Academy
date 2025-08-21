import s from "../assets/styles/layouts/eventosSection.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";
import Button from "../components/Button";
import TitleBox from "../components/TitleBox";
import { eventos } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import ArrowGreenIcon from "../assets/icons/arrowGreen.svg?react";

export default function EventosSection() {
  return (
    <div className={s.container}>
      <TitleBox heading={eventos} />
      <div className={s.content}>
        <div className={s.bntsBox}>
          <Button text="Cursos" onClick="" className={greenBtn} />
          <Button text="Eventos" onClick="" className={greenBtn} />
          <Button text="Noticias" onClick="" className={greenBtn} />
        </div>
        <div className={s.sliderBox}>
          <div className={s.sliders}>
            <div className={s.slider}>
              <ResponsiveImage
                name="eventos/evento-1"
                ext="png"
                className={s.imgBox}
              />
              <div className={s.description}>
                <div>
                  <h4 className={`${s.title4} u-text-green`}>
                    Inscripciones Abiertas
                  </h4>
                  <h3 className={`${s.title3} u-text-white`}>
                    Torneo Adarsa ‘24
                  </h3>
                </div>
                <div className={s.listBox}>
                  <ul className={s.list}>
                    <li>5_6 Octubre</li>
                    <li>Masculino y Feminino</li>
                    <li>18 € para socios</li>
                    <li>20 € para resto de jugadores/as</li>
                  </ul>
                  <ul className={s.list}>
                    <li>test 1</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <Button text="Whatsapp" onClick="" className={greenBtn} />
              <div className={s.iconsBox}>
                <button className={s.icons}>
                  <ArrowGreenIcon />
                </button>
                <button className={s.icons}>
                  <ArrowGreenIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
