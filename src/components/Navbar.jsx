import { navLinks } from "../navLinks";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-white text-2xl font-bold">
          Ar Rexha
        </a>

        <div className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};
