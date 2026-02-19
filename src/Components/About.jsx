import Stats from "./Stats";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0b0b0f] text-white py-20 sm:py-24"
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
          <div className="text-gray-400 text-base sm:text-lg leading-relaxed">
            <p>
              I’m a Web Developer specializing in{" "}
              <span className="text-white font-medium">React.js</span> and{" "}
              <span className="text-white font-medium">Tailwind CSS</span>,
              focused on building responsive, modern, and high-performance
              websites.
            </p>

            <p className="mt-6">
              I enjoy transforming designs into clean, functional user
              interfaces and continuously improving my skills to deliver
              better digital experiences.
            </p>
          </div>

          {/* Stats Section */}
          <Stats />

        </div>
      </div>
    </section>
  );
};

export default About;
