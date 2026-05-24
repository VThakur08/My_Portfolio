'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-2xl font-bold gradient-text mb-2">V.T</p>
            <p className="text-gray-400">Full Stack Developer & Designer</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">Quick Links</p>
            <div className="space-y-1 text-sm text-gray-400">
              <p><a href="#home" className="hover:text-cyan-400 smooth-transition">Home</a></p>
              <p><a href="#about" className="hover:text-cyan-400 smooth-transition">About</a></p>
              <p><a href="#projects" className="hover:text-cyan-400 smooth-transition">Projects</a></p>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="glass p-3 rounded-lg hover:glow-cyan smooth-transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="glass p-3 rounded-lg hover:glow-cyan smooth-transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="glass p-3 rounded-lg hover:glow-cyan smooth-transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Vishal Thakur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
