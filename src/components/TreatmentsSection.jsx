import React from 'react';
import { Plus, Sun, Sparkles, Droplets, Feather, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const treatments = [
  {
    title: "Hair Spa Experience",
    description: "60 minuti di rituale olistico: purificazione, massaggio e rigenerazione profonda per cute e capelli.",
    icon: <Droplets size={32} strokeWidth={1.5} className="text-[#000000]" />,
    image: "/marquee-1.png"
  },
  {
    title: "LuminaPeel Viso",
    description: "La scienza cosmetica al servizio della pelle: esfoliazione acida calibrata per una luminosità istantanea.",
    icon: <Sparkles size={32} strokeWidth={1.5} className="text-[#000000]" />,
    image: "/luminapeel-facial.png"
  },
  {
    title: "Rituali Multisensoriali",
    description: "Aromaterapia, cromoterapia e massaggi orientali per sciogliere le tensioni e ritrovare l'equilibrio.",
    icon: <Feather size={32} strokeWidth={1.5} className="text-[#000000]" />,
    image: "/marquee-4.png"
  },
  {
    title: "Styling & Vitalità",
    description: "Tagli e acconciature personalizzate che rispettano la salute del capello esaltandone la bellezza.",
    icon: <Sun size={32} strokeWidth={1.5} className="text-[#000000]" />,
    image: "/hero-2.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export default function TreatmentsSection({ onNavigate }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="servizi" className="w-full pt-20 pb-20 md:pb-48 lg:pb-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Badge Top */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-12 shadow-sm"
          style={{ backgroundColor: '#f8f8f8', border: '1px solid rgba(0, 0, 0, 0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#000000]" />
          <span className="text-[11px] md:text-xs font-bold tracking-[0.1em] text-[#000000] ">
            I nostri trattamenti
          </span>
        </motion.div>

        {/* Cards container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full flex flex-col gap-6"
        >
          {treatments.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full border border-stone-200/80 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 hover:border-[#000000]/30 hover:bg-[#f8f8f8] hover:shadow-sm transition-all duration-300 bg-[#fdfcfb]"
            >
              
              {/* Left Side: Icon + Title */}
              <div className="flex items-center gap-6 md:w-1/2">
                <div className={`${isMobile ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  {t.icon}
                </div>
                <h3 
                  className="text-black font-medium"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 300,
                    fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    lineHeight: isMobile ? 1.2 : 1.25,
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                    textTransform: 'uppercase'
                  }}
                >
                  {t.title}
                </h3>
              </div>

              {/* Right Side: Desc + Action buttons */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:w-1/2">
                <div className="flex flex-col gap-4 max-w-sm">
                  <p className={`text-black/80 lg:text-[15px] leading-relaxed ${isMobile ? 'text-[15px] leading-[1.6]' : 'text-sm'}`}>
                    {t.description}
                  </p>
                  <div>
                    <button 
                      onClick={() => {
                        if (t.title.includes('Hair Spa') || t.title.includes('Styling')) onNavigate('hair-spa');
                        else if (t.title.includes('LuminaPeel') || t.title.includes('Rituali Multisensoriali')) onNavigate('lumina-peel');
                      }}
                      className="group flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-[#000000] border border-[#000000] hover:bg-[#222222] transition-colors duration-300 w-fit shadow-md"
                    >
                      <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm duration-300">
                        <ArrowUpRight size={14} strokeWidth={2.5} color="#000000" />
                      </span>
                      <span className="text-[12px] font-bold tracking-wide text-white transition-colors duration-300 ">
                        Scopri i dettagli
                      </span>
                    </button>
                  </div>
                </div>
                {/* Image Preview (Desktop Only) */}
                <div className="hidden lg:block w-32 h-32 rounded-2xl overflow-hidden border border-stone-200 shrink-0">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Plus Button */}
                <button 
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-stone-200 bg-white hover:bg-[#f8f8f8] hover:border-[#000000]/40 transition-colors shadow-sm ml-auto md:ml-0 flex-shrink-0"
                  aria-label="Espandi trattamento"
                >
                  <Plus size={20} className="text-[#000000]" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
