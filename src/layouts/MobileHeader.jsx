import { useState } from "react";
import s from "../assets/styles/layouts/mobileHeader.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import NavList from "../components/NavList";

export default function MobileHeader() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleOpenNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div className={`${s.navigation} ${isNavActive ? s.active : ""}`}>
        <ResponsiveImage
          name="logos/logo-hor"
          ext="png"
          alt="Logo de la Academia RDA"
          className={s.logo}
        />
        <div className={s.btn} onClick={handleOpenNav}>
          <span className={s.icon}>&nbsp;</span>
        </div>
        <div
          className={`${s.background} ${isNavActive ? s.visible : ""}`}
          onClick={handleOpenNav}
        >
          <NavList isVisible={isNavActive} />
        </div>
      </div>
      <main>
        <div className={s.mainBox}>
          <ResponsiveImage
            name="raqueta"
            ext="png"
            alt="Raqueta de padel con logo de la Academia RDA"
            className={s.raquetaImage}
          />
          <div className={s.heading} role="heading">
            <span id={s.span1} className={` ${s.headingSpan} u-text-green`}>
              Una
            </span>
            <span id={s.span2} className={` ${s.headingSpan} u-text-white`}>
              nueva
            </span>
            <span id={s.span3} className={` ${s.headingSpan} u-text-green`}>
              Dimención
            </span>
            <span id={s.span4} className={` ${s.headingSpan} u-text-white`}>
              de
            </span>
            <span id={s.span5} className={` u-text-white`}>
              Since 2023
            </span>
            <span id={s.span6} className={` ${s.headingSpan} u-text-green`}>
              Academia
            </span>
          </div>
          <ResponsiveImage
            name="coach-1"
            ext="jpeg"
            alt="Coach Mario con equipo de padel caminado en la pista"
            className={s.coachImage}
          />
        </div>
      </main>
    </>
  );
}
