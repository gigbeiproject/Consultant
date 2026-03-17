"use client";
import React from "react";
import { motion } from "framer-motion";

// University Logo Data - Make sure you have these images in your Next.js 'public' folder
const logos = [
  {
    name: "RV College of Engineering",
    src: "/rv.jpg"
  },
  {
    name: "BMS College of Engineering",
    src: "/bms.jpg"
  },
  {
    name: "MS Ramaiah Institute of Technology",
    src: "/ms.jpg"
  },
  {
    name: "Dayananda Sagar College of Engineering",
    src: "/dsce.jpg"
  },
  {
    name: "SRM University",
    src: "/srm.jpg"
  },
  {
    name: "Vellore Institute of Technology (VIT)",
    src: "/vit.jpg"
  },
  {
    name: "Manipal University",
    src: "/manipal.jpg"
  },
  {
    name: "BITS Pilani",
    src: "/bits.jpg"
  },
  {
    name: "Symbiosis University",
    src: "/pune.jpg"
  },
  {
    name: "Mount Carmel College",
    src: "/mcc.jpg"
  },
  {
    name: "Christ University",
    src: "/christ.jpg"
  }
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 mask-fade">
      {/* We duplicate the list to create an infinite seamless loop.
         The container width must be large enough to hold all items.
      */}
      <motion.div
        className="flex gap-8 flex-shrink-0"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render items twice for the loop */}
        {[...items, ...items].map((logo, index) => (
          <div
            key={index}
            className="w-48 h-20 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
          >
            {/* Displaying the university logo */}
            <img 
              src={logo.src} 
              alt={logo.name} 
              title={logo.name}
              className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Brand = () => {
  return (
    <section className="py-20 bg-[#f4f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
          Our Students Have Been Accepted To
        </h2>
       <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
  Join hundreds of successful students we&apos;ve guided into the world&apos;s most prestigious academic institutions.
</p>
      </div>

      <div className="space-y-8">
        {/* Row 1: Moves Left */}
        <MarqueeRow items={logos} direction="left" speed={30} />

        {/* Row 2: Moves Right */}
        <MarqueeRow items={[...logos].reverse()} direction="right" speed={35} />
      </div>

      {/* CSS Mask to fade edges so logos smoothly disappear on the sides */}
      <style jsx global>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Brand;