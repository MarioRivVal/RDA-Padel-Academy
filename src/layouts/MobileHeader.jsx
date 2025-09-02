import { useState, useRef, useEffect } from "react";
import s from "../assets/styles/layouts/mobileHeader.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import LetterByLetter from "../components/ui/LetterByLetter";
import NavList from "../components/NavList";

export default function MobileHeader() {
  const [isNavActive, setIsNavActive] = useState(false);

  const navRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;

    const syncOffsets = () => {
      if (!navRef.current) return;
      const h = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--header-offset", `${h}px`);
      if (backgroundRef.current) {
        backgroundRef.current.style.setProperty("--nav-height", `${h}px`);
      }
    };
    syncOffsets();
    window.addEventListener("resize", syncOffsets);
    const ro = new ResizeObserver(syncOffsets);
    ro.observe(navRef.current);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncOffsets).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", syncOffsets);
      ro.disconnect();
    };
  }, [isNavActive]);

  useEffect(() => {
    if (isNavActive && navRef.current && backgroundRef.current) {
      const navHeight = navRef.current.offsetHeight;
      backgroundRef.current.style.setProperty("--nav-height", `${navHeight}px`);
      console.log(navHeight);
    }
  }, [isNavActive]);

  const handleOpenNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div
        ref={navRef}
        className={`${s.navigation} ${isNavActive ? s.active : ""}`}
      >
        <ResponsiveImage
          name="logos/logo-hor"
          ext="png"
          alt="Logo de la Academia RDA"
          className={s.logo}
          overlay={false}
          delay={50}
        />
        <div className={s.btn} onClick={handleOpenNav}>
          <span className={s.icon}>&nbsp;</span>
        </div>
        <div
          ref={backgroundRef}
          className={`${s.background} ${isNavActive ? s.visible : ""}`}
          onClick={handleOpenNav}
        >
          <nav className={`${s.nav} ${isNavActive ? s.navVisible : ""}`}>
            <NavList type="mobile" />
          </nav>
        </div>
      </div>
      <header className={s.header}>
        <div className={s.mainBox}>
          <ResponsiveImage
            name="raqueta"
            ext="png"
            alt="Raqueta de padel con logo de la Academia RDA"
            className={` ${s.headerImage} ${s.raquetaImage}`}
            overlay={true}
            delay={100}
          />
          <div className={s.heading} role="heading">
            <p id={s.p1} className={`u-text-white`}>
              <LetterByLetter word="Una" className={s.headingSpan} />
            </p>
            <p id={s.p2} className={`u-text-white`}>
              <LetterByLetter word="nueva" className={s.headingSpan} />
            </p>
            <p id={s.p3} className={`u-text-green`}>
              <LetterByLetter word="Dimensión" className={s.headingSpan} />
            </p>
            <p id={s.p4} className={`u-text-white`}>
              <LetterByLetter word="de" className={s.headingSpan} />
            </p>
            <p id={s.p5} className={` u-text-white`}>
              Since 2023
            </p>
            <p id={s.p6} className={`u-text-green`}>
              <LetterByLetter word="Academia" className={s.headingSpan} />
            </p>
          </div>
          <ResponsiveImage
            name="coach-1"
            ext="jpeg"
            alt="Coach Mario con material de padel caminado en la pista"
            className={` ${s.headerImage} ${s.coachImage}`}
            overlay={true}
            delay={200}
          />
        </div>
      </header>
    </>
  );
}
