'use strict';

import React from 'react';

const Hero: React.FC = () => {
  const tags = [
    'Python', 'Generative AI', 'SQL', 'Machine Learning', 
    'UI/UX Design', 'Digital Marketing', 'Data Science', 'Automation'
  ];

  const marqueeItems = [
    'Agentic AI Development', 'Data Science', 'Machine Learning', 
    'Graphic Design', 'Digital Marketing', 'Python Programming', 
    'Business Intelligence', 'UI/UX Design', 'IT Operations', 
    'Predictive Analytics', 'Google Certified', 'Cisco NetAcad'
  ];

  return (
    <>
      <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[min(80px,5vw)] pt-[120px] pb-[60px] gap-[min(80px,4vw)] relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute rounded-full filter blur-[120px] opacity-15 w-[600px] h-[600px] bg-accent -top-[200px] -right-[100px] animate-float"></div>
          <div className="absolute rounded-full filter blur-[120px] opacity-15 w-[400px] h-[400px] bg-accent3 -bottom-[100px] -left-[50px] animate-float-reverse"></div>
          <div className="absolute rounded-full filter blur-[120px] opacity-15 w-[300px] h-[300px] bg-gold top-[40%] left-[30%] animate-float-slow"></div>
        </div>

        <div className="relative z-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#6c63ff1a] border border-border2-custom rounded-[50px] px-[18px] py-2 mb-8 text-[13px] text-accent2 font-dm-mono">
            <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full animate-pulse-custom"></span>
            Available for Opportunities
          </div>
          
          <h1 className="font-syne font-extrabold text-[clamp(42px,5vw,70px)] leading-none tracking-[-2px] mb-4">
            <span className="bg-gradient-to-br from-white via-accent2 to-accent3 bg-clip-text text-transparent">Muhammad</span><br />
            <span className="opacity-60 text-[0.75em]">Huzaifa</span>
          </h1>

          {/* Mobile Photo Block */}
          <div className="lg:hidden flex justify-center my-6 lg:my-7">
            <div className="relative w-[min(260px,72vw)] h-[min(320px,90vw)]">
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-accent to-accent3 opacity-20 top-3 left-3 z-1"></div>
              <img src="/image.png" alt="Muhammad Huzaifa" className="w-full h-full object-cover object-top rounded-[18px] relative z-2 block" />
              <div className="absolute bg-surface border border-border2-custom rounded-xl p-2.5 lg:p-[12px_18px] z-4 backdrop-blur-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] top-[-16px] right-[-10px] animate-float-stat">
                <div className="font-syne text-base lg:text-lg font-extrabold text-accent2 leading-none">Google</div>
                <div className="text-[10px] lg:text-[11px] text-text3 mt-1 font-dm-mono">Certified ✓</div>
              </div>
              <div className="absolute bg-surface border border-border2-custom rounded-xl p-2.5 lg:p-[12px_18px] z-4 backdrop-blur-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] bottom-10 left-[-20px] animate-float-stat-delayed">
                <div className="font-syne text-base lg:text-lg font-extrabold text-accent2 leading-none">Cisco</div>
                <div className="text-[10px] lg:text-[11px] text-text3 mt-1 font-dm-mono">NetAcad Certified ✓</div>
              </div>
            </div>
          </div>

          <p className="text-lg lg:text-[17px] text-text2 mb-7 font-light leading-[1.5] max-w-[min(480px,100%)] mx-auto lg:mx-0">
            <strong className="text-accent2 font-medium">Agentic AI Developer</strong> · Data Scientist · Graphic Designer · Digital Marketer<br />
            Google & Cisco Certified — Building intelligent systems that drive real business growth.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
            {tags.map(tag => (
              <span key={tag} className="px-3.5 py-1.5 border border-border2-custom rounded-[4px] text-xs text-text2 font-dm-mono transition-all duration-300 hover:border-accent hover:text-accent2 hover:bg-[#6c63ff0d]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="bg-accent text-white px-8 py-3.5 rounded-lg no-underline font-medium text-[15px] transition-all duration-300 inline-flex items-center gap-2.5 hover:bg-accent2 hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(108,99,255,0.3)]">
              View My Work →
            </a>
            <a href="#contact" className="border border-border2-custom text-text2 px-8 py-3.5 rounded-lg no-underline font-medium text-[15px] transition-all duration-300 inline-flex items-center gap-2.5 hover:border-accent hover:text-text hover:-translate-y-[2px]">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hidden lg:flex relative z-2 justify-center items-center">
          <div className="relative w-[min(320px,80vw)] h-[min(400px,100vw)]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent to-accent3 opacity-20 top-3 left-3 z-1"></div>
            <img src="/image.png" alt="Muhammad Huzaifa" className="w-full h-full object-cover object-top rounded-3xl relative z-2 block" />
            <div className="absolute bg-surface border border-border2-custom rounded-xl p-[12px_18px] z-4 backdrop-blur-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] top-[-16px] right-[-10px] animate-float-stat">
              <div className="font-syne text-lg font-extrabold text-accent2 leading-none">Google</div>
              <div className="text-[11px] text-text3 mt-1 font-dm-mono">Certified ✓</div>
            </div>
            <div className="absolute bg-surface border border-border2-custom rounded-xl p-[12px_18px] z-4 backdrop-blur-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] bottom-10 left-[-20px] animate-float-stat-delayed">
              <div className="font-syne text-lg font-extrabold text-accent2 leading-none">Cisco</div>
              <div className="text-[11px] text-text3 mt-1 font-dm-mono">NetAcad Certified ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-10 overflow-hidden border-t border-b border-border-custom bg-bg3">
        <div className="flex gap-[60px] animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="font-dm-mono text-[13px] text-text3 flex items-center gap-4">
              <span className="text-accent text-[10px]">◆</span> {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
