export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#0b0b0f] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div
            className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase 
                          px-6 py-2 rounded-full 
                          bg-linear-to-r from-indigo-400 to-purple-500 mb-6"
          >
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let's Build Something <br />
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            title="Email"
            link="mailto:mughalhuzaifa3486@gmail.com"
            text="mughalhuzaifa3486@gmail.com"
            delay="100"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </ContactCard>

          <ContactCard
            title="Instagram"
            // link="https://www.instagram.com/3i_tech_solutions/"
            link="https://www.instagram.com/mughalhuzaifa3486/"
            text="Follow on Instagram"
            delay="150"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-2.63-2.63A4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </ContactCard>

          <ContactCard
            title="LinkedIn"
            link="#"
            text="LinkedIn is currently unavailable"
            // text="Connect on LinkedIn"
            delay="200"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
              2.761 2.239 5 5 5h14c2.762 0 5-2.239 
              5-5v-14c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268
              c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 
              6.5 3.204s1.75.79 1.75 1.764-.783 
              1.764-1.75 1.764zM21 19h-3v-5.604
              c0-3.368-4-3.113-4 0V19h-3V8h3v1.765
              c1.396-2.586 7-2.777 7 2.476V19z"
              />
            </svg>
          </ContactCard>

          <ContactCard
            title="WhatsApp"
            link="https://wa.me/+923286152230"
            text="Chat on WhatsApp"
            delay="250"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12.05 0C5.495 0 .16 5.335.157 
              11.892c0 2.096.547 4.142 1.588 
              5.945L.057 24l6.305-1.654a11.882 
              11.882 0 005.683 1.448c6.554 
              0 11.89-5.335 
              11.893-11.893A11.82 
              11.82 0 0012.05 0z"
              />
            </svg>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, text, link, children, delay }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#111118] border border-white/5 rounded-xl 
             p-5 sm:p-6 text-center
             transition-all duration-300 
             hover:-translate-y-1 hover:border-indigo-400/40"
      style={{
        animation: `fadeUp 0.4s ease forwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 
                  flex items-center justify-center
                  rounded-full bg-white/5 text-indigo-400"
      >
        {children}
      </div>

      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>

      <p className="text-xs sm:text-sm text-gray-400 hover:text-indigo-400 transition wrap-break-words">
        {text}
      </p>
    </a>
  );
}
