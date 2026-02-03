export const Projects = () => {
  const projects = [
    {
      title: "Crypoto Tracker",
      issuer: "Real-time cryptocurrency prices and market data",
      languages: ["React", "TypeScript"],
      link: "https://github.com/arrexha/Crypto_Tracker" 
    },
        {
      title: "Football Statistics Dashboard",
      issuer: "Interactive Streamlit app for real‑time soccer stats, team analysis, player performance, standings, and AI match predictions.",
      languages: ["Python"],
      link: "https://github.com/arrexha/Football-Statistics-Dashboard" 
    },
        {
      title: "Premier League 2025/26 Prediction",
      issuer: "Predicts the Premier League table using a Random Forest Classifier with Python, Pandas, NumPy and scikit-learn.",
      languages: ["Python"],
      link: "https://github.com/arrexha/Premier-League-2025-26-Predition" 
    },  
    {
      title: "Weather App",
      issuer: "A simple weather application written in Python that retrieves and displays current weather information for a given location using a public weather API.",
      languages: ["Python"],
      link: "https://github.com/arrexha/Weather-App"
    },
   
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
           Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <div key={index} className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-2">{proj.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{proj.date}</p>
              {proj.languages && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              )}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  View On GitHub 
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};