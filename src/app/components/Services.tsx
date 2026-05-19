'use strict';

import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      icon: '🤖',
      title: 'Agentic AI Development',
      desc: 'Building intelligent autonomous AI agents that automate complex workflows, make decisions, and execute multi-step tasks without human intervention.',
      list: ['AI Workflow Automation', 'LLM Integration', 'Smart Pipeline Design', 'Agentic System Architecture']
    },
    {
      num: '02',
      icon: '📊',
      title: 'Data Science & Analytics',
      desc: 'Transforming raw data into meaningful insights. Predictive models, BI dashboards, and data visualization systems that drive real decisions.',
      list: ['Predictive Analytics', 'BI Dashboards', 'Data Visualization', 'ML Model Development']
    },
    {
      num: '03',
      icon: '🎨',
      title: 'Graphic & UI/UX Design',
      desc: 'Designing brand identities and digital experiences that connect. From logo systems to complete UI/UX — visuals that make brands unforgettable.',
      list: ['Logo & Brand Identity', 'UI/UX Design', 'Social Media Design', 'Marketing Collateral']
    },
    {
      num: '04',
      icon: '📈',
      title: 'Digital Marketing',
      desc: 'Strategic digital marketing that grows audiences and converts them. Data-driven campaigns backed by analytics and creative content.',
      list: ['Social Media Strategy', 'Content Marketing', 'SEO & Analytics', 'Campaign Management']
    },
    {
      num: '05',
      icon: '🖥️',
      title: 'IT Systems & Operations',
      desc: 'Setting up and optimizing IT infrastructure. From network configuration (Cisco certified) to workflow digitization and operational efficiency.',
      list: ['IT Infrastructure Setup', 'Network Configuration', 'Workflow Digitization', 'System Optimization']
    },
    {
      num: '06',
      icon: '⚡',
      title: 'Python & Backend Development',
      desc: 'Clean, efficient Python code for data processing, API development, and backend systems. Scripts that scale and solutions that stick.',
      list: ['Python Scripting', 'API Development', 'Database Design (SQL)', 'Backend Architecture']
    }
  ];

  return (
    <section id="services" className="bg-bg2 px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        What I Offer
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">Services</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[60px]">
        {services.map((service, idx) => (
          <div key={idx} className="bg-surface border border-border-custom rounded-2xl p-7 transition-all duration-400 cursor-default relative overflow-hidden group hover:border-border2-custom hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="font-syne text-5xl font-extrabold text-[#6c63ff14] absolute top-4 right-5 leading-none select-none">
              {service.num}
            </div>
            <div className="text-[32px] mb-[18px]">{service.icon}</div>
            <h3 className="font-syne font-bold text-lg mb-2.5 text-text">{service.title}</h3>
            <p className="text-sm text-text2 leading-[1.7] font-light mb-4">{service.desc}</p>
            <ul className="list-none mt-4 flex flex-col gap-2">
              {service.list.map((item, iIdx) => (
                <li key={iIdx} className="text-[13px] text-text3 flex items-center gap-2 font-dm-mono before:content-['→'] before:text-accent before:text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
