'use strict';

import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Sales Dashboard',
      desc: 'An intelligent sales analytics dashboard powered by AI, providing real-time insights, predictive revenue forecasting, and automated KPI monitoring. Built to convert raw sales data into actionable business intelligence.',
      icon: '📊',
      status: 'Complete',
      tech: ['Python', 'Generative AI', 'Data Viz', 'SQL', 'Dashboard'],
      accentClass: 'bg-accent',
      iconClass: 'bg-[#6c63ff1a] text-accent'
    },
    {
      title: 'IT Data Workflow System',
      desc: 'An end-to-end IT data workflow automation project that eliminates manual data handling. Smart pipelines process, validate, and route business data automatically — reducing processing time dramatically.',
      icon: '🔄',
      status: 'Complete',
      tech: ['Python', 'Automation', 'IT Systems', 'Data Pipeline'],
      accentClass: 'bg-accent3',
      iconClass: 'bg-[#38bdf81a] text-accent3'
    },
    {
      title: 'Backend / API Development',
      desc: 'Hands-on backend development practice covering RESTful API design, server-side logic, database integration, and authentication flows. Demonstrates solid understanding of modern web infrastructure.',
      icon: '⚡',
      status: 'Practice Project',
      tech: ['Python', 'REST API', 'Database', 'Backend', 'Auth Systems'],
      accentClass: 'bg-gold',
      iconClass: 'bg-[#f59e0b1a] text-gold'
    },
    {
      title: 'Brand Identity Design',
      desc: 'Creating impactful brand identities for businesses — from logo design and visual systems to full digital marketing collateral. Merging design thinking with business strategy for measurable brand impact.',
      icon: '🎨',
      status: 'Ongoing',
      tech: ['Graphic Design', 'UI/UX', 'Branding', 'Digital Marketing'],
      accentClass: 'bg-accent',
      iconClass: 'bg-[#f472b61a] text-[#f472b6]'
    }
  ];

  return (
    <section id="projects" className="bg-bg2 px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        Portfolio
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">Featured Projects</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[60px]">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-surface border border-border-custom rounded-2xl overflow-hidden transition-all duration-400 relative group hover:border-border2-custom hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[80px] opacity-[0.08] ${project.accentClass}`}></div>
            
            <div className="p-7 pb-0 flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${project.iconClass}`}>
                {project.icon}
              </div>
              <span className="font-dm-mono text-[11px] px-2.5 py-1 rounded-sm bg-green-500/10 text-[#22c55e] border border-green-500/20">
                {project.status}
              </span>
            </div>

            <div className="p-7 pt-0">
              <h3 className="font-syne font-bold text-xl mb-2.5 text-text">{project.title}</h3>
              <p className="text-sm text-text2 leading-[1.7] font-light mb-5">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="font-dm-mono text-[11px] px-2.5 py-1 rounded-sm bg-[#6c63ff14] text-accent2 border border-[#6c63ff26]">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-accent2 no-underline font-medium transition-all duration-300 hover:text-text hover:gap-3">
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
