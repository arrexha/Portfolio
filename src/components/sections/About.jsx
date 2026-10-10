const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python"],
  },
  {
    title: "IT & Tools",
    items: ["Windows / PC Admin", "IT Support", "Git & GitHub", "Tailwind CSS", "Bootstrap", "Figma"],
  },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 data-reveal className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div data-reveal className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Junior IT at StarLabs and Computer Science &amp; Engineering student passionate about frontend development.
            Quick to learn and highly motivated, I enjoy building web applications and exploring the latest technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl p-6 bg-white/[0.03] border border-white/5">
                <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
