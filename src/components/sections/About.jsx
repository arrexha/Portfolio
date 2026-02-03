export const About = () => {

   const languagesSkills = 
   ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python",];


        return (
            <section id="about" 
            className="min-h-screen flex items-center justify-center py-20">
                         
                <div className="max-w-3xl mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                   {" "}
                   About me</h2>
                   <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                           22 year old Computer Science & Engineering student passionate about frontend development. Quick to learn and highly motivated, I enjoy creating web applications and exploring the latest technologies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bokd mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languagesSkills.map((tech) => (
                                    <span 
                                    key={tech}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover-shadow-[0_2px_8px_rgba(59,130,2246,0.2)]transition"
                                    >
                                    {tech}
                                    </span>
                                
                                
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    
                   </div>
                </div>
            </section>
        )
};