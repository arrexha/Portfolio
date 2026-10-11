import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency prices and market data.",
    tech: ["React", "TypeScript"],
    github: "https://github.com/arrexha/Crypto_Tracker",
  },
  {
    title: "Football Statistics Dashboard",
    description:
      "Interactive Streamlit app for real-time soccer stats, team analysis, player performance, standings, and AI match predictions.",
    tech: ["Python", "Streamlit", "Plotly"],
    github: "https://github.com/arrexha/Football-Statistics-Dashboard",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application written in Python that retrieves and displays current weather information for a given location using a public weather API.",
    tech: ["Python"],
    github: "https://github.com/arrexha/Weather-App",
  },
  {
    title: "This Portfolio",
    description: "The site you're on right now. Built with React, Vite and Tailwind CSS, deployed on Netlify.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/arrexha/Portfolio",
    demo: "https://arrexha.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 data-reveal className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <div
              key={proj.title}
              data-reveal
              className="flex flex-col rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
