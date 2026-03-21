"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Landmark, 
  Map, 
  School,
  FileCheck2 
} from 'lucide-react';

const policyLevels = [
  {
    level: "International",
    title: "Global Standards",
    desc: "Alignment with UNESCO's SDG4 and international credit transfer systems (ECTS/GPA) for seamless global mobility.",
    icon: <Globe className="text-blue-500" size={32} />,
    tag: "Global"
  },
  {
    level: "National",
    title: "NEP 2020 & Frameworks",
    desc: "Full compliance with the National Education Policy, focusing on multidisciplinary learning and 21st-century skills.",
    icon: <Landmark className="text-indigo-600" size={32} />,
    tag: "National"
  },
  {
    level: "Regional/State",
    title: "State Boards & Zoning",
    desc: "Navigating regional reservation policies, state-specific entrance exams, and local curriculum variations.",
    icon: <Map className="text-emerald-500" size={32} />,
    tag: "Regional"
  },
  {
    level: "Institutional",
    title: "University Statutes",
    desc: "Understanding specific university autonomy, grading rubrics, and internal scholarship eligibility criteria.",
    icon: <School className="text-amber-500" size={32} />,
    tag: "Local"
  }
];

export default function EducationPolicy() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            <FileCheck2 size={18} />
            <span>Policy Compliance</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Multi-Level Policy <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We navigate the complex layers of education policy so you don&apos;t have to. 
            From international treaties to local university statutes, we ensure your 
            academic path is legally sound and globally recognized.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policyLevels.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative Background Circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-[3] transition-transform duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors">
                  {item.icon}
                </div>
                
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Level: {item.level}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-[#0f172a] rounded-3xl text-center md:flex items-center justify-between"
        >
          <p className="text-white font-medium text-lg mb-4 md:mb-0">
            Confused about how <span className="text-blue-400 font-bold">NEP 2020</span> affects your foreign application?
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20">
            Talk to a Policy Expert
          </button>
        </motion.div>

      </div>
    </section>
  );
}