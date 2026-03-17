"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TextMarquee() {
  // Add or edit your announcements here
  const announcements = [
    "🔥 Admissions open for Fall intake! Book your free consultation today.",
    "🎓 95% Success Rate in Top 50 Universities worldwide.",
    "🌍 Guiding students from over 40+ countries.",
    "💡 Over $2M+ in scholarships secured for our students.",
    "⭐ Expert guidance from former Ivy League Admissions Officers."
  ];

  // Join the array together with a bullet point separator
  const marqueeText = announcements.join(" ✦ ");

  return (
    <div className="w-full bg-[#0f172a] text-white py-3 overflow-hidden flex items-center font-sans border-b border-blue-900/50">
      <motion.div
        className="flex whitespace-nowrap flex-shrink-0"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 35, // Increase this number to slow it down, decrease to speed it up
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* We render the text string twice side-by-side to create the seamless loop */}
        <span className="text-sm font-medium tracking-wide px-4">
          {marqueeText} ✦ 
        </span>
        <span className="text-sm font-medium tracking-wide px-4">
          {marqueeText} ✦ 
        </span>
      </motion.div>
    </div>
  );
}