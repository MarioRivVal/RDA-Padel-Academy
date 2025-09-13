import { useEffect, useState } from "react";
import s from "../../assets/styles/components/ui/scrollButtonGroup.module.css";

import ScrollUpButtonIcon from "../../assets/icons/arrowGreen.svg?react";

const ScrollButtonsGroup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <button
        className={`${s.scrollTop} ${isVisible ? s.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ScrollUpButtonIcon />
      </button>
    </>
  );
};

export default ScrollButtonsGroup;
