import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Logo & Description */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono mb-4">
            &lt;Portfolio/&gt;
          </h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Crafted with passion using React, TypeScript, and Tailwind CSS
          </p>
        </div>

        {/* Footer bottom text */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Computer Science Portfolio. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
