'use client';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-black gradient-text mb-12">Work Experience</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-hover p-8 rounded-xl">
              <p className="text-cyan-400 font-semibold">Experience {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
