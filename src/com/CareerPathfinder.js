"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, BrainCircuit, Stethoscope, Briefcase, Cpu } from 'lucide-react';

const CareerPathfinder = () => {
  const [step, setStep] = useState('booking'); // 'booking', 'quiz', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ tech: 0, management: 0, medical: 0 });

  const questions = [
    {
      q: "What kind of problems do you enjoy solving most?",
      options: [
        { text: "Fixing broken things or building apps", category: "tech" },
        { text: "Helping people and understanding biology", category: "medical" },
        { text: "Organizing events or leading a team", category: "management" },
      ]
    },
    {
      q: "Which environment sounds most exciting for a 10-hour shift?",
      options: [
        { text: "A high-tech lab or coding workstation", category: "tech" },
        { text: "A bustling hospital or clinic", category: "medical" },
        { text: "A corporate boardroom or startup office", category: "management" },
      ]
    },
    {
      q: "In a group project, you are usually the...",
      options: [
        { text: "The Specialist (The one doing the hard work)", category: "tech" },
        { text: "The Caretaker (Ensuring everyone is okay)", category: "medical" },
        { text: "The Strategist (Planning the whole outcome)", category: "management" },
      ]
    }
  ];

  const handleAnswer = (category) => {
    setScores({ ...scores, [category]: scores[category] + 1 });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('result');
    }
  };

  const getResult = () => {
    const max = Math.max(scores.tech, scores.management, scores.medical);
    if (max === scores.tech) return { title: "B.Tech (Engineering)", icon: <Cpu />, color: "text-blue-600", desc: "You have a logical mind. You're built for innovation, software, or core engineering." };
    if (max === scores.medical) return { title: "MBBS (Medical)", icon: <Stethoscope />, color: "text-rose-600", desc: "You have the empathy and precision required for a life-saving career in medicine." };
    return { title: "MBA (Management)", icon: <Briefcase />, color: "text-emerald-600", desc: "You're a natural leader. You belong in the world of high-stakes business and strategy." };
  };

  const result = getResult();

  return (
    <section className="py-20 bg-slate-50 min-h-[700px] flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        
        <AnimatePresence mode="wait">
          {/* STEP 1: FREE BOOKING CARD */}
          {step === 'booking' && (
            <motion.div 
              key="booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 bg-[#0f172a] text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Confused about your career?</h2>
                  <p className="text-slate-400 mb-6">Stop guessing. Get a personalized roadmap and a 15-min call with our top mentors.</p>
                  
                  <div className="flex items-center gap-2 mb-8">
                    <span className="bg-emerald-500/20 text-emerald-400 text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
                      FREE CONSULTATION
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {['Free Skill Assessment', 'Course Comparison', '1-on-1 Mentorship'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 flex flex-col justify-center items-center text-center">
                  <BrainCircuit size={64} className="text-blue-600 mb-6 animate-pulse" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Start Your Assessment</h3>
                  <p className="text-slate-500 text-sm mb-8">Analyze your strengths before booking your call.</p>
                  
                  <button 
                    onClick={() => setStep('quiz')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                  >
                    Start Free Assessment <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: ASSESSMENT QUIZ */}
          {step === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100"
            >
              <div className="mb-8">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Question {currentQuestion + 1} of 3</span>
                <div className="w-full bg-slate-100 h-2 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-500" 
                    style={{ width: `${((currentQuestion + 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-8">{questions[currentQuestion].q}</h2>
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.category)}
                    className="text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all font-medium text-slate-700"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: RESULT REVEAL */}
          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-3xl shadow-2xl border-t-8 border-blue-600 text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-slate-50 ${result.color}`}>
                {React.cloneElement(result.icon, { size: 40 })}
              </div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Our Recommendation</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-4">{result.title}</h3>
              <p className="text-slate-600 mb-10 max-w-md mx-auto">{result.desc}</p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl mb-8 border border-emerald-100">
                <p className="text-emerald-800 font-bold italic">{"Your 15-min free consultation is now available!"}</p>
              </div>

              {/* Updated button to link to Calendly */}
              <button 
                onClick={() => window.open('https://calendly.com/help-edumentor360', '_blank')}
                className="bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                Schedule My Free Call Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CareerPathfinder;