// components/Modal.jsx
import { useEffect, useRef } from "react";
import s from "../assets/styles/components/modal.module.css";
import CloseIcon from "../assets/icons/close.svg?react";

const Modal = ({ isActive, onClose, children }) => {
  const closeBtnRef = useRef(null);

  // Cerrar con ESC y enfocar el botón de cierre al abrir
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // foco al botón de cerrar
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [isActive, onClose]);

  // Cerrar haciendo click fuera del contenedor
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className={`${s.modalBox} ${isActive ? s.modalBoxActive : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isActive}
      onClick={handleBackdropClick}
    >
      <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeBtnRef}
          className={`${s.modalIcon} ${s.clickable}`}
          onClick={onClose}
          aria-label="Cerrar modal"
          type="button"
        >
          <CloseIcon />
        </button>

        <div className={s.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
