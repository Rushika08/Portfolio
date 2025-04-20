const Achievements = () => {
    const awards = [
      {
        title: 'Finalist of RealHack 5.0 Inter University Hackathon',
        year: '2024',
        description: 'Got selected to the top 15 teams out of 300+ teams. Organized by University of Kelaniya.',
        link: 'https://www.linkedin.com/posts/software-engineering-students-association-university-of-kelaniya_realhack-hackathon-sesa-activity-7166452224875868160-44Zs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-gE40BHQaUhFn13WDP9wY-u_gNOmtCm7g',
      },
      {
        title: 'Finalist of RealHack 4.0 Inter University Hackathon',
        year: '2023',
        description: 'Got selected to the top 15 teams out of 270 teams. Organized by University of Kelaniya.',
        link: 'https://www.linkedin.com/posts/software-engineering-students-association-university-of-kelaniya_realhack-hackathon-sesa-activity-7038157062043824128-o5a6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-gE40BHQaUhFn13WDP9wY-u_gNOmtCm7g',
      },
    ];
  
    return (
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Awards & Achievements</h2>
        <div className="space-y-6">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg shadow-md">
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-cyan-400 font-bold hover:underline"
              >
                {award.title}
              </a>
              <span className="block text-sm text-slate-400">{award.year}</span>
              <p className="text-slate-300 mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Achievements;
  