"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [role, setRole] = useState('student');
  const [needsFunding, setNeedsFunding] = useState(null);

  return (
    <section className="min-h-screen relative bg-[#f4f7fb] py-24 px-4 font-sans flex flex-col items-center overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-6 text-sm font-semibold text-blue-600">
          <CheckCircle2 size={16} /> Fast, Free & Confidential
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
          Book Your Free Consultation
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Start your journey to world-class education today. Tell us a bit about yourself so we can pair you with the right expert.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 w-full max-w-2xl p-8 md:p-12 border border-slate-50 relative z-10"
      >
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Role Selection */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-slate-800">
              Are you a student or a guardian?
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                  role === 'student'
                    ? 'border-blue-500 text-blue-700 bg-blue-50 shadow-sm shadow-blue-100'
                    : 'border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-full ${role === 'student' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100'}`}>
                  <GraduationCap size={20} />
                </div>
                <span className="font-bold">Student</span>
              </button>
              
              <button
                type="button"
                onClick={() => setRole('guardian')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                  role === 'guardian'
                    ? 'border-blue-500 text-blue-700 bg-blue-50 shadow-sm shadow-blue-100'
                    : 'border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-full ${role === 'guardian' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100'}`}>
                  <User size={20} />
                </div>
                <span className="font-bold">Guardian</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-bold text-slate-800">
                First Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-800">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-slate-800">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                required
              />
            </div>

            {/* Graduation Year */}
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="gradYear" className="text-sm font-bold text-slate-800">
                Graduation Year <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="gradYear"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-slate-700 appearance-none focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* Current School */}
          <div className="flex flex-col gap-2">
            <label htmlFor="school" className="text-sm font-bold text-slate-800">
              Name of current school <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="school"
              placeholder="Enter your school name"
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
              required
            />
          </div>

          {/* Scholarship Funding Needs */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-slate-800">
              Do you need scholarship funding to cover tuition?
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setNeedsFunding('yes')}
                className={`flex-1 py-3.5 px-6 rounded-xl border-2 transition-all duration-300 font-bold text-sm ${
                  needsFunding === 'yes'
                    ? 'border-blue-500 text-blue-700 bg-blue-50'
                    : 'border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setNeedsFunding('no')}
                className={`flex-1 py-3.5 px-6 rounded-xl border-2 transition-all duration-300 font-bold text-sm ${
                  needsFunding === 'no'
                    ? 'border-blue-500 text-blue-700 bg-blue-50'
                    : 'border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="w-full bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl py-4 px-6 font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/25"
            >
              Book My Consultation <ArrowRight size={20} />
            </button>
            
            {/* Disclaimer */}
            <p className="text-center text-xs text-slate-500 mt-4">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
          
        </form>
      </motion.div>
    </section>
  );
}