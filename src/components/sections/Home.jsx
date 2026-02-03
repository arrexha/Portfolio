export const Home = () => {
  

    return <section id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
       <div className="text-center z=10 px-4">
             <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Hi, I'm Ar Rexha
             </h1>

             <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
             Computer Science and Engineering student with hands-on experience in programming and frontend development.
             I have contributed to real-world projects using HTML & CSS, JavaScript, React, TypeScript, and Python

             </p>

             <div className="flex justify-center space-x-4">
               <a
                href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:translate-y-0.5 
               hover:shadow[0_0_15xp_rgba(59,130,245,0.4)]">
                View Projects
               </a>
               <a
                href="#certifications" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15xp_rgba(59,130,245,0.2)] 
                hover:500/10">
                Certifications
               </a>
                              <a
                href="#contact" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15xp_rgba(59,130,245,0.2)] 
                hover:500/10">
                Contact Me
               </a>

             </div>


       </div>







    </section>

}