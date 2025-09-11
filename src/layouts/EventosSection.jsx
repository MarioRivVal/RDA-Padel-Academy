import { useMemo, useState } from "react";
import s from "../assets/styles/layouts/eventosSection.module.css";
import b from "../assets/styles/components/button.module.css";
import Button from "../components/Button";
import TitleBox from "../components/TitleBox";
import { eventos } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import ArrowGreenIcon from "../assets/icons/arrowGreen.svg?react";
import {
  eventosData,
  clasesData,
  noticiasData,
  partnersList,
} from "../data/eventos";

const DATASETS = {
  eventos: eventosData,
  clases: clasesData, // <- “Cursos” usa tus clasesData
  noticias: noticiasData,
};

const isSliderEmpty = (items) => items.length === 0;

export default function EventosSection() {
  // Tab activo y un índice independiente por tab (así no “salta” al cambiar).
  const [activeTab, setActiveTab] = useState("eventos");
  const [indices, setIndices] = useState({
    eventos: 0,
    clases: 0,
    noticias: 0,
  });

  const currentData = useMemo(() => DATASETS[activeTab] ?? [], [activeTab]);
  const currentIndex = indices[activeTab] ?? 0;
  const len = currentData.length || 1;

  const handleTab = (tab) => {
    setActiveTab(tab);
    setIndices((p) => ({ ...p, [tab]: 0 }));
  };

  const handleSlider = (direction) => {
    setIndices((prev) => {
      const i = prev[activeTab] ?? 0;
      const next = direction === "left" ? (i - 1 + len) % len : (i + 1) % len;
      return { ...prev, [activeTab]: next };
    });
  };

  const carrouselStyle = {
    transform: `translateX(-${(currentIndex * 100) / len}%)`,
    width: `${len * 100}%`,
    transition: "transform 0.5s ease-in-out",
  };
  const slideStyle = { width: `${100 / len}%` };

  return (
    <div className={s.container}>
      <TitleBox heading={eventos} />

      <div className={s.content}>
        {/* TABS */}
        <div className={s.categoryBox} role="tablist" aria-label="Categorías">
          <Button
            text="Clases"
            onClick={() => handleTab("clases")}
            className={`${b.tabBtn} ${
              activeTab === "clases" ? b.tabBtnActive : ""
            }`}
            aria-selected={activeTab === "clases"}
            role="tab"
          />
          <Button
            text="Eventos"
            onClick={() => handleTab("eventos")}
            className={`${b.tabBtn} ${
              activeTab === "eventos" ? b.tabBtnActive : ""
            }`}
            aria-selected={activeTab === "eventos"}
            role="tab"
          />
          <Button
            text="Noticias"
            onClick={() => handleTab("noticias")}
            className={`${b.tabBtn} ${
              activeTab === "noticias" ? b.tabBtnActive : ""
            }`}
            aria-selected={activeTab === "noticias"}
            role="tab"
          />
        </div>

        {/* SLIDER */}
        <div className={s.sliderBox}>
          <div className={s.sliders} style={carrouselStyle}>
            {isSliderEmpty(currentData) ? (
              <div className={s.slider} style={slideStyle}>
                <ResponsiveImage
                  name={`eventos/placeholder`}
                  alt="Imagen sin contexto, solo un placeholder"
                  ext="png"
                  className={s.imgBox}
                  overlay={true}
                />

                <div className={s.description}>
                  <p className={s.placeholderText}>
                    {" "}
                    {`Muy prontos más ${activeTab}`}
                  </p>
                </div>
              </div>
            ) : (
              currentData.map((item) => (
                <div key={item.id} className={s.slider} style={slideStyle}>
                  <ResponsiveImage
                    name={`eventos/${item.img}`}
                    alt={item.alt}
                    ext="png"
                    className={s.imgBox}
                    overlay={true}
                  />

                  <div className={s.description}>
                    <div>
                      {item.subTitle && (
                        <h4 className={`${s.title4} u-text-green`}>
                          {item.subTitle}
                        </h4>
                      )}
                      <h3 className={`${s.title3} u-text-white`}>
                        {item.title}
                      </h3>
                    </div>

                    {item.details?.length > 0 && (
                      <ul className={s.list}>
                        {item.details.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CTA + Flechas */}
          <div className={s.btnsBox}>
            <Button
              text="Escribenos"
              className={b.greenBtn}
              href="https://wa.me/+34628800205"
              target="_blank"
            />
            {currentData.length > 1 && (
              <div className={s.iconsBox}>
                <button
                  className={`${s.btnLeft} ${s.icons}`}
                  onClick={() => handleSlider("left")}
                  aria-label="Anterior"
                >
                  <ArrowGreenIcon />
                </button>
                <button
                  className={`${s.btnRight} ${s.icons}`}
                  onClick={() => handleSlider("right")}
                  aria-label="Siguiente"
                >
                  <ArrowGreenIcon />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PARTNERS */}
        <div className={s.partnersBox}>
          <h3>
            <span className="u-text-green">Partners,</span> que suman valor
          </h3>
          <div className={s.partners}>
            <div className={s.track} aria-hidden="true">
              <div className={s.group}>
                {partnersList.map((item) => (
                  <ResponsiveImage
                    key={`a-${item.id}`}
                    name={`partners/${item.img}`}
                    ext="png"
                    alt={`Logo de ${item.alt}`}
                    overlay={false}
                    className={s.partnersImg}
                  />
                ))}
              </div>

              {/* Duplicado para loop infinito */}
              <div className={s.group} aria-hidden="true">
                {partnersList.map((item) => (
                  <ResponsiveImage
                    key={`b-${item.id}`}
                    name={`partners/${item.img}`}
                    ext="png"
                    alt={`Logo de ${item.alt}`}
                    overlay={false}
                    className={s.partnersImg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
