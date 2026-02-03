export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-white text-2xl font-bold">
          Ar Rexha
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
           <a href="#certifications" className="text-gray-300 hover:text-white transition">Certifications</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};