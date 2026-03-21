"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Globe2, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  LineChart 
} from 'lucide-react';

const pillars = [
  {
    title: "Global Mapping",
    desc: "Identifying the right universities across 30+ countries based on ROI and culture.",
    icon: <Globe2 className="text-blue-500" size={32} />,
  },
  {
    title: "Profile Sculpting",
    desc: "Beyond grades—we help you build research papers, NGOs, and internships.",
    icon: <Zap className="text-amber-500" size={32} />,
  },
  {
    title: "Financial Strategy",
    desc: "Maximizing scholarship potential and securing low-interest educational loans.",
    icon: <LineChart className="text-emerald-500" size={32} />,
  },
  {
    title: "Mental Mentorship",
    desc: "Stress management and confidence building for high-pressure interviews.",
    icon: <ShieldCheck className="text-rose-500" size={32} />,
  },
];

export default function EduMentor360() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual "360" Element */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[1px] border-dashed border-slate-200 rounded-full flex items-center justify-center"
            >
              <div className="w-[80%] h-[80%] border-[1px] border-dashed border-slate-300 rounded-full flex items-center justify-center">
                <div className="w-[70%] h-[70%] bg-blue-50/50 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Central Badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="bg-[#0f172a] text-white p-8 md:p-12 rounded-full shadow-2xl text-center z-10 border-8 border-white"
              >
                <Compass size={40} className="mx-auto mb-2 text-blue-400" />
                <h3 className="text-2xl md:text-3xl font-black italic">360°</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Vision</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              The Vision Behind
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Edu Mentor<span className="text-blue-600">360</span>
            </h3>
          <p className="text-slate-600 text-lg mb-12 leading-relaxed">
  {"We believe education isn't a destination; it's a 360-degree journey. Our vision is to eliminate the gap between a student's current potential and their ultimate global career goal through holistic support."}
</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(item.icon, { size: 24, className: "group-hover:text-white transition-colors" })}
                  </div>
                  <h4 className="font-bold text-slate-800 text-xl">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-blue-600 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready for your 360° transformation?</h4>
<p className="text-blue-100 mb-8 relative z-10 max-w-2xl mx-auto">
  {"Join the ranks of students who didn't just go abroad, but thrived with a solid 360-degree foundation."}
</p>            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:-translate-y-1 transition-all relative z-10">
                Explore the Roadmap
            </button>
        </div>

      </div>
    </section>
  );
}