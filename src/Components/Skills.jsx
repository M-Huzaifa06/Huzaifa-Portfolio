import wordpressLogo from "../assets/wordpress-2.svg";

const Skills = () => {
  const skills = [
    {
      name: "WordPress",
      logo: wordpressLogo,
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    // {
    //   name: "JavaScript",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    // },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          {/* <p className="text-indigo-400 text-sm uppercase tracking-widest mb-3">
            Expertise
          </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to build modern, scalable and
            high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10
                         rounded-xl p-6
                         flex flex-col items-center justify-center
                         transition-all duration-300
                         hover:border-indigo-500/40
                         hover:-translate-y-2
                         hover:shadow-lg hover:shadow-indigo-500/10"
            >
              {/* Logo */}
              <div className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name */}
              <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
