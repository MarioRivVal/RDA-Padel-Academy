import s from "../assets/styles/layouts/banner.module.css";
import {
  greenBtn,
  blackBtn,
} from "../assets/styles/components/button.module.css";
import Button from "../components/Button";
import ResponsiveImage from "../components/ResponsiveImage";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import FacebookIcon from "../assets/icons/facebook.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";

export default function Banner({ type }) {
  const handleClickBtn = () => {
    console.log("enviar mensaje");
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.logosBox}>
          <ResponsiveImage
            name="logos/logo-ver"
            ext="png"
            alt="Logo de RDA Padel en formato vertical"
            className={s.logoImg}
            overlay={false}
          />
          {type === "footer" && (
            <div className={s.socials}>
              <a className={s.socialLink} href="">
                <FacebookIcon />
              </a>
              <a className={s.socialLink} href="">
                <InstagramIcon />
              </a>
            </div>
          )}
        </div>

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
            {type === "footer" ? (
              <>
                Unete al <span className="u-text-green">Equipo</span>{" "}
              </>
            ) : (
              <>
                {" "}
                Tu Academia de <span className="u-text-green">Pádel</span>{" "}
              </>
            )}
          </h1>
          <div
            className={s.ctaMap}
            role="group"
            aria-label="Ubicación. Pulsa el icono para abrir Maps"
          >
            <p className={s.textMap}>¿Dónde estamos? Descúbrelo en Maps</p>

            <a
              className={s.iconMap}
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
      {type === "footer" && (
        <div className={s.copyrightBox}>
          <div className={s.copyRightImg}>
            <img
              src="./images/minilogo.png"
              alt="logo de la escuela de Padel"
            />
            <p> RDA Padel Academy &copy; {new Date().getFullYear()}</p>
          </div>
          <p>Todos los derecho reservados</p>
          <p>
            Creado con pasión por{" "}
            <a href="" className="u-text-green">
              netneo.es
            </a>
          </p>
        </div>
      )}
    </>
  );
}
