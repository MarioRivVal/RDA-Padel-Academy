// layouts/Banner.jsx
import { useState } from "react"; // <-- quita "Children"
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
import Modal from "../components/Modal";
import Terms from "./Terms";

export default function Banner({ type }) {
  const [isModalActive, setModalActive] = useState(false); // <-- OK

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

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
              <a
                className={s.socialLink}
                href="https://www.facebook.com/profile.php?id=100093455030408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                className={s.socialLink}
                href="https://www.instagram.com/rda_padelacademy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          )}
        </div>

        <header className={s.header}>
          <div className={s.btns}>
            {type === "footer" ? (
              <>
                <Button
                  text="info@rdapadel.com"
                  href="mailto:info@rdapadel.com" // <-- corregido mailto
                  className={`${greenBtn} u-lowercase`}
                />
                <Button
                  text="628 800 205"
                  href="tel:+34628800205"
                  className={blackBtn}
                />
              </>
            ) : (
              <>
                <Button
                  text="Escríbenos"
                  className={greenBtn}
                  href="https://wa.me/+34628800205"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <Button text="Eventos" className={blackBtn} href="#eventos" />
              </>
            )}
          </div>

          <h1 className={`${s.title} u-text-white`}>
            {type === "footer" ? (
              <>
                Únete al <span className="u-text-green">Equipo</span>
              </>
            ) : (
              <>
                Tu Academia de <span className="u-text-green">Pádel</span>
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
              alt="logo de la escuela de Pádel"
            />
            <p>RDA Padel Academy &copy; {new Date().getFullYear()}</p>
          </div>
          <p>Todos los derechos reservados</p>

          {/* mejor como botón semántico */}
          <button type="button" className={s.legalLink} onClick={openModal}>
            Términos de uso
          </button>

          <p>
            Diseño y desarrollo por{" "}
            <a
              href="https://www.netneo.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="u-text-green"
            >
              netneo
            </a>
          </p>
        </div>
      )}

      {/* Pásale onClose al Modal */}
      <Modal isActive={isModalActive} onClose={closeModal}>
        <Terms />
      </Modal>
    </>
  );
}
