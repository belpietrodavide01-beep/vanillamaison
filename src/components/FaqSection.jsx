import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Cos'è esattamente l'Hair Spa?",
    answer: "È un rituale olistico di 60 minuti che combina detossinazione del cuoio capelluto, massaggio rilassante e trattamenti rigeneranti con prodotti 100% naturali. È pensato per migliorare la salute dei capelli e offrire un momento di profondo relax mentale."
  },
  {
    question: "LuminaPeel è adatto a tutti i tipi di pelle?",
    answer: "Sì, LuminaPeel è una soluzione scientificamente avanzata che calibriamo in base alle esigenze specifiche di ogni cliente. È ideale per combattere pori dilatati, disidratazione e linee sottili, anche su pelli sensibili grazie al nostro check-up diagnostico iniziale."
  },
  {
    question: "Cosa rende i vostri prodotti differenti?",
    answer: "Utilizziamo esclusivamente prodotti 100% naturali e polifunzionali. La nostra filosofia si basa sulla fusione tra natura e scienza cosmetica, garantendo risultati visibili senza l'uso di sostanze chimiche aggressive."
  },
  {
    question: "Quanto dura un trattamento Hair Spa?",
    answer: "Il rituale completo ha una durata di circa 60 minuti. In questo tempo vivrai un'esperienza multisensoriale che include cromoterapia, aromaterapia e tecniche di rilassamento orientali."
  },
  {
    question: "LuminaPeel è doloroso?",
    answer: "Assolutamente no. Durante l'applicazione degli acidi calibrati potresti avvertire solo un leggero pizzicore, segno che il trattamento sta agendo. Concludiamo sempre con una maschera lenitiva per garantirti il massimo comfort."
  },
  {
    question: "Come posso prenotare la mia esperienza?",
    answer: "Puoi prenotare il tuo posto cliccando sui pulsanti WhatsApp presenti sul sito o chiamandoci direttamente. Ti consigliamo di prenotare con anticipo, specialmente per i rituali Hair Spa, a causa della grande richiesta."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // JSON-LD Schema for SEO & AI (ChatGPT/SearchGPT/Perplexity)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full pt-14 pb-20 md:pt-24 md:pb-48 lg:pt-32 lg:pb-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      {/* Schema Markup Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full mb-8 shadow-sm"
            style={{ backgroundColor: '#f8f8f8', border: '1px solid rgba(0, 0, 0, 0.1)' }}
          >
            <HelpCircle size={14} className="text-[#000000]" />
            <span className="text-[11px] md:text-xs font-bold tracking-[0.1em] text-[#000000] ">
              Supporto & Informazioni
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-light uppercase "
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              lineHeight: '1.2',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}
          >
            Domande frequenti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-stone-500 text-lg max-w-2xl"
          >
            Tutto quello che c'è da sapere sui nostri trattamenti per la tua bellezza e sicurezza.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[1.5rem] border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-black font-medium text-base md:text-xl group-hover:text-[#000000] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#000000]' : ''}`}>
                    <ChevronDown size={20} className={isOpen ? 'text-white' : 'text-[#000000]'} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-stone-600 leading-relaxed text-sm md:text-lg max-w-[95%] md:max-w-[90%]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
