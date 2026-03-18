import React from 'react';
import { Target, Heart, Award, Users, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  // Core Values Data
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Student-Centric Approach",
      description: "We place the student's aspirations, strengths, and well-being at the heart of every decision we make."
    },
    {
      icon: <Award className="w-8 h-8 text-[#10b981]" strokeWidth={1.5} />,
      title: "Uncompromising Excellence",
      description: "From essay reviews to interview prep, we maintain the highest standards to ensure our students stand out."
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" strokeWidth={1.5} />,
      title: "Empathetic Guidance",
      description: "We understand the stress of admissions. Our mentors provide emotional support alongside academic strategy."
    }
  ];

  // Team Data
  const team = [
    {
      name: "Dr. Eleanor Vance",
      role: "Head of Admissions Strategy",
      background: "Former Admissions Officer at Harvard University",
      image: "https://i.pravatar.cc/300?u=eleanor"
    },
    {
      name: "Marcus Chen",
      role: "Lead Scholarship Advisor",
      background: "Secured over $5M in funding for students",
      image: "https://i.pravatar.cc/300?u=marcus"
    },
    {
      name: "Sarah Jenkins",
      role: "International Student Specialist",
      background: "Former Oxford University Interviewer",
      image: "https://i.pravatar.cc/300?u=sarah"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      
      {/* 1. Page Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#f0f4f8] via-[#f0f8f7] to-[#e6f2f0] py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2 mb-8 inline-flex">
          <BookOpen size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-slate-700">Our Story</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight mb-6 max-w-4xl">
          Empowering Students to Reach <br className="hidden md:block" />
          <span className="text-blue-600">Global Heights</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
          We are a team of former admissions officers, educators, and strategists dedicated to demystifying the path to the world&apos;s top universities.
        </p>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Democratizing access to world-class education.
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Founded in 2018, Edu Mentor began with a simple observation: brilliant students were missing out on top universities not because they lacked potential, but because they lacked the insider knowledge of how the admissions game is played.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg">
              Today, we&apos;ve guided over 500 students from 40+ countries into their dream schools. We don&apos;t just write essays; we build profiles, uncover hidden scholarships, and mentor future global leaders.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#10b981]" size={20} /> 100% Tailored Strategies
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#10b981]" size={20} /> Ethical Consulting Practices
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#10b981]" size={20} /> Proven Track Record
              </div>
            </div>
          </div>
          
          {/* Right side decorative element / image placeholder */}
          <div className="relative h-[400px] w-full rounded-[32px] bg-slate-100 overflow-hidden shadow-xl border border-slate-200 flex items-center justify-center">
             {/* Replace this div with a real image of students or your office! */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-[#10b981]/20 mix-blend-multiply"></div>
             <Users size={64} className="text-slate-300 opacity-50" />
             <span className="absolute bottom-6 left-6 right-6 text-center text-sm font-medium text-slate-500 bg-white/80 backdrop-blur-sm py-2 rounded-xl">
               Add a photo of your team or campus here
             </span>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-[#f4f7fb] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-[24px] shadow-lg shadow-slate-200/50 flex flex-col items-center text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet The Team */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Meet Your Mentors
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Learn directly from the people who used to read your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.background}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* 5. Call to Action */}
      <section className="py-20 bg-blue-600 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to shape your future?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Join hundreds of successful students who have trusted us with their university journey.
          </p>
          <a href="/book" className="inline-flex bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg items-center gap-2 transition-colors shadow-xl">
            Book Your Free Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}