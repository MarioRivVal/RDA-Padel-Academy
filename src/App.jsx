import { useState, useEffect } from "react";
import MobileHeader from "./layouts/MobileHeader";
import DesktopHeader from "./layouts/DesktopHeader";
import ClasesSection from "./layouts/ClasesSection";
import Banner from "./layouts/Banner";
import EquiposSection from "./layouts/EquiposSection";
import IntroSection from "./layouts/IntroSection";
import BannerLogo from "./components/BannerLogo";
import CoachSection from "./layouts/CoachSection";
import ImagenSection from "./layouts/ImagenSection";
import EventosSection from "./layouts/EventosSection";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <main className="main">
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </main>
      <section className="white-bg-section">
        <IntroSection />
      </section>
      <section className="black-section">
        <Banner />
      </section>
      <section id="clases" className="white-bg-section">
        <ClasesSection />
      </section>
      <section className="black-section">
        <BannerLogo />
      </section>
      <section id="eventos" className="white-bg-section">
        <EventosSection />
      </section>
      <section id="equipos" className="black-bg-section">
        <EquiposSection />
      </section>
      <section id="coach" className="white-bg-section">
        <CoachSection />
      </section>
      <section className="black-section">
        <BannerLogo />
      </section>
      <section id="imagen" className="white-bg-section">
        <ImagenSection />
      </section>
      <section id="contacto" className="black-section">
        <Banner type="footer" />
      </section>
    </>
  );
}

export default App;
