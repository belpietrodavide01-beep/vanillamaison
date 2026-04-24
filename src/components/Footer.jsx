import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="w-full bg-[#f8f8f8] pt-16 md:pt-24 pb-12 px-6 lg:px-16 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start text-left gap-6 lg:border-0 lg:pb-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}
              className="w-32 md:w-56 h-auto"
            >
              <Logo className="scale-75 md:scale-110 origin-left" />
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm md:max-w-xs">
              Vanilla Maison di Manuela Vitali è un’oasi di bellezza e benessere. Il primo trattamento che trasforma i tuoi capelli mentre rigenera corpo e mente.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/vanillamaison?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#000000] hover:text-white hover:border-[#000000] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left gap-6">
            <h4 className="text-black font-semibold text-xs tracking-widest ">Navigazione</h4>
            <ul className="flex flex-col gap-4 items-start">
              {['Home', 'Chi Siamo', 'Servizi', 'Contatti'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handleScroll(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-stone-500 text-sm hover:text-[#000000] transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start text-left gap-6">
            <h4 className="text-black font-semibold text-xs tracking-widest ">Contattaci</h4>
            <ul className="flex flex-col gap-5 items-start">
              <li>
                <a href="tel:+393473127375" className="flex items-start gap-3 group">
                  <Phone size={18} className="text-[#000000] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-black font-medium text-sm">347 312 7375</span>
                    <span className="text-stone-400 text-xs">Prenota il tuo appuntamento</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@vanillamaison.it" className="flex items-start gap-3 group">
                  <Mail size={18} className="text-[#000000] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-black font-medium text-sm">info@vanillamaison.it</span>
                    <span className="text-stone-400 text-xs">Inviaci una richiesta</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#000000] shrink-0" />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-black font-medium text-sm">Via Asmondi, 12</span>
                  <span className="text-stone-400 text-xs">25034 Orzinuovi (BS), Italia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="flex flex-col items-start text-left gap-6 lg:pt-0 lg:border-0 w-full">
            <h4 className="text-black font-semibold text-xs tracking-widest ">Orari di Apertura</h4>
            <ul className="flex flex-col gap-3 w-full">
              {[
                { d: 'Lun - Dom', h: 'Chiuso' },
                { d: 'Mar - Ven', h: '09:00 - 19:00' },
                { d: 'Sabato', h: '09:00 - 14:00' }
              ].map((item) => (
                <li key={item.d} className="flex justify-between items-center text-sm">
                  <span className="text-stone-500">{item.d}</span>
                  <span className={`font-medium ${item.h === 'Chiuso' ? 'text-stone-400' : 'text-black'}`}>{item.h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 rounded-2xl bg-[#fffaff] border border-[#000000]/10 flex items-start gap-3">
              <Clock size={16} className="text-[#000000] mt-0.5" />
              <p className="text-xs text-stone-500 leading-relaxed">
                Si riceve su appuntamento per garantirti la massima cura e attenzione.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-12 border-t border-stone-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-[11px] tracking-wide ">
            &copy; {currentYear} Vanilla Maison di Manuela Vitali — Tutti i diritti riservati
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 text-[11px] tracking-wide  hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 text-[11px] tracking-wide  hover:text-black transition-colors">Cookies</a>
            <a href="#" className="text-stone-400 text-[11px] tracking-wide  hover:text-black transition-colors">Dati Societari</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
