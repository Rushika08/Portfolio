const Projects = () => {
    const projects = [
      {
        name: 'Insurance Claim Dashboard',
        tags: ['Azure', 'ETL', 'Power BI'],
        description: 'Real-time dashboard for claim metrics using Azure MDP stack.',
        image: '/assets/project1.gif',
        link: '#',
      },
      {
        name: 'ETL Automation Framework',
        tags: ['Python', 'T-SQL', 'Data Factory'],
        description: 'Framework to automate extraction and transformation across systems.',
        image: '/assets/project2.gif',
        link: '#',
      },
    ];
  
    return (
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-cyan-400 font-medium">{proj.name}</h3>
                <p className="text-slate-300 mt-2">{proj.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="bg-slate-700 px-2 py-1 rounded text-cyan-300">{tag}</span>
                  ))}
                </div>
                {proj.link && (
                  <a href={proj.link} className="text-cyan-400 underline mt-3 inline-block">View Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  