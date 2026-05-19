'use strict';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    { label: 'Phone', value: '+92 313 2492101', icon: '📞', href: 'tel:+923132492101', iconClass: 'bg-[#38bdf81a] text-accent3' },
    { label: 'Alternative', value: '0321 2077550', icon: '📱', href: 'tel:+923212077550', iconClass: 'bg-[#6c63ff1a] text-accent' },
    { label: 'Email', value: 'huz23781@gmail.com', icon: '✉️', href: 'mailto:huz23781@gmail.com', iconClass: 'bg-[#f59e0b1a] text-gold' },
    { label: 'Location', value: 'Nazimabad No. 3, Gole Market, Karachi', icon: '📍', iconClass: 'bg-[#22c55e1a] text-[#22c55e]' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-bg px-[min(80px,5vw)] py-[100px] relative">
      <div className="flex items-center gap-3 font-dm-mono text-xs text-accent tracking-[3px] uppercase mb-4 before:content-[''] before:w-[30px] before:h-[1px] before:bg-accent">
        Get In Touch
      </div>
      <h2 className="font-syne font-bold text-[clamp(32px,4vw,52px)] tracking-[-1.5px] leading-[1.05] mb-6">Let's Work Together</h2>
      <div className="w-[60px] h-0.5 bg-gradient-to-r from-accent to-accent3 mb-[60px] rounded-[1px]"></div>
      <p className="text-text2 text-[17px] max-w-[min(600px,100%)] leading-[1.7] font-light">Whether you need an AI system built, data analyzed, a brand designed, or a complete digital strategy — I'm ready. Let's create something outstanding.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-[60px]">
        <div className="flex flex-col gap-5">
          {contactInfo.map((info, idx) => (
            <a 
              key={idx} 
              href={info.href} 
              className={`bg-surface border border-border-custom rounded-xl p-[20px_24px] flex items-center gap-[18px] transition-all duration-300 no-underline text-inherit group hover:border-border2-custom hover:translate-x-1 hover:bg-surface2 ${!info.href ? 'cursor-default' : ''}`}
              onClick={!info.href ? (e) => e.preventDefault() : undefined}
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${info.iconClass}`}>
                {info.icon}
              </div>
              <div>
                <div className="text-xs text-text3 font-dm-mono mb-1">{info.label}</div>
                <div className="text-[15px] text-text font-medium">{info.value}</div>
              </div>
            </a>
          ))}

          <div className="bg-surface border border-border-custom rounded-xl p-6 mt-2">
            <div className="text-xs text-text3 font-dm-mono mb-3.5 uppercase tracking-[1px]">Available For</div>
            <div className="flex flex-col gap-2.5">
              {['Freelance Projects', 'Full-time / Part-time Roles', 'AI & Tech Consultations', 'Long-term Collaborations', 'Remote & On-site Work'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-text2 font-light">
                  <span className="text-[#22c55e] text-lg leading-none">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border-custom rounded-2xl p-9">
          <h3 className="font-syne font-bold text-[22px] mb-7 text-text">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-text2 font-dm-mono tracking-[1px]">YOUR NAME</label>
                <input 
                  type="text" 
                  placeholder="John Smith"
                  className="bg-bg border border-border-custom rounded-lg p-[12px_16px] text-text font-dm-sans text-[15px] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-text2 font-dm-mono tracking-[1px]">YOUR EMAIL</label>
                <input 
                  type="email" 
                  placeholder="john@email.com"
                  className="bg-bg border border-border-custom rounded-lg p-[12px_16px] text-text font-dm-sans text-[15px] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-[13px] text-text2 font-dm-mono tracking-[1px]">SERVICE NEEDED</label>
              <select 
                className="bg-bg border border-border-custom rounded-lg p-[12px_16px] text-text font-dm-sans text-[15px] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service...</option>
                <option>Agentic AI Development</option>
                <option>Data Science & Analytics</option>
                <option>Graphic & UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>IT Systems & Operations</option>
                <option>Python & Backend Development</option>
                <option>Other / Multiple Services</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-[13px] text-text2 font-dm-mono tracking-[1px]">YOUR MESSAGE</label>
              <textarea 
                placeholder="Tell me about your project, timeline, and goals..."
                className="bg-bg border border-border-custom rounded-lg p-[12px_16px] text-text font-dm-sans text-[15px] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] resize-y min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full p-3.5 rounded-lg text-white text-[15px] font-semibold transition-all duration-300 font-syne tracking-[0.5px] cursor-pointer hover:opacity-90 hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(108,99,255,0.3)] ${
                isSuccess ? 'bg-[#22c55e]' : 'bg-gradient-to-br from-accent to-accent2'
              }`}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent ✓' : 'Send Message ↗'}
            </button>
            {isSuccess && (
              <div className="p-3.5 bg-green-500/10 border border-green-500/20 rounded-lg text-[#22c55e] text-sm text-center mt-3">
                ✅ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
