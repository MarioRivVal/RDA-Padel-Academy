import s from "../assets/styles/layouts/desktopHeader.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import LetterByLetter from "../components/ui/LetterByLetter";
import NavList from "../components/NavList";

export default function DesktopHeader() {
  return (
    <header>
      <div className={s.container}>
        <ResponsiveImage
          name="logos/logo-hor"
          ext="png"
          alt="Logo de la Academia RDA"
          className={s.logo}
          overlay={false}
          delay={100}
        />
        <p id={s.p1} className={`u-text-white`}>
          <LetterByLetter word="Una" className={s.headingSpan} />
        </p>
        <p id={s.p2} className={`u-text-white`}>
          <LetterByLetter word="Nueva" className={s.headingSpan} />
        </p>
        <ResponsiveImage
          name="raqueta"
          ext="png"
          alt="Raqueta de padel con logo de la Academia RDA"
          className={`${s.headerImage} ${s.raquetaImage}`}
          overlay={false}
          delay={300}
        />
        <p id={s.p3} className={`u-text-green`}>
          <LetterByLetter word="Dimensión" className={s.headingSpan} />
        </p>
        <p id={s.p4} className={`u-text-white`}>
          <LetterByLetter word="de" className={s.headingSpan} />
        </p>
        <p id={s.p5} className={`u-text-green`}>
          <LetterByLetter word="Academia" className={s.headingSpan} />
        </p>
        <ResponsiveImage
          name="coach-1"
          ext="jpeg"
          alt="Coach Mario con material de padel caminado en la pista"
          className={` ${s.headerImage} ${s.coachImage}`}
          overlay={true}
          delay={500}
        />
        <p id={s.p6} className={` u-text-white`}>
          Since 2023
        </p>
      </div>
      <nav className={s.nav}>
        <NavList type="desktop" />
      </nav>
    </header>
  );
}
