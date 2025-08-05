import { useState, useEffect } from "react";
import MobileHeader from "./layouts/MobileHeader";
import DesktopHeader from "./layouts/DesktopHeader";

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
      <div className="div-relleno">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        cum facilis ipsam praesentium deserunt incidunt consequuntur quas nulla
        at! Saepe quia, ipsam quis nostrum optio beatae quam laboriosam fugiat.
      </div>
      <div className="div-relleno-2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        cum facilis ipsam praesentium deserunt incidunt consequuntur quas nulla
        at! Saepe quia, ipsam quis nostrum optio beatae quam laboriosam fugiat.
      </div>
      <div className="div-relleno-3">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        cum facilis ipsam praesentium deserunt incidunt consequuntur quas nulla
        at! Saepe quia, ipsam quis nostrum optio beatae quam laboriosam fugiat.
      </div>
    </>
  );
}

export default App;
