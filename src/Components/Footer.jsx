const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            3I TECH SOLUTIONS
          </h2>
          <p className="text-sm leading-relaxed">
            We build modern, high-converting websites for businesses that want
            to stand out and generate more leads.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Gujranwala, Pakistan</p>
          <p className="text-sm">Email: mughalhuzaifa3486@gmail.com</p>
          <p className="text-sm mb-4">Phone: +92 XXX XXX XXXX</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-indigo-600 transition">Facebook</a>
            <a href="#" className="hover:text-indigo-600 transition">LinkedIn</a>
            <a href="https://www.instagram.com/3i_tech_solutions/" className="hover:text-indigo-600 transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Huzaifa Mughal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;