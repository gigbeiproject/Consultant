import React from 'react';
import Link from 'next/link'; // Imported Next.js Link
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "August 15, 2024";

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto mb-8">
        {/* Changed <a> to <Link> for internal Next.js routing */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 border-b border-slate-100 pb-10">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
            <Shield size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-10 text-slate-600 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">1. Introduction</h2>
            <p className="mb-4">
              {/* Replaced raw quotes with &quot; to satisfy ESLint */}
              At <strong>Edu Mentor</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (edumentor.com) or use our educational consultancy services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or utilize our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and educational background that you voluntarily give to us when booking a consultation.</li>
              <li><strong>Academic Data:</strong> Transcripts, test scores, essays, and target universities shared with our consultants to evaluate and assist with your admission process.</li>
              <li><strong>Financial Data:</strong> Information related to your scholarship needs or payment methods for our premium consultancy services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Assess your academic profile and provide tailored university admission strategies.</li>
              <li>Communicate with you regarding consultations, application deadlines, and scholarship opportunities.</li>
              <li>Process payments and deliver the specific services you have requested.</li>
              <li>Improve our website, services, and overall student experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We highly value the confidentiality of our students. We do not sell, trade, or rent your personal identification information to others. We may share your information in the following limited situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share your profile with partner universities.</li>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">5. Data Security</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold text-[#0f172a] mb-1">Edu Mentor Consultancy</p>
              <p className="mb-1">123 University , balod District</p>
              <p className="mb-1">mumbai, IN 10001</p>
              {/* Note: Standard <a> tags are perfectly fine here because they are external mailto/tel links, not internal page routes! */}
              <p className="mb-1">Email: <a href="mailto:edumentor247@gmail.com" className="text-blue-600 hover:underline">edumentor247@gmail.com</a></p>
              <p>Phone: <a href="tel:+918147825355" className="text-blue-600 hover:underline">+91 81478 25355</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}