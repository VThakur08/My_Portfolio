const Footer = () => {
  return (
    <footer className="c-space py-16 border-t border-white/10 mt-32">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-12">
        <div>
          <h3 className="text-white font-bold mb-4">Vishal Thakur</h3>
          <p className="text-white/60 font-light leading-relaxed">
            Full-stack developer passionate about creating beautiful digital experiences.
          </p>
        </div>
        <div>
          <p className="text-white/80 font-medium mb-4">Quick Links</p>
          <ul className="space-y-2">
            <li><a href="#home" className="text-white/60 hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="text-white/60 hover:text-white transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="text-white/60 hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white/80 font-medium mb-4">Connect</p>
          <div className="flex gap-4">
            <a href="https://github.com/VThakur08" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
            <a href="https://www.linkedin.com/in/vishal-thakur08/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
            </a>
            <a href="https://www.instagram.com/vishalthakur.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex justify-between items-center flex-wrap gap-6">
        <p className="text-white/60 font-light">© 2026 Vishal Thakur. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Terms & Conditions</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
