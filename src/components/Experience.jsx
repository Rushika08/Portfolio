import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Engineering Intern',
    company: '[Company Name]',
    date: 'Apr 2024 - Oct 2024',
    points: [
      'Led the ETL process in Azure Modern Data Platform projects.',
      'Migrated legacy Java code to Azure-based Python pipelines.',
      'Built dashboards for an insurance company using Power BI.',
    ],
  },
  {
    title: 'Freelance Data Engineer',
    company: 'Remote',
    date: 'Jan 2023 - Mar 2024',
    points: [
      'Designed real-time data pipelines using Kafka and Data Factory.',
      'Built analytics layers with SQL and created client dashboards.',
    ],
  },
  {
    title: 'Computer Engineering Undergraduate',
    company: 'Your University',
    date: '2021 - 2025',
    points: [
      'Studied computer systems, databases, and cloud computing.',
      'Completed projects in image recognition and sports scoring apps.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Experience</h2>
      <div className="relative border-l border-cyan-500">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 top-1.5"></div>
            <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
            <span className="text-slate-400 text-sm">{exp.company} | {exp.date}</span>
            <ul className="mt-2 list-disc ml-5 text-slate-300 text-sm space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
