export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-bold tracking-widest uppercase text-white mb-4 mx-auto border rounded-3xl w-[35vw] sm:w-[15vw] py-2 bg-linear-to-r from-indigo-400 to-purple-500">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's Build Something <br />
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Email */}
          <ContactCard
            title="Email"
            link="mailto:mughalhuzaifa3486@gmail.com"
            text="mughalhuzaifa3486@gmail.com"
            delay="100"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </ContactCard>

          {/* Phone */}
          <ContactCard
            title="Phone"
            link="tel:+923286152230"
            text="+92 328 6152230"
            delay="150"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </ContactCard>

          {/* LinkedIn */}
          <ContactCard
            title="LinkedIn"
            link=""
            text="Connect on LinkedIn"
            delay="200"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM21 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
            </svg>
          </ContactCard>

          {/* WhatsApp */}
          <ContactCard
            title="WhatsApp"
            link="https://wa.me/923286152230"
            text="Chat on WhatsApp"
            delay="250"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0012.05 0z" />
            </svg>
          </ContactCard>

        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, text, link, children, delay }) {
  return (
    <div
      className="bg-[#111118] border border-white/5 rounded-xl p-6 text-center
                 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
      style={{
        animation: `fadeUp 0.4s ease forwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                      rounded-full bg-white/5 text-indigo-400">
        {children}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-indigo-400 transition"
      >
        {text}
      </a>
    </div>
  );
}
