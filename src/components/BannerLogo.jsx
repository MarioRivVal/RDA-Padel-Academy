import s from "../assets/styles/components/bannerLogo.module.css";
import { useState, useEffect } from "react";

import ResponsiveImage from "./ResponsiveImage";

export default function BannerLogo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.imgBox}>
      <ResponsiveImage
        name={`logos/logo-${isMobile ? "ver" : "hor"}`}
        ext="png"
        alt="Logo de RDA Padel"
        className={s.image}
        overlay={false}
      />
    </div>
  );
}
