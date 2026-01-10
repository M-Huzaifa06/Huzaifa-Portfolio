import img from '../assets/Screenshot1.png'
import img2 from '../assets/Screenshot2.png'
const Projects = () => {
  const projects = [
    { title: 'Spotify-Clone', desc: 'A fully responsive Spotify Clone featuring a modern UI, hover animations, music cards, smooth scrolling, and an interactive audio player built using HTML, CSS, and JavaScript.', link: 'https://spotify-clone-eight-liart.vercel.app/', photo: img },
    { title: 'E-Commerce UI', desc: 'A modern and responsive e-commerce homepage UI built with React and Tailwind CSS, featuring clean product sections, smooth layout, and a professional storefront design.', link: 'https://homepage-ui-kappa.vercel.app/', photo: img2 },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <img src={project.photo} alt={project.title} className='mb-2 opacity-60 rounded-2xl'/>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;