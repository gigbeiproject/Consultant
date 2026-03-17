import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const lastUpdated = "August 15, 2024";

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 border-b border-slate-100 pb-10">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-500">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-10 text-slate-600 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the <strong>Edu Mentor</strong> website (edumentor.com) and our educational consultancy services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Edu Mentor provides educational consulting services, including but not limited to university selection, application strategy, essay review, interview preparation, and scholarship guidance. 
            </p>
            <p>
              Our initial 15-minute consultation is provided free of charge. Further comprehensive services may be subject to a separate service agreement and applicable fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">3. User Responsibilities</h2>
            <p className="mb-4">
              To ensure the highest quality of guidance, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information about your academic background and financial status.</li>
              <li>Maintain the confidentiality of any account credentials provided to you.</li>
              <li>Ensure that all essays, personal statements, and application materials submitted to universities are entirely your own original work. We provide guidance and reviews, but we do not write essays for students.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">4. No Guarantee of Admission</h2>
            <p className="mb-4">
              While Edu Mentor boasts a high success rate and employs former admissions officers, university admissions are highly competitive and subjective. <strong>We do not and cannot guarantee admission to any specific university, college, or program</strong>, nor do we guarantee the receipt of any scholarships or financial aid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and consulting frameworks, is the property of Edu Mentor and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Edu Mentor, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">7. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold text-[#0f172a] mb-1">Edu Mentor Consultancy</p>
              <p className="mb-1">123 University , balod District</p>
              <p className="mb-1">mumbai, IN 10001</p>
              <p className="mb-1">Email: <Link href="mailto:edumentor247@gmail.com" className="text-blue-600 hover:underline">edumentor247@gmail.com</Link></p>
              <p>Phone: <Link href="tel:+918147825355" className="text-blue-600 hover:underline">+91 81478 25355</Link></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}