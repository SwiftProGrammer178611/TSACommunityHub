// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // import lucide icons

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      
      {/* Logo / Title */}
      <div className="text-white font-bold text-2xl flex items-center gap-2">
        <span className="text-emerald-500">🌿</span>
        River Valley Hub
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <a href="/directory" className="hover:text-white transition-colors">Directory</a>
        <a href="/highlights" className="hover:text-white transition-colors">Highlights</a>
        <a href="/events" className="hover:text-white transition-colors">Events</a>
        <a href="/about" className="hover:text-white transition-colors">About</a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="hover:text-emerald-500 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-emerald-500 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-emerald-500 transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>

    <div className="text-center text-slate-500 text-sm mt-8 border-t border-slate-700 pt-4">
      &copy; 2026 River Valley Community Hub. All rights reserved.
    </div>
  </footer>
);

export default Footer;
