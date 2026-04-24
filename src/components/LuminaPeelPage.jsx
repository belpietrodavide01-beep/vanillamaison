import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Microscope, ShieldCheck, Heart, Zap, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    title: "Esfoliazione Bio-Attiva",
    description: "Un peeling chimico calibrato che rimuove lo strato di cellule morte senza aggredire la cute, stimolando il turnover cellulare profondo.",
    icon: <Microscope className="text-[#000000]" size={32} />
  },
  {
    title: "Bio-Stimolazione",
    description: "Attiviamo la produzione di collagene ed elastina attraverso principi attivi che penetrano negli strati profondi dell'epidermide.",
    icon: <Zap className="text-[#000000]" size={32} />
  },
  {
    title: "Protocollo Firming",
    description: "Il viso appare immediatamente più tonico e i volumi ridefiniti grazie a un massaggio liftante manuale post-trattamento.",
    icon: <ShieldCheck className="text-[#000000]" size={32} />
  },
  {
    title: "Luminosità Istantanea",
    description: "Concludiamo con un booster di vitamine che dona quell'effetto 'glow' iconico desiderato da ogni donna.",
    icon: <Sparkles className="text-[#000000]" size={32} />
  }
];

export default function LuminaPeelPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src="/luminapeel-facial.png" 
          alt="LuminaPeel Treatment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <h1 
              className="text-white text-5xl md:text-7xl lg:text-9xl font-light uppercase mb-6 "
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              LuminaPeel
            </h1>
            <p 
              className="text-white/80 max-w-2xl font-light leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                letterSpacing: '0.05em',
                textShadow: '0 0 20px rgba(0,0,0,0.2)'
              }}
            >
              La rivoluzione del peeling viso bio-stimolante
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row-reverse gap-20">
          
          {/* Left Side: Long Description */}
          <div className="lg:w-1/2">
            <h2 
              className="text-3xl md:text-5xl font-light uppercase mb-10 text-black leading-tight "
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Un viso nuovo, <br />senza bisturi.
            </h2>
            <div className="space-y-6 text-black/80 leading-relaxed text-lg">
              <p>
                LuminaPeel è molto più di un semplice trattamento viso. È un protocollo di <strong>estetica avanzata</strong> che agisce come un rinnovatore cellulare profondo.
              </p>
              <p>
                A differenza dei classici peeling, LuminaPeel non è invasivo e non richiede tempi di recupero. È ideale per trattare rughe sottili, macchie cutanee e perdita di tono.
              </p>
              
              <ul className="space-y-4 pt-4 mb-12">
                {[
                  "Effetto tensore immediato",
                  "Pelle più luminosa e levigata",
                  "Stimolazione naturale del collagene",
                  "Risultati visibili dalla prima seduta"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black font-medium">
                    <CheckCircle2 size={18} className="text-[#000000]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Desktop Promo Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden lg:flex bg-black text-white p-10 rounded-[3rem] shadow-2xl flex-row items-center justify-between gap-6"
              >
                <div className="text-left">
                  <h4 className="text-white/40 font-bold text-[10px] tracking-widest mb-1 uppercase">Promo Lancio</h4>
                  <p className="text-4xl font-light uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                    €59,00 <span className="text-white ml-2 text-lg" style={{ textDecoration: 'line-through', textDecorationColor: '#ff0000', textDecorationThickness: '2px' }}>€85,00</span>
                  </p>
                </div>
                <button 
                  onClick={() => window.open('https://wa.me/393473127375', '_blank')}
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-[10px] tracking-widest hover:bg-[#222222] hover:text-white transition-all shadow-lg shrink-0"
                >
                  Prenota la tua promo
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Image Detail */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-32 rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] md:h-[700px] border-[12px] border-white z-10">
              <img src="/marquee-6.png" alt="LuminaPeel Result" className="w-full h-full object-cover" />
            </div>

            {/* Mobile Promo Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:hidden bg-black text-white p-8 md:p-10 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-8 mb-12"
            >
              <div className="text-center md:text-left">
                <h4 className="text-white/40 font-bold text-[10px] tracking-widest mb-1 uppercase">Promo Lancio</h4>
                <p className="text-3xl md:text-4xl font-light uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                  €59,00 <span className="text-white ml-2 text-lg" style={{ textDecoration: 'line-through', textDecorationColor: '#ff0000', textDecorationThickness: '2px' }}>€85,00</span>
                </p>
              </div>
              <button 
                onClick={() => window.open('https://wa.me/393473127375', '_blank')}
                className="px-8 py-4 bg-white text-black rounded-full font-bold text-[10px] tracking-widest hover:bg-[#222222] hover:text-white transition-all shadow-lg shrink-0"
              >
                Prenota la tua promo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="bg-white py-24 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-6xl font-light uppercase text-black mb-4 " style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Il Protocollo Scientifico
            </h3>
            <p className="text-black/60 font-light tracking-widest text-xs italic">Precisione ed efficacia in ogni passaggio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#f8f8f8] p-10 rounded-[2.5rem] border border-stone-100 hover:border-[#000000]/20 transition-all hover:bg-white hover:shadow-lg group"
              >
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {phase.icon}
                </div>
                <h4 className="text-lg font-light uppercase mb-4 text-black " style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {phase.title}
                </h4>
                <p className="text-black/70 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
