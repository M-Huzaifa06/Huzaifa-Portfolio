import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      setMessage('Please enter an email address');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Get existing emails from localStorage
    const existingEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

    // Check if email already exists
    if (existingEmails.includes(email)) {
      setMessage('This email is already subscribed');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Add new email
    existingEmails.push(email);
    localStorage.setItem('newsletterEmails', JSON.stringify(existingEmails));

    // Show success message
    setMessage('✓ Successfully subscribed!');
    setEmail('');
    setSubscribed(true);
    setTimeout(() => {
      setMessage('');
      setSubscribed(false);
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-20 pb-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section - Brand & Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          <div className="flex-1">
            {/* <h2 className="text-3xl font-bold text-white mb-3">3I TECH SOLUTIONS</h2> */}
            <h2 className="text-3xl font-bold text-white mb-3">Huzaifa Mughal</h2>
            <p className="text-gray-400 max-w-md">
              We build modern, high-converting websites for businesses that want to stand out and generate more leads.
            </p>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="flex-1 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition"
                />
                <button 
                  onClick={handleSubscribe}
                  className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition ${
                    subscribed 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {subscribed ? '✓' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`text-sm font-medium ${
                  message.includes('✓') 
                    ? 'text-green-400' 
                    : message.includes('already') 
                    ? 'text-yellow-400' 
                    : 'text-red-400'
                }`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section - Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-600 rounded"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-indigo-600 transition font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-600 transition font-medium">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-indigo-600 transition font-medium">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-indigo-600 transition font-medium">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-600 transition font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-600 rounded"></span>
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 font-medium">Web Design</li>
              <li className="text-gray-400 font-medium">Web Development</li>
              <li className="text-gray-400 font-medium">SEO Optimization</li>
              <li className="text-gray-400 font-medium">Maintenance</li>
              <li className="text-gray-400 font-medium">Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-600 rounded"></span>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 font-medium">📍 Gujranwala, Pakistan</li>
              <li>
                <a href="mailto:mughalhuzaifa3486@gmail.com" className="text-gray-400 hover:text-indigo-600 transition font-medium">
                  📧 mughalhuzaifa3486@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923286152230" className="text-gray-400 hover:text-indigo-600 transition font-medium">
                  📞 +92 328 615 2230
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-10"></div>

        {/* Bottom Section - Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-medium">
            © {new Date().getFullYear()} Huzaifa Mughal. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition font-semibold">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition font-semibold">LinkedIn</a>
            <a href="https://www.instagram.com/3i_tech_solutions/" className="text-gray-400 hover:text-indigo-600 transition font-semibold">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;