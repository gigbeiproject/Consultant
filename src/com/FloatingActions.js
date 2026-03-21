"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "+15551234567"; // Replace with your actual number
  const whatsappNumber = "15551234567"; // Replace with your actual number
  const message = "Hello! I'm interested in Edu Mentor services.";

  return (
    // Changed 'left-6' to 'right-6'
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        {/* Tooltip moved to 'right-16' so it shows on the left of the button */}
        <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#2563eb] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Call us"
      >
        <Phone size={28} fill="currentColor" />
        {/* Tooltip moved to 'right-16' */}
        <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Call us now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;