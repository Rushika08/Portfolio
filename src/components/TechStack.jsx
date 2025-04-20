import { motion } from 'framer-motion';

const TechStack = () => {
  const skills = [
    { title: 'Programming / Scripting Languages', tools: ['C++', 'Python', 'Java', 'C', 'Assembly'] },
    { title: 'Data Engineering', tools: ['Azure Synapse Analytics', 'Azure Data Factory', 'Apache Spark', 'Power BI', 'SSIS', 'SSMS'] },
    { title: 'Databases', tools: ['SQL', 'T-SQL', 'SQL Server', 'Oracle DB', 'MySQL', 'Azure Blob Storage', 'Azure Dedicated SQL Pools'] },
    { title: 'AI & Data Science', tools: ['Data Mining', 'Machine Learning', 'NLP', 'Computer Vision'] },
    { title: 'Frontend', tools: ['HTML', 'CSS', 'JavaScript', 'Streamlit', 'React'] },
    { title: 'Other', tools: ['Embedded Systems', 'Microcontrollers', 'Electronics', 'Git'] },
    { title: 'Core CS Fundamentals', tools: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'Computer Security', 'Distributed Systems', 'Compilers', 'Advanced Algorithms'] },
  ];

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Technical Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 border border-red-600 rounded-xl bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-3">{s.title}</h3>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              {s.tools.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
