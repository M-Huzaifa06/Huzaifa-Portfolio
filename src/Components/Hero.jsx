const Hero = () => {
    //bg-gradient-to-r
  return (
    <section id="Services" className="h-screen flex items-center justify-center  from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
        <p className="text-xl mb-8">Full-Stack Developer | Designer</p>
        <a href="#about" className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;