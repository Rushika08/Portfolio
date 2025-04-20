import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Your University Name',
    degree: 'B.E. in Computer Engineering',
    date: '2021 - 2025',
    points: [
      'Specialized in Data Engineering and Cloud Computing.',
      'Completed projects in image recognition, ETL pipelines, and scoring systems.',
      'Relevant coursework: DBMS, Data Warehousing, AI, and Computer Vision.',
    ],
  },
  {
    institution: 'High School Name',
    degree: 'Higher Secondary Education (Science Stream)',
    date: '2019 - 2021',
    points: [
      'Focused on Physics, Chemistry, and Mathematics.',
      'Graduated with distinction.',
    ],
  },
];

const Education = () => {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Education</h2>
      <div className="relative border-l border-green-500">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-1.5"></div>
            <h3 className="text-xl font-bold text-green-400">{edu.degree}</h3>
            <span className="text-slate-400 text-sm">{edu.institution} | {edu.date}</span>
            <ul className="mt-2 list-disc ml-5 text-slate-300 text-sm space-y-1">
              {edu.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
