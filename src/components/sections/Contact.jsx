import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const EMAIL = "arrexha529@gmail.com";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/arrexha", color: "hover:text-gray-400", external: true },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/arrexha/", color: "hover:text-blue-400", external: true },
  { name: "Email", icon: FaEnvelope, url: `mailto:${EMAIL}`, color: "hover:text-red-400" },
  { name: "CV", icon: FaFilePdf, url: "/Ar%20Rexha.pdf", download: "Ar Rexha.pdf", color: "hover:text-orange-400" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div data-reveal className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="font-mono text-gray-300 mb-12 select-all break-all">{EMAIL}</p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                download={social.download}
                className={`flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                <Icon className="text-5xl" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
