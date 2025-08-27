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

      // 1) Compensación del header (salto por nav fixed)
      document.documentElement.style.setProperty("--header-offset", `${h}px`);

      // 2) Altura del nav para tu overlay del menú
      if (backgroundRef.current) {
        backgroundRef.current.style.setProperty("--nav-height", `${h}px`);
      }
    };

    // Medición inicial
    syncOffsets();

    // Re-medición en cada resize (ancho/alto/orientación)
    window.addEventListener("resize", syncOffsets);

    // Re-medición si el propio nav cambia de tamaño (wrap de texto, cambios de logo, etc.)
    const ro = new ResizeObserver(syncOffsets);
    ro.observe(navRef.current);

    // Opcional: re-medición al cargar fuentes (puede variar altura)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncOffsets).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", syncOffsets);
      ro.disconnect();
    };
  }, [isNavActive]); // si el menú abre/cierra y afecta altura, también se sincroniza

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
            overlay={false}
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
          />
        </div>
      </header>
    </>
  );
}
