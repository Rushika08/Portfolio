import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import SocialLinks from './components/SocialLinks';
import backgroundImage from './assets/Hero_bg.jpg';
import Achievements from './components/Awards';
import MediumPosts from './components/MediumPosts';

function App() {
  return (
    <div
      className="text-white min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* 🔲 Semi-transparent overlay for shading */}
      <div className="bg-black/70 min-h-screen">
        <SocialLinks />
        <Hero />
        <About />
        <Experience />
        <Education />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
        <SocialLinks isMobile={true} />
        <MediumPosts />
      </div>
    </div>
  );
}

export default App;
