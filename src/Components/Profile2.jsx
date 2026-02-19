import image from "../assets/img2.png";
import image1 from "../assets/img3.png";
import { motion } from "framer-motion";

function Profile2() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                      bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-indigo-400 uppercase tracking-widest text-sm mb-4">
              Creative Developer
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Designing & Building
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Modern Web Experiences
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              I create visually engaging, high-performance web applications 
              with clean UI, smooth interactions, and scalable architecture.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-sm font-medium
                           bg-gradient-to-r from-indigo-500 to-purple-500
                           hover:opacity-90 transition duration-300
                           shadow-lg shadow-indigo-500/30"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-full text-sm font-medium
                           border border-white/20
                           hover:border-indigo-400
                           hover:text-indigo-400
                           transition duration-300"
              >
                Learn More
              </a>

            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-full ">

              {/* Creative Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr 
                              from-indigo-500/30 to-purple-500/30 
                              blur-3xl rounded-full" />

              <img
                src={image1}
                alt="Profile"
                className="relative w-full object-contain 
                           drop-shadow-2xl  rounded-full
                           hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Profile2;
