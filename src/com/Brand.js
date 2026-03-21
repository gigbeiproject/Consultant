"use client";
import React from "react";
import { motion } from "framer-motion";

// University Logo Data
const logos = [
  { name: "RV College of Engineering", src: "/rv.jpg" },
  { name: "BMS College of Engineering", src: "/bms.jpg" },
  { name: "MS Ramaiah Institute of Technology", src: "/ms.jpg" },
  { name: "Dayananda Sagar College of Engineering", src: "/dsce.jpg" },
  { name: "SRM University", src: "/srm.jpg" },
  { name: "Vellore Institute of Technology (VIT)", src: "/vit.jpg" },
  { name: "Manipal University", src: "/manipal.jpg" },
  { name: "BITS Pilani", src: "/bits.jpg" },
  { name: "Symbiosis University", src: "/pune.jpg" },
  { name: "Mount Carmel College", src: "/mcc.jpg" },
  { name: "Christ University", src: "/christ.jpg" }
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-6 mask-fade">
      <motion.div
        className="flex gap-12 flex-shrink-0" // Increased gap between logos
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render items twice for the seamless loop */}
        {[...items, ...items].map((logo, index) => (
          <div
            key={index}
            // INCREASED SIZE: w-64 h-32 (formerly w-48 h-20)
            className="w-64 h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img 
              src={logo.src} 
              alt={logo.name} 
              title={logo.name}
              // REMOVED GRAYSCALE & INCREASED OPACITY
              className="max-w-full max-h-full object-contain opacity-100 transition-transform duration-300" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Brand = () => {
  return (
    <section className="py-24 bg-[#f4f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
          Our Students Have Been Accepted To
        </h2>
        <p className="text-xl text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
          Join hundreds of successful students we&apos;ve guided into the world&apos;s most prestigious academic institutions.
        </p>
      </div>

      <div className="space-y-12">
        {/* Row 1: Moves Left */}
        <MarqueeRow items={logos} direction="left" speed={40} />

        {/* Row 2: Moves Right */}
        <MarqueeRow items={[...logos].reverse()} direction="right" speed={45} />
      </div>

      {/* CSS Mask to fade edges so logos smoothly disappear on the sides */}
      <style jsx global>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Brand;