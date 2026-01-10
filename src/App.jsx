import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      <Profile />
      <Header />
      {/* <Hero /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;