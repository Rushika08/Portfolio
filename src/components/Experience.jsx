import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Associate Data Engineer',
    company: 'Creative Software',
    date: 'March 2025 - Present',
    points: [
      'Primarily involved in building an on-premise data warehousing solution.',
      'Designing and maintaining ETL pipelines using on-premise data tools.',
      'Extracting, transforming, and integrating data from multiple database systems.',
      'Writing report logics & preparing dashboards in Power BI to support data-driven insights.',
      'Preparing high-quality, reliable data to support reporting and dashboard development.',
    ],
  },
  {
    title: 'Data Engineering Intern',
    company: 'Creative Software',
    date: 'April 2024 - February 2025',
    points: [
      'Contributed to developing a modern data platform using Azure Cloud services.',
      'Designed and optimized ETL pipelines with Azure Synapse Analytics, Python, and TSQL to ensure data integrity and performance.',
      'Migrated legacy Java-based processes to Azure, enhancing scalability with cloud native solutions.',
      'Created and automated reporting scripts to prepare data for Power BI dashboards.',
      'Documented ETL and migration workflows to support knowledge transfer and long-term maintainability.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Experience</h2>
      <div className="relative border-l border-cyan-500 mx-auto max-w-4xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="mb-10 ml-10"
          >
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 top-1.5"></div>
            <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
            <span className="text-slate-400 text-sm">
              <a
                href="https://www.creativesoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                {exp.company}
              </a>{' '}
              | {exp.date}
            </span>

            <p className="mt-3 text-slate-300 text-sm">{exp.points[0]}</p>

            <ul className="mt-2 list-disc ml-5 text-slate-300 text-sm space-y-1">
              {exp.points.slice(1).map((point, i) => (
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
