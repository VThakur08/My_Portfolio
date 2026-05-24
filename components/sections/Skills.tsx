'use client';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-black gradient-text mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Node.js'].map((skill) => (
            <div key={skill} className="glass-hover p-6 rounded-xl">
              <p className="text-lg font-semibold text-cyan-400">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
