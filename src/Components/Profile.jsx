import image from '../assets/img2.png'
import { motion } from "framer-motion";
//from-black to-white bg-linear-to-r
function Profile() {
  return (
    <div className="container bg-black h-screen flex flex-col sm:flex-row">
      <motion.div
      initial={{ x: -100, opacity: 0 }}   // start from left
      animate={{ x: 0, opacity: 1 }}      // move to original position
      transition={{ duration: 2, ease: "easeIn" }}
      className="content h-[70vh] sm:h-auto text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)] 
                 sm:w-2/3 flex flex-col justify-center gap-6 ml-10 text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold">
        Hi, I am Web Developer.
      </h1>

      <p className="text-xl sm:text-2xl">
        Full-Stack Developer | Designer
      </p>

      <div className="btn">
        <button className="py-4 px-8 rounded-sm border-green-100 border mx-3 my-4 
                           cursor-pointer hover:bg-[#678e1d] hover:border-none">
          <a href="#projects">Show Projects</a>
        </button>

        <button className="py-4 px-8 rounded-sm bg-[#678e1d] mx-3 my-4 
                           cursor-pointer hover:bg-black hover:border-green-100 hover:border">
          <a href="#about">Learn More</a>
        </button>
      </div>
    </motion.div>

      <motion.div 
      initial={{ y: 100, opacity: 0 }}   // start from left
      animate={{ y: 0, opacity: 1 }}      // move to original position
      transition={{ duration: 2, ease: "easeIn" }}
      className="image"
      >
        <img src={image} className="img h-[30vh] sm:h-full mx-auto " alt="" />
      </motion.div>

    </div>
  );
}

export default Profile;