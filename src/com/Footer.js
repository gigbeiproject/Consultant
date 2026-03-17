import React from 'react';
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap size={24} strokeWidth={2} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Edu Mentor</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner in global education. We guide ambitious students through the complex university admissions process to secure placements and scholarships at world-class institutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consultant Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog & Resources</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">University Selection</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Application Review</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Scholarship Guidance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Interview Preparation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Visa Assistance</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>123 University Avenue,<br />balod District,<br />IN 10001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <a href="tel:+918147825355" className="hover:text-blue-400 transition-colors">+91 8147825355</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:edumentor247@gmail.com" className="hover:text-blue-400 transition-colors">edumentor247@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Border & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Edu Mentor Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            {/* <a href="#" className="hover:text-white transition-colors">Cookie Policy</a> */}
          </div>
        </div>

      </div>
    </footer>
  );
}