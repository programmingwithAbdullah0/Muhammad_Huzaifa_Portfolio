'use strict';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-bg2 px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        Who I Am
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">About Me</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-[60px]">
        <div className="space-y-5">
          <p className="text-text2 text-base leading-[1.8] font-light">
            I'm <strong className="text-text font-medium">Muhammad Huzaifa</strong> — a highly ambitious <strong className="text-text font-medium">AI Developer and Data Scientist</strong> based in Karachi, Pakistan. I've built my expertise at the intersection of cutting-edge artificial intelligence and creative digital strategy.
          </p>
          <p className="text-text2 text-base leading-[1.8] font-light">
            Certified by <strong className="text-text font-medium">Google</strong> and <strong className="text-text font-medium">Cisco</strong>, I specialize in Python, SQL, and Generative AI to build smart, scalable solutions. My unique edge is combining <strong className="text-text font-medium">deep technical capability</strong> with a strong creative eye — I design brand identities that leave lasting impressions.
          </p>
          <p className="text-text2 text-base leading-[1.8] font-light">
            I have a fast-learning mindset and a strong analytical approach. I build <strong className="text-text font-medium">Agentic AI systems</strong> that automate complex workflows, turning manual bottlenecks into intelligent pipelines. My mission: combine technical innovation with creative strategies to drive <strong className="text-text font-medium">real, measurable business growth</strong>.
          </p>
          <p className="text-text2 text-base leading-[1.8] font-light">
            Beyond tech, I've run my own business managing production accounts, invoicing, FBR filings, and full supply-chain operations — giving me a <strong className="text-text font-medium">practical business lens</strong> that pure developers often lack.
          </p>

          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center gap-3.5 p-[14px_18px] bg-surface border border-border-custom rounded-lg transition-all duration-300 hover:border-border2-custom hover:bg-surface2 hover:translate-x-1">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-[#4285f426] text-[#4285f4]">G</div>
              <div>
                <div className="text-sm font-medium text-text">Google Certified</div>
                <div className="text-xs text-text3 font-dm-mono mt-0.5">Global Certification · Digital Skills</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-[14px_18px] bg-surface border border-border-custom rounded-lg transition-all duration-300 hover:border-border2-custom hover:bg-surface2 hover:translate-x-1">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-[#00a88b26] text-[#00a88b]">C</div>
              <div>
                <div className="text-sm font-medium text-text">Cisco NetAcad Certified</div>
                <div className="text-xs text-text3 font-dm-mono mt-0.5">Global Certification · Networking & IT</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border-custom rounded-xl p-5 lg:p-[20px_24px] transition-all duration-300 hover:border-border2-custom">
              <div className="text-[11px] text-text3 font-dm-mono tracking-[2px] uppercase mb-2.5">Location</div>
              <div className="text-[15px] text-text font-medium">📍 Nazimabad No. 3, Karachi</div>
              <div className="text-[13px] text-text2 mt-1 font-light">Sindh, Pakistan</div>
            </div>
            <div className="bg-surface border border-border-custom rounded-xl p-5 lg:p-[20px_24px] transition-all duration-300 hover:border-border2-custom">
              <div className="text-[11px] text-text3 font-dm-mono tracking-[2px] uppercase mb-2.5">Contact</div>
              <div className="text-[15px] text-text font-medium">📞 +92 313 2492101</div>
              <div className="text-[13px] text-text2 mt-1 font-light">Also: 0321 2077550</div>
            </div>
            <div className="bg-surface border border-border-custom rounded-xl p-5 lg:p-[20px_24px] transition-all duration-300 hover:border-border2-custom">
              <div className="text-[11px] text-text3 font-dm-mono tracking-[2px] uppercase mb-2.5">Email</div>
              <div className="text-[15px] text-text font-medium">✉️ huz23781@gmail.com</div>
              <div className="text-[13px] text-text2 mt-1 font-light">Open for collaborations</div>
            </div>
            <div className="bg-surface border border-border-custom rounded-xl p-5 lg:p-[20px_24px] transition-all duration-300 hover:border-border2-custom">
              <div className="text-[11px] text-text3 font-dm-mono tracking-[2px] uppercase mb-2.5">Specialization</div>
              <div className="text-[15px] text-text font-medium">🤖 Agentic AI + Data Science</div>
              <div className="text-[13px] text-text2 mt-1 font-light">Graphic Design · Digital Marketing</div>
            </div>
          </div>

          <div className="relative mt-10">
            {[
              { date: '2014', title: 'Matriculation — Karachi Board', desc: 'Foundation in Sciences and Mathematics' },
              { date: '2016', title: 'Intermediate — Siraj ud Daulah Govt. College', desc: 'Pre-Engineering / Sciences stream' },
              { date: 'ITC Course', title: 'Accounting — II Chundrigar Road', desc: '6-month professional accounting training, Karachi\'s financial district' },
              { date: 'Ongoing', title: 'Self-Directed Tech Mastery', desc: 'Python, Generative AI, Data Science, UI/UX — continuous learning' }
            ].map((item, idx, arr) => (
              <div key={idx} className="pl-7 relative mb-7">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_var(--glow)]"></div>
                {idx !== arr.length - 1 && <div className="absolute left-[3.5px] top-[18px] w-[1px] h-[calc(100%+12px)] bg-border-custom"></div>}
                <div className="font-dm-mono text-xs text-accent2 mb-1.5">{item.date}</div>
                <div className="font-medium text-[15px] text-text mb-1">{item.title}</div>
                <div className="text-sm text-text2 font-light leading-[1.6]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
