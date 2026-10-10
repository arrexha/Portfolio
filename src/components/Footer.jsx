const YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className="border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
      <p>© {YEAR} Ar Rexha.</p>
      <a href="#home" className="hover:text-white transition-colors">
        Back to top ↑
      </a>
    </div>
  </footer>
);
