import { useCallback, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Footer } from "./components/Footer";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { useReveal } from "./hooks/useReveal";

// Show the intro once per visit, and skip it for people who turned off animations.
const shouldShowIntro = () => {
  try {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
    return sessionStorage.getItem("introSeen") !== "1";
  } catch {
    return true;
  }
};

function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      // storage blocked (private window etc.), the intro will just show again
    }
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <LoadingScreen onComplete={finishIntro} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
