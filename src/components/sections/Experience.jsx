
const experience = [
  {
    role: "Junior IT",
    company: "StarLabs",
    date: "07/2026 – Present",
    location: "Prishtine, Kosovo",
  },
  {
    role: "Tier 1 Support Intern",
    company: "Nettxio",
    date: "10/2022 – 02/2023",
    location: "Prishtine, Kosovo",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 data-reveal className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Experience
        </h2>

        <ol className="relative border-l border-white/10 ml-2 space-y-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} data-reveal className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <p className="font-mono text-sm text-gray-500 mb-1">
                {job.date}
                {job.location && ` · ${job.location}`}
              </p>
              <h3 className="text-xl font-semibold text-white">{job.role}</h3>
              <p className="text-blue-400">{job.company}</p>
              {job.description && <p className="text-gray-400 mt-2">{job.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
