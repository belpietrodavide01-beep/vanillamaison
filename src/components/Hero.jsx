import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown } from 'lucide-react'
import Logo from './Logo'

// ─── Lista servizi con immagini Unsplash affidabili e stabili ───────────────────────────
const SERVICES = [
  { name: 'Hair Spa', img: '/marquee-1.png' },
  { name: 'LuminaPeel', img: '/marquee-6.png' },
  { name: 'Olistico', img: '/marquee-4.png' },
  { name: 'Analisi Scalpo', img: '/marquee-2.png' },
  { name: 'Bio-Cosmesi', img: '/marquee-3.png' },
  { name: 'Manicure', img: '/marquee-5.png' },
  { name: 'Styling Pro', img: '/marquee-1.png' },
  { name: 'Rituale Relax', img: '/marquee-4.png' },
]

const DURATION = 120

function useResponsive() {
  const [values, setValues] = React.useState({
    radius: 250,
    notchW: 220,
    isMobile: false,
    pillScale: 1,
    titleScale: 1
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setValues({
        radius: mobile ? 180 : 225,
        notchW: mobile ? 170 : 205,
        isMobile: mobile,
        pillScale: mobile ? 0.72 : 0.88,
        titleScale: mobile ? 0.8 : 0.95
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return values;
}

function ServicePill({ name, img, scale }) {
  const [hasError, setHasError] = useState(false);
  const isMobileScale = scale < 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobileScale ? `${10 * scale}px ${8 * scale}px ${16 * scale}px` : `${12 * scale}px ${8 * scale}px ${18 * scale}px`,
        gap: isMobileScale ? `${10 * scale}px` : `${12 * scale}px`,
        width: `${50 * scale}px`,
        height: isMobileScale ? `${210 * scale}px` : `${215 * scale}px`,
        background: isMobileScale ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255,255,255,0.65)',
        border: isMobileScale ? '1px solid rgba(255, 255, 255, 0.8)' : '0.8px solid rgba(255,255,255,0.7)',
        borderRadius: '999px',
        boxShadow: isMobileScale ? '0 4px 15px rgba(0,0,0,0.03)' : '0 10px 25px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
        transform: `translateZ(0) scale(${scale})`,
        transformOrigin: 'bottom center'
      }}
    >
      <div
        style={{
          width: isMobileScale ? `${34 * scale}px` : `${36 * scale}px`,
          height: isMobileScale ? `${34 * scale}px` : `${36 * scale}px`,
          borderRadius: '50%',
          overflow: 'hidden',
          border: isMobileScale ? '1.5px solid rgba(255, 255, 255, 0.9)' : '1.5px solid rgba(255,255,255,0.8)',
          flexShrink: 0,
          backgroundColor: isMobileScale ? '#f8f8f8' : '#fdf2fd', // Fallback background color
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {!hasError ? (
          <img
            src={img}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span style={{
            fontSize: isMobileScale ? `${12 * scale}px` : `${14 * scale}px`,
            fontWeight: 700,
            color: '#000000',
            fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.05em', textTransform: 'uppercase', textTransform: 'uppercase'
          }}>
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span
        style={{
          color: isMobileScale ? 'rgba(60, 50, 40, 0.9)' : 'rgba(74, 68, 63, 0.85)',
          fontSize: isMobileScale ? '10px' : '11px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          letterSpacing: isMobileScale ? '0.1em' : '0.1em',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Hero({ isMenuOpen, onNavigate }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const rotateTween = useRef(null);
  const { radius, notchW, isMobile, pillScale, titleScale } = useResponsive();

  // Optimized pill count for mobile performance
  const displayServices = isMobile ? SERVICES.slice(0, 10) : SERVICES;

  useEffect(() => {
    rotateTween.current = gsap.to(carouselRef.current, {
      rotate: 360,
      duration: DURATION,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    return () => {
      if (rotateTween.current) rotateTween.current.kill();
    }
  }, []);

  useEffect(() => {
    if (rotateTween.current) {
      if (isInView && !isMenuOpen) rotateTween.current.play();
      else rotateTween.current.pause();
    }
  }, [isInView, isMenuOpen]);



  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-start px-6 lg:px-16 pt-24 md:pt-32 pb-0"
      style={{ backgroundColor: '#faf9f6', contain: 'paint layout' }}
    >
      <div className="relative w-full" style={{ 
        height: isMobile ? '72vh' : '78vh', 
        minHeight: isMobile ? '500px' : '620px', 
      }}>

        {/* OMBRA E FORMA DELLA HERO */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div
            className="w-full h-full bg-stone-100"
            style={{
              borderRadius: isMobile ? '32px' : '44px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              WebkitMaskImage: `radial-gradient(circle at 50% 100%, transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
              maskImage: `radial-gradient(circle at 50% 100%, transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
            }}
          />
        </div>

        {/* CONTENUTO HERO */}
        <div
          className="relative w-full h-full overflow-hidden gpu-layer"
          style={{
            zIndex: 10,
            borderRadius: isMobile ? '32px' : '44px',
            backgroundColor: '#faf9f6',
            transform: 'translateZ(0)',
            WebkitMaskImage: `radial-gradient(circle at 50% 100%, transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
            maskImage: `radial-gradient(circle at 50% 100%, transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
          }}
        >
          <img
            src="/hero-hair-spa.png"
            alt="Centro Estetico Premium"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          /><div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(250,249,246,0.92) 0%, rgba(250,249,246,0.4) 40%, rgba(250,249,246,0) 70%)',
            }}
          />

          <div
            className={`absolute inset-x-0 flex flex-col items-center text-center px-6 z-30 ${isMobile ? 'top-[14%]' : 'top-[10%]'}`}
            style={{ pointerEvents: 'none', willChange: 'transform, opacity' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-black font-medium tracking-tight whitespace-nowrap gpu-layer"
              style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.05em', textTransform: 'uppercase', textTransform: 'uppercase',
                fontWeight: 300,
                fontSize: `clamp(2rem, ${7 * titleScale}vw, ${6.5 * titleScale}rem)`,
                textShadow: '0 4px 30px rgba(255,255,255,0.8)',
                maxWidth: '95vw',
                lineHeight: 1.1,
                letterSpacing: '0.05em', textTransform: 'uppercase', textTransform: 'uppercase',
                textTransform: 'uppercase'
              }}
            >
              arte del benessere
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`text-black/80 max-w-lg font-light  gpu-layer ${isMobile ? 'mt-4' : 'mt-3'}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.7rem' : 'clamp(0.8rem, 1.5vw, 1rem)',
                letterSpacing: '0.05em', 
                textShadow: '0 0 20px rgba(255,255,255,0.6)',
                lineHeight: 1.5
              }}
            >
              Hair Spa olistica e trattamenti LuminaPeel <br className="hidden md:block" />
              a Orzinuovi, firmati Manuela Vitali
            </motion.p>
          </div>

          <div
            ref={carouselRef}
            className="absolute"
            style={{
              bottom: 0,
              left: '50%',
              width: 0,
              height: 0,
              transformOrigin: '0 0',
              zIndex: 20,
              willChange: 'transform',
              transform: 'translateZ(0)',
              contain: 'none' // Ensure children aren't clipped
            }}
          >
            {displayServices.map((item, i) => {
              const angleDeg = (i / displayServices.length) * 360
              const angleRad = (angleDeg * Math.PI) / 180
              const dx = Math.sin(angleRad) * radius
              const dy = -Math.cos(angleRad) * radius

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${dx}px`,
                    bottom: `${-dy}px`,
                    transform: `translateX(-50%) translateY(50%) rotate(${angleDeg}deg)`,
                    transformOrigin: 'center center',
                    pointerEvents: 'none',
                  }}
                >
                  <ServicePill name={item.name} img={item.img} scale={isMobile ? 0.7 : 1} />
                </div>
              )
            })}
          </div>
        </div>

        {/* NOTCH BASE OVERLAY (For background consistency) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: `${notchW}px`,
            height: `${notchW / 2}px`,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        <div
          className="absolute z-50 flex flex-col items-center justify-center pt-2 pb-0"
          style={{
            width: `${notchW}px`,
            bottom: isMobile ? '8px' : '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        >
          <img 
            src="/IMG_1446-removebg-preview.svg" 
            alt="Vanilla Maison Icon" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain pointer-events-auto"
            style={{ filter: 'brightness(0)' }}
          />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '8px' : '10px',
              fontWeight: 700,
              letterSpacing: isMobile ? '0.15em' : '0.2em',
              textTransform: 'uppercase',
              color: '#222',
              textAlign: 'center',
              pointerEvents: 'auto',
              marginTop: isMobile ? '4px' : '6px',
              lineHeight: '1.4',
              maxWidth: isMobile ? '120px' : '180px'
            }}
          >
            Esplora i nostri servizi
          </span>
        </div>
      </div>
    </section>
  )
}
