"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  CircleDollarSign, 
  Landmark, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Lock, 
  ArrowRight 
} from 'lucide-react';

export default function StatsAndFeatures() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      value: "500+",
      title: "Students Placed",
      description: "Successfully guided to top universities worldwide"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      value: "95%",
      title: "Success Rate",
      description: "Students accepted to their target universities"
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      value: "$2M+",
      title: "Scholarships Secured",
      description: "Total funding secured for our students"
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      value: "50+",
      title: "Partner Universities",
      description: "Top-ranked institutions globally"
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#10b981]" strokeWidth={2} />,
      title: "Former Admissions Officers",
      description: "Our consultants worked at Harvard, MIT, and Oxford admissions"
    },
    {
      icon: <Clock className="w-7 h-7 text-[#10b981]" strokeWidth={2} />,
      title: "15-Minute Consultation",
      description: "Quick, focused sessions that respect your time"
    },
    {
      icon: <Globe className="w-7 h-7 text-[#10b981]" strokeWidth={2} />,
      title: "Global Reach",
      description: "Students from 40+ countries trust our guidance"
    },
    {
      icon: <Lock className="w-7 h-7 text-[#10b981]" strokeWidth={2} />,
      title: "100% Confidential",
      description: "Your information is secure and never shared"
    }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative py-24 bg-[#f4f7fb] font-sans px-4 sm:px-6 lg:px-8 flex flex-col items-center overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

      {/* 1. Top Stats Row */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 relative z-10"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
              {stat.icon}
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
              {stat.value}
            </h3>
            <h4 className="text-sm font-bold text-slate-800 mb-2">
              {stat.title}
            </h4>
            <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 2. "Why Choose Us" Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 p-10 md:p-14 mb-16 relative z-10 border border-slate-100"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0f172a] mb-12 tracking-tight">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Upgraded Icon Container */}
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300 shadow-sm border border-emerald-100/50">
                {/* We clone the icon to force it to inherit the text color on hover */}
                {React.cloneElement(feature.icon, { 
                  className: "w-7 h-7 text-[#10b981] group-hover:text-white transition-colors duration-300" 
                })}
              </div>
              <h4 className="text-sm md:text-base font-bold text-slate-800 mb-3 px-2">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Bottom Call to Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <a href="/book" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 w-full sm:w-auto">
          Book Your Free Consultation <ArrowRight size={20} />
        </a>
        <p className="text-sm text-slate-500 mt-5 font-medium flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-500" />
          No credit card required • Free 15-minute consultation
        </p>
      </motion.div>

    </section>
  );
}