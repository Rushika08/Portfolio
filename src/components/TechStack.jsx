const TechStack = () => {
    const skills = [
      { title: 'Data Ingestion', tools: ['Python', 'T-SQL', 'Kafka'] },
      { title: 'Storage', tools: ['Azure Data Lake', 'Blob Storage'] },
      { title: 'Processing', tools: ['Azure Data Factory', 'Databricks'] },
      { title: 'Visualization', tools: ['Power BI', 'Tableau'] },
      { title: 'DevOps', tools: ['Docker', 'Git', 'CI/CD'] },
    ];
  
    return (
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Technical Stack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="p-4 border border-slate-700 rounded-lg">
              <h3 className="text-xl text-cyan-400 font-medium mb-2">{s.title}</h3>
              <ul className="list-disc pl-6 text-slate-300">
                {s.tools.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechStack;
  