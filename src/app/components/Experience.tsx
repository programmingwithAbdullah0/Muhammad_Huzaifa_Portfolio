'use strict';

import React from 'react';

const Experience: React.FC = () => {
  const workExp = [
    {
      period: 'EXTENSIVE EXPERIENCE · ONGOING',
      title: 'Business Owner & Operations Manager',
      company: 'Own Business · Karachi',
      desc: 'Managed full business operations in the plastics raw materials sector. Responsibilities included production account management, supply chain coordination, product sales & procurement, payment processing, FBR tax filing, invoice management, and maintaining complete financial records. This role gave deep insight into real business systems and financial operations.'
    },
    {
      period: '6 MONTHS · PROFESSIONAL TRAINING',
      title: 'Accounting Professional',
      company: 'ITC Building · II Chundrigar Road, Karachi',
      desc: 'Professional accounting practice at one of Karachi\'s most prestigious business addresses. Trained in bookkeeping, ledger management, financial statements, and accounting software — building a strong foundation in business finance.'
    }
  ];

  const education = [
    {
      year: '2014',
      degree: 'Matriculation',
      school: 'Karachi Board of Secondary Education'
    },
    {
      year: '2016',
      degree: 'Intermediate (FSc/Pre-Engineering)',
      school: 'Siraj ud Daulah Government College, Karachi'
    },
    {
      year: 'ITC CERTIFICATION',
      degree: 'Diploma in Accounting',
      school: 'ITC Building, II Chundrigar Road · 6 Months'
    },
    {
      year: 'GLOBAL CERTIFICATIONS',
      degree: 'Google Certified + Cisco NetAcad',
      school: 'Internationally Recognized · Industry Standard',
      highlight: true
    }
  ];

  return (
    <section id="experience" className="bg-bg px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        Journey
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">Experience & Education</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-[60px]">
        <div>
          <div className="font-syne font-bold text-[22px] mb-8 text-text flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span> Work Experience
          </div>

          <div className="space-y-4">
            {workExp.map((exp, idx) => (
              <div key={idx} className="bg-surface border border-border-custom rounded-xl p-6 transition-all duration-300 relative overflow-hidden group hover:border-border2-custom hover:translate-x-1">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent to-accent3 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>
                <div className="font-dm-mono text-[11px] text-accent2 mb-2 tracking-[1px]">{exp.period}</div>
                <div className="font-syne font-semibold text-base text-text mb-1">{exp.title}</div>
                <div className="text-[13px] text-text3 mb-3 font-dm-mono">{exp.company}</div>
                <p className="text-[13px] text-text2 leading-[1.7] font-light">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-syne font-bold text-[22px] mb-8 text-text flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span> Education
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className={`bg-surface border border-border-custom rounded-xl p-6 transition-all duration-300 hover:border-border2-custom ${
                  edu.highlight ? 'border-[#6c63ff4d] bg-[#6c63ff0d]' : ''
                }`}
              >
                <div className="font-dm-mono text-[11px] text-gold mb-2">{edu.year}</div>
                <div className="font-syne font-semibold text-base text-text mb-1">{edu.degree}</div>
                <div className="text-[13px] text-text3 font-dm-mono">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
