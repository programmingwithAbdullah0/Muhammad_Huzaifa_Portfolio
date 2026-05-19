'use strict';

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] px-[min(40px,4vw)] py-5 flex items-center justify-between border-b border-[#6c63ff26] transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0fF7] backdrop-blur-[20px]' : 'bg-[#0a0a0fD9] backdrop-blur-[20px]'
        }`}
      >
        <div className="font-syne font-extrabold text-xl bg-gradient-to-br from-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent tracking-tighter">
          MH.
        </div>
        
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[#a0a0c0] no-underline text-sm font-medium tracking-wider transition-colors duration-300 hover:text-[#f0eff8] relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#6c63ff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="mailto:huz23781@gmail.com" 
          className="hidden md:block bg-[#6c63ff] text-white px-6 py-[10px] rounded-md no-underline text-sm font-medium transition-all duration-300 border-none cursor-pointer hover:bg-[#a78bfa] hover:-translate-y-[1px]"
        >
          Hire Me
        </a>

        <button 
          className="md:hidden bg-transparent border border-[#6c63ff26] rounded-md px-3 py-2 text-[#f0eff8] cursor-pointer text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a0a0fF7] backdrop-blur-[20px] z-[200] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
        <button 
          className="absolute top-6 right-6 bg-transparent border-none text-[#a0a0c0] text-2xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="font-syne text-[28px] font-bold text-[#f0eff8] no-underline transition-colors duration-300 hover:text-[#a78bfa]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
