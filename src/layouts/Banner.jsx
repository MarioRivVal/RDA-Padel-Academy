import s from "../assets/styles/layouts/banner.module.css";
import {
  greenBtn,
  blackBtn,
} from "../assets/styles/components/button.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import ArrowIcon from "../assets/icons/arrow.svg?react";

export default function Banner() {
  const handleClickBtn = () => {
    console.log("enviar mensaje");
  };

  return (
    <div className={s.container}>
      <ResponsiveImage
        name="logos/logo-ver"
        ext="png"
        alt="Logo de RDA Padel en formato vertical"
        className={s.logoImg}
        overlay={false}
      />

      <header className={s.header}>
        <div className={s.btns}>
          <Button
            text="Escribenos"
            onClick={handleClickBtn}
            className={greenBtn}
          />
          <Button
            text="Eventos"
            onClick={handleClickBtn}
            className={blackBtn}
          />
        </div>
        <h1 className={`${s.title} u-text-white`}>
          Tu Academia de <span className="u-text-green">Pádel</span>
        </h1>
        <div
          class={s.ctaMap}
          role="group"
          aria-label="Ubicación. Pulsa el icono para abrir Maps"
        >
          <p class={s.textMap}>¿Dónde estamos? Descúbrelo en Maps</p>

          <a
            class={s.iconMap}
            href="https://maps.google.com/?q=RDA+Padel+Academia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación en Google Maps"
          >
            <ArrowIcon />
          </a>
        </div>
      </header>
    </div>
  );
}
