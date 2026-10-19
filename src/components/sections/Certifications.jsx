const certifications = [
  {
    title: "Web Application Developer",
    issuer: "Beetroot Academy",
    date: "10/2025 – 12/2025",
    skills: ["JavaScript", "React", "TypeScript"],
    link: "https://drive.google.com/file/d/1u0be4yVBZLoQDPNXNByYWjaMhdjT9xAj/view?usp=sharing",
  },
  {
    title: "Python",
    issuer: "Beetroot Academy",
    date: "11/2023 – 03/2024",
    skills: ["Python"],
    link: "https://drive.google.com/file/d/1FenyAf7P6wqHfvQQakzdj2kwXwSgLiQr/view?usp=sharing",
  },
  {
    title: "UI/UX Design",
    issuer: "J-Coders",
    date: "08/2020",
    skills: ["UI Design", "UX Design", "Figma"],
    link: "https://drive.google.com/file/d/110pABLoFCNMSjsbg3SLBWtrb7lVYpq80/view?usp=sharing",
  },
  {
    title: "HTML & CSS",
    issuer: "J-Coders",
    date: "06/2020",
    skills: ["HTML", "CSS", "Bootstrap"],
    link: "https://drive.google.com/file/d/1M6yk4oQOOiZXHG8zGf3tq-75HkzP7dX_/view?usp=sharing",
  },
  {
    title: "Junior IT",
    issuer: "Shkolla Digjitale",
    issuerUrl: "https://shkolladigjitale.com/",
    date: "09/2015 – 03/2016",
    link: "https://drive.google.com/file/d/16nB896GXLYwEZlNHmu-OXF4CZTbC4pom/view?usp=sharing",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 data-reveal className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              data-reveal
              className="flex flex-col rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">
                {cert.issuerUrl ? (
                  <a href={cert.issuerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 hover:underline transition-colors">
                    {cert.issuer}
                  </a>
                ) : (
                  cert.issuer
                )}
              </p>
              <p className="font-mono text-sm text-gray-500 mb-4">{cert.date}</p>

              {cert.skills && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
