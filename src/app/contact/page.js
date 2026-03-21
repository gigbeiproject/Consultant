"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      
      {/* 1. Page Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f4f8] via-[#f0f8f7] to-[#e6f2f0] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2 mb-6 inline-flex">
            <MessageSquare size={16} className="text-blue-600" />
         <span className="text-sm font-medium text-slate-700">We&apos;re Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Have questions about the admissions process or our consultancy services? Our team of experts is ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Email Card */}
          <div className="bg-white p-8 rounded-[24px] shadow-lg shadow-slate-200/50 flex flex-col items-center text-center border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">Email Us</h3>
            <p className="text-slate-500 text-sm mb-4">We usually respond within 24 hours.</p>
            <a href="mailto:help@edumentor360.in" className="text-blue-600 font-semibold hover:underline mt-auto break-all">
             help@edumentor360.in
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-[24px] shadow-lg shadow-slate-200/50 flex flex-col items-center text-center border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">Call Us</h3>
            <p className="text-slate-500 text-sm mb-4">Mon-Sat from 9am to 6pm (IST).</p>
            <a href="tel:+918147825355" className="text-emerald-600 font-semibold hover:underline mt-auto">
              +91 81478 25355
            </a>
          </div>

          {/* Office Card */}
          <div className="bg-white p-8 rounded-[24px] shadow-lg shadow-slate-200/50 flex flex-col items-center text-center border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">Visit Us</h3>
            <p className="text-slate-500 text-sm mb-4">Delta career solution 2nd Floor, 33rd Cross Rd, 4th T Block Jayanagar, Bengaluru, Karnataka 560011</p>
            <span className="text-rose-600 font-semibold mt-auto">
            Bengaluru, Karnataka 560011
            </span>
          </div>

        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-[#f4f7fb] rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Send Us a Message</h2>
            <p className="text-slate-500">
              Fill out the form below and an admissions counselor will get back to you shortly.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-bold text-slate-800">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="mohit"
                  className="w-full border-2 border-white rounded-xl px-5 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-bold text-slate-800">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="bhardwaj"
                  className="w-full border-2 border-white rounded-xl px-5 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email & Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-800">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="mohit@example.com"
                  className="w-full border-2 border-white rounded-xl px-5 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-800">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full border-2 border-white rounded-xl px-5 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-800">Your Message *</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your educational goals..."
                className="w-full border-2 border-white rounded-xl px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-[#2563eb] hover:bg-blue-700 text-white rounded-full py-4 px-8 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 w-full md:w-auto self-center md:px-12"
            >
              Send Message <Send size={18} />
            </button>

          </form>
        </div>
      </section>

    </div>
  );
} 