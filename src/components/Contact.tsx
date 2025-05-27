import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Let's{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Always excited to discuss new ideas, collaborate on projects, or chat about the latest in tech.
          Drop me a line and let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">@</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">Email</h3>
              <p className="text-slate-600 font-mono text-sm">hello@portfolio.dev</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">in</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">LinkedIn</h3>
              <p className="text-slate-600 font-mono text-sm">/in/yourprofile</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{"{"}{"}"}</span> {/* GitHub placeholder */}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">GitHub</h3>
              <p className="text-slate-600 font-mono text-sm">/yourusername</p>
            </div>
          </div>
        </div>

        <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 font-semibold text-lg">
          Start a Conversation →
        </button>
      </div>
    </section>
  );
};

export default Contact;
