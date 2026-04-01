import Stats from "./Stats";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111827] text-white py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          {/* <p className="text-indigo-400 text-sm uppercase tracking-widest mb-3">
            About
          </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
      className="text-gray-400 text-base sm:text-lg leading-relaxed"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I’m a Web Developer specializing in{" "}
        <motion.span
          className="text-white font-medium"
          whileHover={{ scale: 1.1 }}
        >
          React.js
        </motion.span>{" "}
        and{" "}
        <motion.span
          className="text-white font-medium"
          whileHover={{ scale: 1.1 }}
        >
          WordPress
        </motion.span>
        , focused on building responsive, modern, and high-performance
        websites.
      </motion.p>

      <motion.p
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I enjoy transforming designs into clean, functional user
        interfaces and continuously improving my skills to deliver
        better digital experiences.
      </motion.p>
    </motion.div>

          {/* Stats Section */}
          <Stats />

        </div>
      </div>
    </section>
  );
};

export default About;
