"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';

// Data array makes it easy to manage testimonials
const stories = [
  {
    name: "Sarah Chen",
    major: "Computer Science Student",
    university: "Stanford University",
    quote: "The consultation helped me secure $80,000 in scholarships. The team guided me through every step of the application process.",
    achievement: "$80K Scholarship Secured",
    avatar: "https://i.pravatar.cc/150?u=sarah" 
  },
  {
    name: "Michael Rodriguez",
    major: "Engineering Student",
    university: "MIT",
    quote: "I got into my dream school! The personalized roadmap made the complex admissions process so much clearer and manageable.",
    achievement: "Admitted to Top 10 University",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Priya Patel",
    major: "Business Student",
    university: "Oxford University",
    quote: "The scholarship guidance was invaluable. They helped me find opportunities I never knew existed and craft winning applications.",
    achievement: "Full Scholarship Winner",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "David Kim",
    major: "Medical Student",
    university: "Harvard University",
    quote: "Their expert consultants are former admissions officers. The insider knowledge they shared was game-changing for my application.",
    achievement: "Accepted to Harvard Med",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Emily Watson",
    major: "Liberal Arts Student",
    university: "Yale University",
    quote: "As a first-generation student, I had no idea where to start. This service made my dream of studying abroad a reality.",
    achievement: "First-Gen Success Story",
    avatar: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "James Thompson",
    major: "Physics Student",
    university: "Cambridge University",
    quote: "The 95% success rate is real. Every piece of advice was spot-on and helped me stand out in a competitive applicant pool.",
    achievement: "Cambridge Scholar",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

// Helper component to render an individual card
const TestimonialCard = ({ story }) => (
  <div className="w-[320px] md:w-[400px] flex-shrink-0 bg-white rounded-[24px] p-8 shadow-xl shadow-slate-200/40 flex flex-col h-full border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
    
    {/* Decorative Quote Icon */}
    <div className="absolute top-6 right-6 text-blue-50 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
      <Quote size={48} fill="currentColor" />
    </div>

    {/* User Profile Header */}
    <div className="flex items-center gap-4 mb-6 relative z-10">
      <img 
        src={story.avatar} 
        alt={`${story.name} profile`} 
        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
      />
      <div>
        <h3 className="font-bold text-slate-900 text-sm md:text-base">
          {story.name}
        </h3>
        <p className="text-xs md:text-sm text-slate-500">
          {story.major}
        </p>
        <p className="text-xs md:text-sm font-semibold text-[#2563eb]">
          {story.university}
        </p>
      </div>
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
 <blockquote className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow relative z-10">
  &quot;{story.quote}&quot;
</blockquote>

    {/* Achievement Footer */}
    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 text-[#10b981] relative z-10">
      <CheckCircle2 size={18} strokeWidth={2.5} />
      <span className="text-xs font-bold tracking-wide">
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
  // Split the stories into two rows for a dynamic scrolling effect
  const topRow = stories.slice(0, 3);
  const bottomRow = stories.slice(3, 6);

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