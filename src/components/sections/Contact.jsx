import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export const Contact = () => {

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/arrexha",
      color: "hover:text-gray-400",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/arrexha/",
      color: "hover:text-blue-400",
      external: true,
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:arrexha529@gmail.com",
      color: "hover:text-red-400",
      external: true,
    },
    {
      name: "CV",
      icon: FaFilePdf,
      url: "/Ar%20Rexha.pdf",
      download: "Ar Rexha.pdf",
      color: "hover:text-orange-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-black text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Social Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target={social.download ? undefined : "_blank"}
                  rel={social.download ? undefined : "noopener noreferrer"}
                  download={social.download}
                  className={`flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <IconComponent className="text-5xl" />
                  <p className="text-sm font-medium">{social.name}</p>
                </a>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
