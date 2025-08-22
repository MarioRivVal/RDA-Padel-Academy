import { useState } from "react";
import s from "../assets/styles/layouts/eventosSection.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";
import Button from "../components/Button";
import TitleBox from "../components/TitleBox";
import { eventos } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import ArrowGreenIcon from "../assets/icons/arrowGreen.svg?react";
import { eventosData } from "../data/eventos";

export default function EventosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : eventosData.length - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex < eventosData.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const carrouselStyle = {
    transform: `translateX(-${(currentIndex * 100) / eventosData.length}%)`,
    width: `${eventosData.length * 100}%`,
    transition: "transform 0.5s ease-in-out",
  };
  return (
    <div className={s.container}>
      <TitleBox heading={eventos} />
      <div className={s.content}>
        <div className={s.categoryBox}>
          <Button text="Cursos" onClick="" className={greenBtn} />
          <Button text="Eventos" onClick="" className={greenBtn} />
          <Button text="Noticias" onClick="" className={greenBtn} />
        </div>
        <div className={s.sliderBox}>
          <div className={s.sliders} style={carrouselStyle}>
            {eventosData.map((item) => (
              <div key={item.id} className={s.slider}>
                <ResponsiveImage
                  name={`eventos/${item.img}`}
                  alt={item.alt}
                  ext="png"
                  className={s.imgBox}
                />
                <div className={s.description}>
                  <div>
                    <h4 className={`${s.title4} u-text-green`}>
                      {item.subTitle}
                    </h4>
                    <h3 className={`${s.title3} u-text-white`}>{item.title}</h3>
                  </div>
                  <ul className={s.list}>
                    {item.details.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={s.btnsBox}>
            <Button text="Whatsapp" onClick="" className={greenBtn} />
            <div className={s.iconsBox}>
              <button
                className={`${s.btnLeft} ${s.icons}`}
                onClick={() => handleSlider("left")}
              >
                <ArrowGreenIcon />
              </button>
              <button
                className={`${s.btnRight} ${s.icons}`}
                onClick={() => handleSlider("right")}
              >
                <ArrowGreenIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
