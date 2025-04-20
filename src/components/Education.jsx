import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Faculty of Engineering, University University of Sri Jayawardenepura',
    degree: 'B.Sc.Eng. (Hons) in Computer Engineering',
    date: 'Mar 2021 - Jul 2025',
    points: [
      'Specialized in Data Management',
      'Current GPA: 3.6/4.0',
    ],
  },
  {
    institution: 'Esoft Metro Campus, Negombo',
    degree: 'Diploma in Information Technology',
    date: 'Jun 2020 - Nov 2020',
  },
  {
    institution: 'Maris Stella College, Negombo',
    degree: 'G.C.E. Advanced Level (2019)',
    date: 'Aug 2019',
    points: [
      'Stream: Physical Science',
      'Results: 2As, 1B (Combined Mathematics, Chemistry, Physics)',
      'Z-Score: 1.9832',
    ],
  },
  {
    institution: 'Maris Stella College, Negombo',
    degree: 'G.C.E. Ordinary Level (2016)',
    date: 'Dec 2016',
    points: [
      'Results: 9As',
    ],
  },
  // {
  //   institution: 'Maris Stella College, Negombo',
  //   degree: 'Physical Science Stream',
  //   date: 'Jan 2006 - Aug 2019',
  //   exams: [
  //     {
  //       name: 'G.C.E. Advanced Level (2019)',
  //       details: [
  //         'Results: 2As, 1B (Combined Mathematics, Chemistry, Physics)',
  //         'Z-Score: 1.9832',
  //       ],
  //     },
  //     {
  //       name: 'G.C.E. Ordinary Level (2016)',
  //       details: ['Results: 9As'],
  //     },
  //   ],
  // },
];

const Education = () => {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Education</h2>
      <div className="relative border-l border-green-500 mx-auto max-w-4xl">
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
            {edu.points && (
            <ul className="mt-2 list-disc ml-5 text-slate-300 text-sm space-y-1">
                {edu.points.map((point, i) => (
                <li key={i}>{point}</li>
                ))}
            </ul>
            )}

            {edu.exams && (
            <div className="mt-2 ml-5 text-slate-300 text-sm space-y-3">
                {edu.exams.map((exam, i) => (
                <div key={i}>
                    <p className="font-semibold text-green-300">{exam.name}</p>
                    <ul className="list-disc ml-5 space-y-1">
                    {exam.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            )}

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
