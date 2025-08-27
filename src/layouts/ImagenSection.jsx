import { useState } from "react";
import s from "../assets/styles/layouts/imagenSection.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";
import TitleBox from "../components/TitleBox";
import { imagen } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import ArrowGreenIcon from "../assets/icons/arrowGreen.svg?react";
import Button from "../components/Button";

export default function ImagenSection() {
  const [slide, setSlide] = useState(0);
  const shirtNumbers = [1, 2, 3];
  const totalSlides = shirtNumbers.length;

  const handleNext = () => {
    setSlide((n) => (n + 1) % totalSlides);
  };
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
          <div className={s.sliderBox}>
            <div
              className={s.sliders}
              style={{
                "--slides": totalSlides,
                transform: `translateX(-${(100 / totalSlides) * slide}%)`,
              }}
            >
              {shirtNumbers.map((n) => (
                <ResponsiveImage
                  key={n}
                  name={`imagen/shirt-${n}`}
                  ext="png"
                  alt="Camisetas oficiales con logo RDA"
                  className={s.shirtImg}
                  overlay={false}
                />
              ))}
            </div>
          </div>

          <div
            className={s.iconBox}
            onClick={handleNext}
            role="button"
            aria-label="Siguiente"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNext();
              }
            }}
          >
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
        <div className={s.contentBox}>
          <div className={s.content}>
            <div className={s.titles}>
              <h4 className={`${s.title4} u-text-green`}>
                De la pista al mundo
              </h4>
              <h3 className={s.title3}>No seguimos tendencias, las creamos</h3>
            </div>
            <p className={s.paragraph}>
              Nos alejamos de las marcas, confiamos en que nuestro propio estilo
              llegue a todas las pistas del mundo a través de nuestra mejor
              publicidad, nuestros alumnos.
            </p>
            <Button
              text="Saber más"
              href="https://wa.me/+34628800205"
              target="_blank"
              className={greenBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
