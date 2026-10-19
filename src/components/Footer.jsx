const YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className="border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
      <p>© {YEAR} Ar Rexha.</p>
    </div>
  </footer>
);
