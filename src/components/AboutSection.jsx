import React from 'react';
import { Asterisk, Microscope, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="w-full py-20 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto bg-[#f8f8f8] rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden">
        
        {/* Left Column (Image & Overlay) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full lg:w-[45%] h-[400px] md:h-[500px] lg:h-[650px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-lg"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Placeholder Image using an existing one */}
          <img 
            src="/vanilla-maison-center.png" 
            alt="Interni Vanilla Maison" 
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Glassmorphism Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-row items-center justify-between shadow-2xl"
          >
            <div className="flex flex-col gap-1 text-white">
              <h4 className="text-xl lg:text-2xl font-light uppercase tracking-[0.1em] " style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Hair Spa & Viso
              </h4>
              <p className="text-white/80 text-sm font-medium tracking-wide">
                Specialisti in Bellezza Consapevole
              </p>
            </div>
            <Asterisk size={32} strokeWidth={1.5} className="text-white opacity-90" />
          </motion.div>
        </motion.div>

        {/* Right Column (Texts & List) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-row items-center gap-2 px-4 py-1.5 rounded-full mb-8 self-start"
            style={{ backgroundColor: '#f8f8f8', border: '1px solid rgba(0, 0, 0, 0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#000000]" />
            <span className="text-[11px] md:text-xs font-bold tracking-[0.1em] text-[#000000] ">
              Benvenuti in Vanilla Maison
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-light uppercase mb-12 "
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              lineHeight: '1.2',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}
          >
            Il tuo rifugio <br />di bellezza olistica
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black/80 text-sm md:text-base leading-relaxed mb-12 max-w-xl"
          >
            Vanilla Maison di Manuela Vitali è un’oasi di bellezza e benessere dedicata a te. Ogni giorno ci impegniamo a creare un’atmosfera di relax e tranquillità, dove abbandonare lo stress della vita quotidiana.
          </motion.p>

          {/* Features List */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-col gap-6"
          >
            
            {/* Feature 1 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Microscope size={24} className="text-[#000000]" strokeWidth={1.5} />
              </div>
              <p className="text-black text-base lg:text-lg font-medium">
                Esperienza Hair Spa Olistica da 60 minuti
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck size={24} className="text-[#000000]" strokeWidth={1.5} />
              </div>
              <p className="text-black text-base lg:text-lg font-medium">
                Scienza della pelle con LuminaPeel
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Heart size={24} className="text-[#000000]" strokeWidth={1.5} />
              </div>
              <p className="text-black text-base lg:text-lg font-medium">
                Prodotti 100% naturali e polifunzionali
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
