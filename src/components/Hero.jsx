import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 py-10 sm:py-20">
      {/* Optional Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-black/50 z-10"></div>

      {/* Hero Heading with Brighter Text */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white shadow-none z-20 relative">
        Hi, I'm Rushika
        <span className="block text-xl mt-2 text-slate-200">A Computer Engineering Student focused on Data Engineering & Beyond</span>
      </h1>

      {/* Hero Subtitle with Motion Effect */}
      <motion.p
        className="mt-4 text-lg text-slate-300 z-20 relative"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        Data Engineering • Software Engineering • Electronics
      </motion.p>

      {/* Resume Section */}
      <div className="flex flex-col sm:flex-row sm:gap-4 items-center mt-6 z-20 relative">
        <a
          href="/Portfolio/Rushika_Jayasinghe_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 mb-4 sm:mb-0 sm:mr-4"
        >
          View Resume
        </a>
        <a
          href="/Portfolio/Rushika_Jayasinghe_Resume.pdf"
          download
          className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
