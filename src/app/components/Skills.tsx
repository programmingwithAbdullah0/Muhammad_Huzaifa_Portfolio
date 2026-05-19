'use strict';

import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach((bar: any) => {
            bar.style.width = bar.dataset.width + '%';
          });
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: '🐍',
      iconClass: 'bg-[#38bdf81a] text-accent3',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Backend / API Dev', level: 75 }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: '🤖',
      iconClass: 'bg-[#6c63ff1a] text-accent',
      skills: [
        { name: 'Generative AI', level: 88 },
        { name: 'Agentic AI Systems', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Predictive Analytics', level: 82 }
      ]
    },
    {
      title: 'Business Intelligence',
      icon: '📊',
      iconClass: 'bg-[#f59e0b1a] text-gold',
      skills: [
        { name: 'Data Visualization', level: 85 },
        { name: 'BI Dashboards', level: 80 },
        { name: 'Workflow Automation', level: 87 },
        { name: 'Report Generation', level: 83 }
      ]
    },
    {
      title: 'Graphic & UI/UX Design',
      icon: '🎨',
      iconClass: 'bg-[#f472b61a] text-[#f472b6]',
      skills: [
        { name: 'Graphic Design', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Brand Identity', level: 88 },
        { name: 'Digital Marketing', level: 82 }
      ]
    },
    {
      title: 'IT Systems & Operations',
      icon: '🖥️',
      iconClass: 'bg-[#22c55e1a] text-[#22c55e]',
      skills: [
        { name: 'IT Systems Admin', level: 80 },
        { name: 'IT Workflow Design', level: 82 },
        { name: 'Networking (Cisco)', level: 75 },
        { name: 'Dev Tools & Git', level: 78 }
      ]
    },
    {
      title: 'Business & Operations',
      icon: '💼',
      iconClass: 'bg-[#f973161a] text-[#f97316]',
      skills: [
        { name: 'Business Management', level: 90 },
        { name: 'Accounting & FBR Filing', level: 85 },
        { name: 'Supply Chain Ops', level: 80 },
        { name: 'Client Relations', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="bg-bg px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        Expertise
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">Skills & Technologies</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-surface border border-border-custom rounded-2xl p-7 transition-all duration-400 relative overflow-hidden group hover:border-border2-custom hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent3 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-[22px] mb-4 ${cat.iconClass}`}>
              {cat.icon}
            </div>
            <h3 className="font-syne font-bold text-lg mb-[18px] text-text">{cat.title}</h3>
            <div className="flex flex-col gap-3">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-text2 font-normal">{skill.name}</span>
                    <span className="font-dm-mono text-xs text-accent2">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-sm overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full rounded-sm bg-gradient-to-r from-accent to-accent3 w-0 transition-all duration-[1200ms] cubic-bezier(0.4,0,0.2,1)" 
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
