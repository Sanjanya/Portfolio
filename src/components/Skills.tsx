//import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
      icon: "{ }",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      icon: "⚛️",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
      icon: "⚙️",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Linux", "VS Code", "Figma"],
      icon: "🛠️",
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
          Technical{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Arsenal
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 flex items-center justify-center text-2xl shadow-lg`}
                >
                  <span className="text-white font-bold">{category.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
