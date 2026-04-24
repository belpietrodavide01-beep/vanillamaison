import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    text: "La mia pelle era spenta e disidratata. Dopo LuminaPeel è completamente trasformata: luminosa, idratata e visibilmente più giovane.",
    author: "Emma R.",
    role: "Trasformazione Viso",
    avatar: "/facial-treatment.png"
  },
  {
    id: 2,
    text: "L'Hair Spa è un'esperienza da provare almeno una volta nella vita. È molto più di un trattamento capelli, è una cura per l'anima.",
    author: "Giulia L.",
    role: "Hair Spa Lover",
    avatar: "/bio-products.png"
  },
  {
    id: 3,
    text: "Manuela è incredibile. Mi ha spiegato ogni passaggio e mi sono sentita in mani sicure. Risultato? Capelli lucenti come seta.",
    author: "Sofia V.",
    role: "Cliente Fedele",
    avatar: "/manicure.png"
  },
  {
    id: 4,
    text: "Ho provato molti centri, ma Vanilla Maison ha qualcosa di magico. L'atmosfera rilassante e i profumi naturali ti trasportano.",
    author: "Elena B.",
    role: "Wellness Lover",
    avatar: "/laser-treatment.png"
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardOffset = scrollRef.current.firstElementChild.offsetWidth + 24; // 24 = gap-6 in pixels
      scrollRef.current.scrollBy({ left: -cardOffset, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardOffset = scrollRef.current.firstElementChild.offsetWidth + 24;
      scrollRef.current.scrollBy({ left: cardOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch overflow-hidden">
        
        {/* Left Column: Title & Reviews */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between gap-10 lg:gap-6 mb-16 lg:mb-12 text-center lg:text-left">
            
            {/* Mobile-Only Rating (Image 4) */}
            <div className="flex lg:hidden flex-col items-center gap-4">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#000000] text-[#000000]" />)}
              </div>
              <h3 className="text-5xl font-light uppercase text-black leading-none" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                99%
              </h3>
              <p className="text-[13px] font-bold tracking-[0.1em] text-[#000000] ">
                500+ clienti totalmente soddisfatti
              </p>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-black font-light uppercase "
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                lineHeight: '1.2',
                letterSpacing: '0.05em', textTransform: 'uppercase'
              }}
            >
              Cosa dicono i <br className="hidden lg:block" /> nostri clienti
            </motion.h2>
            
            {/* Arrows */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 pb-2"
            >
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:bg-stone-50 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft size={20} className="text-[#000000]" strokeWidth={1.5} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:bg-stone-50 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight size={20} className="text-[#000000]" strokeWidth={1.5} />
              </button>
            </motion.div>
          </div>

          {/* Cards Row (Carousel Array) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 mt-auto snap-x snap-mandatory py-4"
          >
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between min-h-[250px] shrink-0 snap-center w-[85%] sm:w-[calc(50%-12px)] transition-transform hover:scale-[1.02]"
                style={{ willChange: 'transform, opacity' }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#000000] text-[#000000]" />)}
                  </div>
                  <p className="text-black/80 text-base leading-relaxed h-[100px] overflow-hidden text-ellipsis">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={review.avatar} alt={review.author} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black font-semibold text-sm">{review.author}</span>
                    <span className="text-stone-400 text-xs">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Large Image & Overlay */}
        <div className="w-full lg:w-1/3 relative flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full h-[400px] md:h-[500px] lg:h-full min-h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md relative group"
          >
            <img 
              src="/patient-portrait.png" 
              alt="Pelle radiosa" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-110" 
            />
            
            {/* Frosted Glass Overlay Rating (Confined inside) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute inset-x-6 bottom-6 bg-black/60 border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl z-10"
              style={{ transform: 'translateZ(0)' }}
            >
              <h3 className="text-white text-5xl font-light uppercase mb-1" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                4.9
              </h3>
              <div className="flex items-center gap-1 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-white text-white" />)}
              </div>
              <p className="text-white text-[12px] font-bold tracking-[0.1em] mb-6">
                VALUTAZIONE CLIENTI
              </p>
              
              {/* Avatars row */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 z-40 relative shadow-sm">
                   <img src="/hero-2.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 -ml-2 z-30 relative shadow-sm">
                   <img src="/hero-4.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 -ml-2 z-20 relative shadow-sm">
                   <img src="/hero-1.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
