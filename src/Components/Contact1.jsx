import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-950 text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let’s <span className="text-indigo-400">Connect</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Have a project in mind or just want to say hello?
            Fill out the form and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-xl p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-indigo-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-indigo-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-indigo-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition rounded-md py-3 font-medium text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
