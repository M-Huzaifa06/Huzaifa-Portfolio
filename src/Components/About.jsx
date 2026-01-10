import Stats from "./Stats";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I’m a Web Developer specializing in React.js and Tailwind CSS, focused on building responsive, modern, and high-performance websites. I enjoy transforming designs into clean, functional user interfaces and continuously improving my skills to deliver better digital experiences.
        </p>
        <Stats />
      </div>
    </section>
  );
};

export default About;