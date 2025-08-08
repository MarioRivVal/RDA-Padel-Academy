import { useState, useEffect } from "react";
import MobileHeader from "./layouts/MobileHeader";
import DesktopHeader from "./layouts/DesktopHeader";
import ClasesSection from "./layouts/ClasesSection";

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
      <header>{isMobile ? <MobileHeader /> : <DesktopHeader />}</header>
      <section id="clases">
        <ClasesSection />
      </section>
      <section></section>
    </>
  );
}

export default App;
