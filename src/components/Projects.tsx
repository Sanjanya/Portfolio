//import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Task Manager",
      description: "Intelligent task management system with natural language processing and smart prioritization algorithms.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      status: "Featured",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Code Visualizer",
      description: "Interactive platform for visualizing algorithms and data structures with real-time step-by-step execution.",
      technologies: ["TypeScript", "D3.js", "WebGL", "Node.js"],
      status: "Open Source",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Blockchain Analytics",
      description: "Real-time cryptocurrency analysis dashboard with predictive modeling and portfolio optimization.",
      technologies: ["Python", "React", "Web3", "Machine Learning"],
      status: "In Progress",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          A showcase of my passion projects where I explore new technologies and solve real-world problems
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-mono text-sm opacity-80">
                      <div>&lt;project&gt;</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold flex items-center gap-2">
                      <span>View Code</span>
                      <span>→</span>
                    </button>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold flex items-center gap-2">
                      <span>Live Demo</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
