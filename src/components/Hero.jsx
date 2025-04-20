import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-800 to-slate-900">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm Rushika — Data Engineer & ETL Automator
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-slate-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Data Pipelines • ETL • Azure • Python • SQL
      </motion.p>
    </section>
  );
};

export default Hero;
