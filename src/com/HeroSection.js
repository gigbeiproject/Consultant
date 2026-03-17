"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, BarChart3, Users } from 'lucide-react';

export default function HeroSection() {
  
  // Animation variants for the main content (staggered entrance)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easing for a "springy" premium feel
    },
  };

  // Animation variants for the floating glass cards
  const floatingAnimation = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    },
    hover: {
      y: [0, -10, 0], // Continuous floating effect
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  });

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#f0f8f7] to-[#e6f2f0] flex items-center justify-center overflow-hidden py-20 font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Card 1: Scholarship Guidance (Left) */}
      <motion.div 
        variants={floatingAnimation(0.8)}
        initial="hidden"
        animate={["visible", "hover"]}
        className="hidden lg:flex absolute left-10 xl:left-24 top-24 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-blue-900/5 w-64 flex-col gap-3 z-10 border border-white/50"
      >
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
          <GraduationCap size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-slate-900 text-lg">Scholarship<br />Guidance</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Access $2M+ in scholarship opportunities tailored to your profile
        </p>
      </motion.div>

      {/* Floating Card 2: 95% Success Rate (Right) */}
      <motion.div 
        variants={floatingAnimation(1.0)}
        initial="hidden"
        animate={["visible", "hover"]}
        className="hidden lg:flex absolute right-10 xl:right-24 top-48 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-blue-900/5 w-64 flex-col gap-3 z-10 border border-white/50"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
          <BarChart3 size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-slate-900 text-lg">95% Success Rate</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          500+ students placed in top 50 global universities
        </p>
      </motion.div>

      {/* Floating Card 3: Expert Consultants (Moved to Section Level to prevent overlapping) */}
      <motion.div 
        variants={floatingAnimation(1.2)}
        initial="hidden"
        animate={["visible", "hover"]}
        className="hidden lg:flex absolute right-10 xl:right-24 bottom-24 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-blue-900/5 w-64 flex-col gap-3 z-10 border border-white/50"
      >
        <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shadow-inner">
          <Users size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-slate-900 text-lg">Expert Consultants</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Former admissions officers from Harvard, MIT, Oxford
        </p>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 flex flex-col items-center relative z-20"
      >
        
        {/* Top Trust Badge */}
        <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-100/50 flex items-center gap-3 mb-8 hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-semibold text-slate-700 tracking-wide">Trusted by 500+ Students Worldwide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-center text-[#0f172a] leading-[1.1] tracking-tight">
          Your Gateway to <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#0284c7]">World-Class</span> <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-emerald-400">Education</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-slate-500 text-center max-w-2xl leading-relaxed">
          Expert consultation for students and families navigating the complex landscape of global university admissions.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-5 relative">
          <a href="/book" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 w-full sm:w-auto justify-center">
            Book Free Consultation <ArrowRight size={20} />
          </a>
          <a href="/about" className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md w-full sm:w-auto justify-center flex">
            Learn More
          </a>
        </motion.div>

        {/* Bottom Stats Line */}
        <motion.div variants={itemVariants} className="mt-24 pt-10 border-t border-slate-200/80 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <div className="px-8 py-2 sm:py-0 text-center flex-1">
            <div className="text-4xl font-extrabold text-[#0f172a] mb-1">500+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Students Placed</div>
          </div>
          <div className="px-8 py-2 sm:py-0 text-center flex-1">
            <div className="text-4xl font-extrabold text-[#0f172a] mb-1">95%</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Success Rate</div>
          </div>
          <div className="px-8 py-2 sm:py-0 text-center flex-1">
            <div className="text-4xl font-extrabold text-[#0f172a] mb-1">$2M+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Scholarships Secured</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}