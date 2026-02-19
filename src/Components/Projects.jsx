import img from '../assets/Screenshot1.png'
import img2 from '../assets/Screenshot2.png'
import img3 from '../assets/Screenshot4.png'
import img4 from '../assets/Screenshot3.png'
import img5 from '../assets/Screenshot5.png'

const Projects = () => {
  const projects = [
    { 
      title: 'Ecommerce-Website', 
      desc: 'Designed and developed a responsive eCommerce website using React.js and Tailwind CSS. Implemented dynamic cart functionality, product management, and a modern user interface to deliver a smooth online shopping experience.', 
      link: 'https://ecommerce-website-omega-weld.vercel.app/', 
      photo: img5 
    },
    { 
      title: 'Spotify-Clone', 
      desc: 'A fully responsive Spotify Clone featuring a modern UI, hover animations, music cards, smooth scrolling, and an interactive audio player built using HTML, CSS, and JavaScript.', 
      link: 'https://spotify-clone-eight-liart.vercel.app/', 
      photo: img 
    },
    { 
      title: 'E-Commerce UI', 
      desc: 'A modern and responsive e-commerce homepage UI built with React and Tailwind CSS, featuring clean product sections, smooth layout, and a professional storefront design.', 
      link: 'https://homepage-ui-kappa.vercel.app/', 
      photo: img2 
    },
    { 
      title: 'Todo-List', 
      desc: 'A modern and responsive Todo List web application built using React.js and Tailwind CSS.', 
      link: 'https://todo-list-pearl-eta.vercel.app/', 
      photo: img3 
    },
    { 
      title: 'Weather-App', 
      desc: 'A responsive Weather Application built using React.js and API integration. It allows users to search any city and view real-time weather. Designed with a clean and modern UI for a smooth user experience.', 
      link: 'https://weather-app-nine-xi-62.vercel.app/', 
      photo: img4 
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          My <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            
            <div
  key={index}
  className="group relative bg-white/5 border border-white/10 
             rounded-2xl overflow-hidden
             transition-all duration-300
             hover:-translate-y-2
             hover:border-indigo-500/40
             hover:shadow-xl hover:shadow-indigo-500/10"
>

  {/* Image Wrapper */}
  <div className="relative overflow-hidden">
    <img
      src={project.photo}
      alt={project.title}
      className="w-full h-52 object-cover
                 transition-transform duration-500
                 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 opacity-0 
                    group-hover:opacity-100 
                    transition duration-300
                    z-10" />
  </div>

  {/* Content */}
  <div className="relative z-20 p-6 flex flex-col h-full">
    <h3 className="text-xl font-semibold mb-3">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm mb-6 `flex-grow`">
      {project.desc}
    </p>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-center
                 bg-indigo-500 hover:bg-indigo-600
                 transition-all duration-300
                 rounded-lg px-5 py-2 text-sm font-medium"
    >
      View Project →
    </a>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
