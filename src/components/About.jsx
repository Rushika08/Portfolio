const About = () => {
    return (
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-300">
          I’m a passionate Data Engineer experienced in building efficient data pipelines, automating ETL processes, and working with Azure MDP. I love solving complex data problems using Python, SQL, and cloud technologies.
        </p>
        {/* <a
          href="/Rushika Jayasinghe Resume.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Download Resume
        </a> */}
        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
        >
        View Resume
        </a>
      </section>
    );
  };
  
  export default About;
  