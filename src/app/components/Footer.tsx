'use strict';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg2 border-t border-border-custom px-[min(80px,5vw)] py-10 flex flex-col md:flex-row items-center justify-between gap-3.5 text-center md:text-left">
      <div className="font-syne font-extrabold text-lg bg-gradient-to-br from-accent2 to-accent3 bg-clip-text text-transparent">
        Muhammad Huzaifa
      </div>
      <div className="text-[13px] text-text3 font-dm-mono">
        © 2025 · AI Developer · Data Scientist · Designer
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {['Home', 'About', 'Skills', 'Contact'].map((link) => (
          <a 
            key={link}
            href={`#${link.toLowerCase()}`} 
            className="text-text3 no-underline text-[13px] transition-colors duration-300 hover:text-accent2"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
