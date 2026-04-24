import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Scissors, Droplets, Sparkles, Wind, Music } from 'lucide-react';

const phases = [
  {
    title: "Purificazione Profonda",
    description: "Iniziamo il rituale con una detersione specifica del cuoio capelluto, utilizzando oli botanici polifunzionali che rimuovono tossine e stress accumulato.",
    icon: <Droplets className="text-[#000000]" size={32} />
  },
  {
    title: "Il Trattamento Hair Spa",
    description: "Immagina di sdraiarti su un comodo lettino da massaggio. Mentre le tensioni si sciolgono, le tue chiome vengono avvolte dal vapore caldo e dai nostri principi attivi naturali.",
    icon: <Wind className="text-[#000000]" size={32} />
  },
  {
    title: "Rituale dei Sensi",
    description: "La luce soffusa della cromoterapia ti avvolge, i profumi naturali risvegliano i tuoi sensi, mentre la musica rilassante libera la mente dallo stress quotidiano.",
    icon: <Music className="text-[#000000]" size={32} />
  },
  {
    title: "Rinascita & Lucentezza",
    description: "In soli 60 minuti, i tuoi capelli ritrovano la loro naturale lucentezza. Non è solo un trattamento capelli, è un’esperienza di benessere totale per corpo e mente.",
    icon: <Sparkles className="text-[#000000]" size={32} />
  }
];

export default function HairSpaPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src="/hero-hair-spa.png" 
          alt="Hair Spa Experience" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-white text-5xl md:text-7xl lg:text-8xl font-light uppercase mb-6 "
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Hair Spa Ritual
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
              "Rigenera i tuoi capelli mentre ritrovi l'equilibrio tra corpo e mente"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Long Description */}
          <div className="lg:w-1/2">
            <h2 
              className="text-3xl md:text-5xl font-light uppercase mb-10 text-black "
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Oltre il semplice lavaggio
            </h2>
            <div className="space-y-6 text-black/80 leading-relaxed text-lg">
              <p>
                Stanca dei soliti trattamenti che promettono miracoli? Scopri il primo rituale che <strong>trasforma i tuoi capelli</strong> mentre rigenera corpo e mente.
              </p>
              <p>
                In soli 60 minuti potrai vivere un’esperienza di benessere mai provata prima: luci soffuse, profumi naturali e la magia del vapore che apre le cuticole per nutrire il capello dalla radice.
              </p>
              <div className="bg-[#f8f8f8] p-8 rounded-[2rem] border border-[#000000]/10 mt-10 shadow-sm">
                <h4 className="text-[#000000] font-bold  text-xs tracking-widest mb-4">Dettagli Servizio</h4>
                <div className="flex items-center gap-4 text-black mb-2">
                  <Clock size={20} className="text-[#000000]" />
                  <span className="font-medium">Durata: 60 minuti</span>
                </div>
                <div className="flex items-center gap-4 text-black">
                  <Scissors size={20} className="text-[#000000]" />
                  <span className="font-medium">Incluso: Analisi scalpo & Styling finale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image Detail */}
          <div className="lg:w-1/2">
            <div className="sticky top-32 rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
              <img src="/marquee-1.png" alt="Hair Spa Ritual Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="bg-white py-24 mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-light uppercase text-black mb-4 " style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Le fasi del rituale
            </h3>
            <p className="text-black/60 font-light tracking-wide italic">Un protocollo studiato per la tua massima rigenerazione</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#faf9f6] p-10 rounded-[2.5rem] border border-stone-100 hover:border-[#000000]/20 transition-all hover:bg-white hover:shadow-lg group"
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
