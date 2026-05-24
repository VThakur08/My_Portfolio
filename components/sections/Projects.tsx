'use client';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-black gradient-text mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="glass-hover p-8 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-gray-400">Project {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
