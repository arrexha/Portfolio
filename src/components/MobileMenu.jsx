import { useEffect } from "react";
import { navLinks } from "../navLinks";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-md z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {navLinks.map((link, i) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
          className={`text-2xl font-semibold text-white my-4 transition-all duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
