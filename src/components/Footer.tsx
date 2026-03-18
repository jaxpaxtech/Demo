import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="bg-academy-dark text-white pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-academy-blue rounded-full blur-[150px]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-black text-white flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center"><GraduationCap className="w-7 h-7" /></div>
            <span>Bright Future</span>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed mb-10">
            Pioneering the future of education with a blend of traditional wisdom and modern technology.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn", "YouTube"].map(social => (
              <div key={social} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer group">
                <div className="w-5 h-5 bg-white/20 rounded-full group-hover:scale-125 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Navigation</h4>
          <ul className="space-y-5 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Academy</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Our Programs</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Contact</h4>
          <ul className="space-y-5 text-slate-400">
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-500" /> Mumbai, India</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-500" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-500" /> hello@brightfuture.edu</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          Demo Website | Crafted by <span className="text-white">Prince Maurya</span>
        </p>
        <div className="flex gap-8 text-slate-500 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
