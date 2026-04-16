import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);   // show after scrolling
      } else {
        setShowHeader(false);  // hide at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-md bg-white/5 shadow-lg z-50 text-white
      transition-all duration-500
      ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">3I TECH SOLUTIONS</h1> */}
        <h1 className="text-2xl font-bold">Huzaifa Mughal</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/5 px-6 py-4">
          <a href="#hero" className="block py-2 hover:text-blue-400">Home</a>
          <a href="#about" className="block py-2 hover:text-blue-400">About</a>
          <a href="#skills" className="block py-2 hover:text-blue-400">Skills</a>
          <a href="#projects" className="block py-2 hover:text-blue-400">Projects</a>
          <a href="#contact" className="block py-2 hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
