import React from 'react';
import profilePic from '../assets/profile.jpg'; // Make sure to add your image in src/assets and name it accordingly

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Profile Picture */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profilePic}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating code elements */}
            <div className="absolute -top-4 -right-4 bg-slate-800 rounded-lg p-3 border border-slate-700 shadow-lg">
              <code className="text-cyan-400 text-sm font-mono">console.log('Hello World!');</code>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-800 rounded-lg p-3 border border-slate-700 shadow-lg">
              <code className="text-purple-400 text-sm font-mono">def solve_problems():</code>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a passionate student of Artificial Intelligence who believes that great code 
                is like poetry—elegant, purposeful, and powerful. My journey started 
                with curiosity about how things work and evolved into a love for 
                creating solutions that make a difference.
              </p>

              <p className="text-slate-300 leading-relaxed text-lg">
                From algorithms to full-stack applications, I enjoy the entire 
                spectrum of software development. I'm particularly drawn to clean 
                architecture, user experience, and the intersection of technology 
                and creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-cyan-400 font-semibold mb-2">Current Focus</h3>
                <p className="text-slate-300 text-sm">Full-Stack Development</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-purple-400 font-semibold mb-2">Education</h3>
                <p className="text-slate-300 text-sm">
                  B.Tech in Computer Science Engineering
                </p>
                <p className="text-slate-300 text-sm">
                  Specialization: AI & ML
                </p>
                <p className="text-slate-400 text-xs">Expected 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
