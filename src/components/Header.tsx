
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
            &lt;Portfolio/&gt;
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
