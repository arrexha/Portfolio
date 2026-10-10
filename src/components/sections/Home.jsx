const secondaryBtn =
  "border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center z-10 px-4 max-w-3xl">
        <p className="font-mono text-sm text-cyan-400 mb-4">Junior IT · Frontend Developer</p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Ar Rexha
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          I build web apps with React and TypeScript, and work in IT at StarLabs. Learning fast and always building something new.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a href="#certifications" className={secondaryBtn}>
            Certifications
          </a>
          <a href="#contact" className={secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
