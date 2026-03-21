"use client";

import React from 'react';
import Image from 'next/image'; // Re-added Image for optimization
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  
  // Animation variants for the main content
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 font-sans">
      
      {/* The Background Image (using next/image for best performance)
        Replace "/hero-background.jpg" with the path to your image file 
        in the /public folder.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg" // Place your image in the public folder and name it hero-background.jpg
          alt="Student looking at a globe and studying"
          fill // Tells the image to fill its parent container
          style={{ objectFit: 'cover' }} // Standard CSS object-fit for background cover
          quality={100} // Keeps the image high-quality
          priority // Loads the image with high priority (since it's a hero image)
          className="grayscale-[20%] opacity-80" // Optional styling: subtle grayscale and lower opacity
        />
      </div>

      {/* A light overlay and backdrop blur for better text readability.
        This makes the dark text pop against any image.
      */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10"></div>

      {/* Main Content Container - Elevated with z-20 to be on top */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 flex flex-col items-center relative z-20"
      >
        
        {/* Top Trust Badge */}
        <motion.div variants={itemVariants} className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-3 mb-8 hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-semibold text-slate-700 tracking-wide">Trusted by 500+ Students Worldwide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-center text-[#0f172a] leading-[1.1] tracking-tight">
          Your Gateway to <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">World-Class</span> <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Education</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-slate-500 text-center max-w-2xl leading-relaxed">
          Expert consultation for students and families navigating the complex landscape of global university admissions.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-5 relative">
          <a href="/book" className="bg-[#2563eb] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 w-full sm:w-auto justify-center">
            Book Free Consultation <ArrowRight size={20} />
          </a>
          <a href="/about" className="bg-white hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md w-full sm:w-auto justify-center flex">
            Learn More
          </a>
        </motion.div>

        {/* Bottom Stats Line */}
        <motion.div variants={itemVariants} className="mt-24 pt-10 border-t border-slate-200 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
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