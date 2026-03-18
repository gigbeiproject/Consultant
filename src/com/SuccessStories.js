"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';

// Updated data array with Indian names and your specific college list
const stories = [
  {
    name: "Aarav Sharma",
    major: "Computer Science Engineering",
    university: "RV College of Engineering",
    quote: "The consultation helped me secure my seat in the CS program. The team guided me through every step of the counseling process.",
    achievement: "Admitted to Top Merit Seat"
  },
  {
    name: "Priya Patel",
    major: "Information Science",
    university: "BMS College of Engineering",
    quote: "I got into my dream college! The personalized roadmap made the complex admissions process so much clearer and manageable.",
    achievement: "Secured Management Quota"
  },
  {
    name: "Rohan Desai",
    major: "Mechanical Engineering",
    university: "MS Ramaiah Institute of Technology",
    quote: "The admission guidance was invaluable. They helped me find opportunities I never knew existed and clear the interviews effortlessly.",
    achievement: "Direct Admission Success"
  },
  {
    name: "Sneha Reddy",
    major: "Electronics & Communication",
    university: "BITS Pilani",
    quote: "Their expert consultants have great insider knowledge. Their advice was game-changing for my BITSAT strategy and preference filling.",
    achievement: "Accepted to BITS"
  },
  {
    name: "Karan Singh",
    major: "Computer Applications (BCA)",
    university: "Christ University",
    quote: "As a student confused about applications, I had no idea where to start. This service made my dream of studying in Bangalore a reality.",
    achievement: "Cleared Entrance & Interview"
  },
  {
    name: "Anjali Gupta",
    major: "Business Administration (BBA)",
    university: "Symbiosis University",
    quote: "The success rate is real. Every piece of advice was spot-on and helped me stand out in the SET exam and personal interview.",
    achievement: "Symbiosis Merit List"
  },
  {
    name: "Vikram Malhotra",
    major: "Data Science Engineering",
    university: "Vellore Institute of Technology (VIT)",
    quote: "Securing a good category seat in VIT seemed tough, but their expert counseling made the entire process smooth and transparent.",
    achievement: "Category 1 Seat Secured"
  },
  {
    name: "Neha Verma",
    major: "Computer Science Engineering",
    university: "Manipal University",
    quote: "From MET preparation tips to final counseling rounds, the continuous support I received was absolutely phenomenal.",
    achievement: "Admitted to Main Campus"
  }
];

// Helper component to render an individual card
const TestimonialCard = ({ story }) => (
  <div className="w-[320px] md:w-[400px] flex-shrink-0 bg-white rounded-[24px] p-8 shadow-xl shadow-slate-200/40 flex flex-col h-full border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
    
    {/* Decorative Quote Icon */}
    <div className="absolute top-6 right-6 text-blue-50 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
      <Quote size={48} fill="currentColor" />
    </div>

    {/* User Profile Header (Image removed, layout adjusted) */}
    <div className="mb-6 relative z-10 pr-12">
      <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-1">
        {story.name}
      </h3>
      <p className="text-sm md:text-base font-bold text-[#2563eb] mb-1">
        {story.university}
      </p>
      <p className="text-xs md:text-sm text-slate-500 font-medium">
        {story.major}
      </p>
    </div>

    {/* 5-Star Rating */}
    <div className="flex gap-1 mb-4 relative z-10">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className="fill-[#facc15] text-[#facc15]" 
        />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow relative z-10 italic">
      &quot;{story.quote}&quot;
    </blockquote>

    {/* Achievement Footer */}
    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 text-[#10b981] relative z-10">
      <CheckCircle2 size={18} strokeWidth={2.5} />
      <span className="text-xs font-bold tracking-wide uppercase">
        {story.achievement}
      </span>
    </div>
  </div>
);

// Helper component for the scrolling row
const ScrollingRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex gap-6 md:gap-8 flex-shrink-0 items-stretch"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render items multiple times for the infinite loop effect */}
        {[...items, ...items, ...items].map((story, index) => (
          <TestimonialCard key={index} story={story} />
        ))}
      </motion.div>
    </div>
  );
};

export default function SuccessStories() {
  // Split the stories into two rows for a dynamic scrolling effect (4 per row)
  const topRow = stories.slice(0, 4);
  const bottomRow = stories.slice(4, 8);

  return (
    <section className="py-24 bg-[#fafbfc] font-sans overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
          Success Stories
        </h2>
        <p className="text-lg text-slate-500">
          Join 500+ students who achieved their dream university admissions
        </p>
      </div>

      {/* Scrolling Testimonials Rows */}
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[100vw]">
        {/* Row 1: Moves Left */}
        <ScrollingRow items={topRow} direction="left" speed={45} />
        
        {/* Row 2: Moves Right */}
        <ScrollingRow items={bottomRow} direction="right" speed={50} />
      </div>

    </section>
  );
}