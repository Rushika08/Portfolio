import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <SocialLinks />
      <Hero />
      <About />
      <SocialLinks isMobile={true} />
      <Experience />
      <Education />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
