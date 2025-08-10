import { useState, useEffect } from "react";
import MobileHeader from "./layouts/MobileHeader";
import DesktopHeader from "./layouts/DesktopHeader";
import ClasesSection from "./layouts/ClasesSection";
import Banner from "./layouts/Banner";

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
      <section id="clases" className="white-bg-section">
        <ClasesSection />
      </section>
      <section className="black-section">
        <Banner />
      </section>
    </>
  );
}

export default App;
