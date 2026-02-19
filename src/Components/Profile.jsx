import image from "../assets/img2.png";
import image1 from "../assets/img3.png";
import { motion } from "framer-motion";
//from-black to-white bg-linear-to-r
function Profile() {
  return (
    <div className="container bg-black h-screen flex flex-col sm:flex-row">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Small Tag */}
        <p className="text-indigo-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
          Creative Developer
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Designing & Building
        </h1>

        <h2
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold 
                 bg-gradient-to-r from-indigo-400 to-purple-500
                 bg-clip-text text-transparent"
        >
          Modern Web Experiences
        </h2>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          I create visually engaging, high-performance web applications with
          clean UI, smooth interactions, and scalable architecture.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-sm font-medium
                 bg-gradient-to-r from-indigo-500 to-purple-500
                 hover:scale-105 hover:shadow-lg
                 hover:shadow-indigo-500/40
                 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="px-8 py-3 rounded-full text-sm font-medium
                 border border-white/20
                 hover:border-indigo-400
                 hover:text-indigo-400
                 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }} // start from left
        animate={{ y: 0, opacity: 1 }} // move to original position
        transition={{ duration: 2, ease: "easeIn" }}
        className="image"
      >
        <img src={image1} className="img h-full w-full sm:h-full  rounded-full" alt="" />
      </motion.div>
    </div>
  );
}

export default Profile;
