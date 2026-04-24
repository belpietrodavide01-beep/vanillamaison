import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import SplitText from './react-bits/SplitText'
import Logo from './Logo'

export default function Navbar({ menuOpen, setMenuOpen, currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showServices, setShowServices] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() 
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLinkClick = (id) => {
    setMenuOpen(false)
    setShowServices(false)
    
    if (currentPage !== 'home') {
      onNavigate('home')
      // Wait for home to load before scrolling
      setTimeout(() => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Home', action: () => onNavigate('home') },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Servizi', isDropdown: true },
    { label: 'Contatti', href: '#contatti' },
  ]

  const serviceSubLinks = [
    { label: 'Hair Spa Ritual', action: () => onNavigate('hair-spa') },
    { label: 'LuminaPeel Viso', action: () => onNavigate('lumina-peel') },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || menuOpen || currentPage !== 'home' || !isMobile ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/50 shadow-sm' : 'bg-transparent'} ${isScrolled ? 'py-1' : 'py-2'}`}
      >
        <nav className="w-full px-6 md:px-6 lg:px-16 h-20 flex items-center justify-between md:grid md:grid-cols-3">

          {/* ── Logo Container ── */}
          <div className="flex justify-start">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#home') }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0"
            >
              <Logo className="scale-[0.8] md:scale-100 origin-left" />
            </motion.a>
          </div>

          {/* ── Links Desktop ── */}
          <ul className="hidden md:flex items-center justify-center gap-12">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.isDropdown ? (
                  <div 
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                    className="relative"
                  >
                    <button
                      onClick={() => handleLinkClick('#servizi')}
                      className="text-[13px] font-medium tracking-wide text-stone-700 hover:text-[#000000] transition-colors duration-200 py-1"
                    >
                      <SplitText text={link.label} />
                    </button>
                    
                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-8 left-1/2 -translate-x-1/2 w-56 bg-white border border-stone-100 rounded-2xl shadow-xl p-2 z-[60]"
                        >
                          {serviceSubLinks.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={sub.action}
                              className="w-full text-left px-5 py-3 rounded-xl text-[12px] font-medium text-stone-600 hover:bg-[#f8f8f8] hover:text-[#000000] transition-all"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => link.action ? link.action() : handleLinkClick(link.href)}
                    className="text-[13px] font-medium tracking-wide text-stone-700 hover:text-[#000000] transition-colors duration-200 py-1"
                  >
                    <SplitText text={link.label} />
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* ── Right Section ── */}
          <div className="flex justify-end items-center gap-2">
            <motion.a
              onClick={() => onNavigate('home')}
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex group items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-[#000000] border border-[#000000] hover:bg-[#222222] transition-colors duration-300 shadow-md decoration-0"
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm transition-colors duration-300">
                <ArrowUpRight size={14} strokeWidth={2.5} color="#000000" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white transition-colors duration-300">
                Prenota Ora
              </span>
            </motion.a>

            <button
              className="md:hidden flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#000000] text-white hover:bg-[#222222] transition-colors flex-shrink-0 shadow-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Apri menu"
            >
              {menuOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-0 right-0 z-40 border-b border-stone-100/80 shadow-sm md:hidden"
            style={{ background: 'rgba(250, 249, 246, 1)', backdropFilter: 'blur(10px)' }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <li key={i}>
                  {link.isDropdown ? (
                    <div className="flex flex-col gap-1">
                       <button 
                         onClick={() => setShowServices(!showServices)}
                         className="w-full text-left px-4 py-4 rounded-xl text-[14px] font-medium text-stone-700 flex justify-between items-center active:bg-stone-50 transition-colors"
                       >
                         {link.label}
                         <motion.span animate={{ rotate: showServices ? 180 : 0 }}>
                            <ArrowUpRight size={14} className="rotate-45" />
                         </motion.span>
                       </button>
                       
                       <AnimatePresence>
                          {showServices && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-1 ml-4 border-l border-stone-100"
                            >
                               {serviceSubLinks.map((sub) => (
                                 <button
                                   key={sub.label}
                                   onClick={() => { sub.action(); setMenuOpen(false); }}
                                   className="w-full text-left px-6 py-3 rounded-xl text-[13px] font-medium text-stone-500 active:bg-stone-100 transition-colors"
                                 >
                                   {sub.label}
                                 </button>
                               ))}
                            </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => link.action ? link.action() : handleLinkClick(link.href)}
                      className="w-full text-left px-4 py-4 rounded-xl text-[14px] font-medium text-stone-700 active:bg-stone-100 transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
