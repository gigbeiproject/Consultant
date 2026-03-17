"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Calendar, Map, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: <ClipboardCheck strokeWidth={1.5} className="w-8 h-8 text-blue-600" />,
      title: 'Fill Simple Form',
      description: 'Complete our 2-minute consultation form with your education goals and background.'
    },
    {
      number: '2',
      icon: <Calendar strokeWidth={1.5} className="w-8 h-8 text-blue-600" />,
      title: 'Schedule Call',
      description: 'Choose a convenient time for your free 15-minute consultation with our experts.'
    },
    {
      number: '3',
      icon: <Map strokeWidth={1.5} className="w-8 h-8 text-blue-600" />,
      title: 'Get Your Roadmap',
      description: 'Receive a personalized university selection and scholarship strategy plan.'
    }
  ];

  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each step animating in
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 } 
    }
  };

  return (
    <section className="py-24 bg-white font-sans w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-slate-500">
            Get expert guidance in three simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-[2px] bg-slate-100 -z-10 overflow-hidden rounded-full">
            <motion.div 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full bg-blue-200 origin-left"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={stepVariants}
                className="flex flex-col items-center relative z-10 group"
              >
                
                {/* Icon & Number Badge */}
                <div className="relative mb-8">
                  {/* Large circular background for the icon */}
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold border-4 border-white shadow-sm">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed px-4 text-sm md:text-base">
                  {step.description}
                </p>
                
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <a href="/book" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
            Start Your Journey <ArrowRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}