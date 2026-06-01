import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function SleekCar() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Real-time Scroll Parallax & Tilt Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll interpolation using spring physics (makes it extremely luxury/smooth)
  const rawX = useTransform(scrollYProgress, [0, 1], [-20, 45]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-2, 3]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.93]);
  
  const x = useSpring(rawX, { stiffness: 80, damping: 25 });
  const rotate = useSpring(rawRotate, { stiffness: 80, damping: 25 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 25 });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-lg mx-auto h-[260px] flex items-center justify-center select-none pointer-events-none"
    >
      {/* Interactive Aura Glow behind the vehicle */}
      <div className="absolute w-72 h-72 rounded-full bg-[#D4AF37]/5 filter blur-[60px] animate-pulse duration-[8000ms]" />

      {/* Parallax elements tied to scroll */}
      <motion.div
        style={{ x, rotate, scale }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Headlight Left Light Beam Cone */}
        <div className="absolute top-[138px] left-[55px] w-[220px] h-[100px] pointer-events-none z-0 transform -translate-x-[100%]">
          <div 
            className="w-full h-full bg-gradient-to-r from-transparent via-cyan-300/10 to-cyan-400/25 filter blur-md origin-right rotate-6"
            style={{ clipPath: "polygon(0 30%, 100% 45%, 100% 55%, 0 70%)" }}
          />
        </div>

        {/* Headlight Right Light Beam Cone */}
        <div className="absolute top-[138px] right-[55px] w-[220px] h-[100px] pointer-events-none z-0 transform translate-x-[100%]">
          <div 
            className="w-full h-full bg-gradient-to-l from-transparent via-cyan-300/10 to-cyan-400/25 filter blur-md origin-left -rotate-6"
            style={{ clipPath: "polygon(100% 30%, 0 45%, 0 55%, 100% 70%)" }}
          />
        </div>

        {/* PREMIUM SCULPTED VEHICLE SVG WRAP */}
        <svg
          viewBox="0 0 600 300"
          className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* DEFINITIONS FOR GRADIENTS */}
          <defs>
            <linearGradient id="bodyGrad" x1="300" y1="50" x2="300" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2c2d30" />
              <stop offset="40%" stopColor="#121315" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            
            <linearGradient id="glareGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="glassGrad" x1="300" y1="80" x2="300" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1b1d" />
              <stop offset="100%" stopColor="#2e3135" />
            </linearGradient>
          </defs>

          {/* 1. CAR LOWER UNDERBODY DEFLECTOR GRID */}
          <path d="M 120 250 L 480 250 L 440 270 L 160 270 Z" fill="#0c0d0f" opacity="0.9" />

          {/* 2. CHASSIS CORES Silhouette */}
          {/* Main profile upper roof bounds */}
          <path d="M 190 120 Q 205 78 300 78 Q 395 78 410 120 L 490 145 C 510 152 525 168 535 180 L 545 210 C 545 220 535 235 500 240 L 100 240 C 65 235 55 220 55 210 L 65 180 C 75 168 90 152 110 145 Z" fill="url(#bodyGrad)" />
          
          {/* Glass windshield curves */}
          <path d="M 210 120 Q 220 88 300 88 Q 380 88 390 120 Q 300 124 210 120 Z" fill="url(#glassGrad)" stroke="#3e4146" strokeWidth="1" />
          {/* Interior cockpit center pillars (subtle luxury details) */}
          <line x1="300" y1="88" x2="300" y2="122" stroke="#121315" strokeWidth="3" />
          <path d="M 252 116 Q 275 98 290 98" stroke="#3e4144" strokeWidth="0.8" />

          {/* 3. SHARP CHROME HIGHLIGHTS Line contours (Apple/Tesla style thin aesthetic) */}
          <path d="M 190 120 L 410 120" stroke="url(#glareGrad)" strokeWidth="1.2" />
          <path d="M 110 145 Q 300 135 490 145" stroke="url(#glareGrad)" strokeWidth="1.5" />
          <path d="M 160 76 Q 300 75 440 76" stroke="#4a4b4e" strokeWidth="0.6" />

          {/* Wide premium grille bars (luxury feel) */}
          <rect x="230" y="165" width="140" height="42" rx="6" fill="#080809" stroke="#252629" strokeWidth="1.5" />
          {/* Grille mesh patterns */}
          <line x1="240" y1="172" x2="360" y2="172" stroke="#151719" strokeWidth="1" />
          <line x1="240" y1="180" x2="360" y2="180" stroke="#1c1e22" strokeWidth="1" />
          <line x1="240" y1="188" x2="360" y2="188" stroke="#151719" strokeWidth="1" />
          <line x1="240" y1="196" x2="360" y2="196" stroke="#2a2d32" strokeWidth="1.2" />
          <line x1="240" y1="202" x2="360" y2="202" stroke="#151719" strokeWidth="1" />

          {/* Premium Logo Crest at the center of grille */}
          <path d="M 300 174 L 305 184 L 300 189 L 295 184 Z" fill="#D4AF37" stroke="#FFF" strokeWidth="0.5" />

          {/* 4. HIGH INTENSITY STRIKING HEADLIGHT UNITS */}
          {/* Left Headlight */}
          <path d="M 140 152 L 185 156 L 195 168 L 135 160 Z" fill="#131416" stroke="#36393e" strokeWidth="1" />
          {/* Headlight inner neon LED strips */}
          <path d="M 142 154 H 178 L 184 159" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
          <circle cx="178" cy="161" r="3.5" fill="#FFF" filter="drop-shadow(0 0 4px #67e8f9)" />

          {/* Right Headlight */}
          <path d="M 460 152 L 415 156 L 405 168 L 465 160 Z" fill="#131416" stroke="#36393e" strokeWidth="1" />
          {/* Headlight inner neon LED strips */}
          <path d="M 458 154 H 422 L 416 159" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
          <circle cx="422" cy="161" r="3.5" fill="#FFF" filter="drop-shadow(0 0 4px #67e8f9)" />

          {/* 5. SIDE REAR VIEW MIRRORS */}
          <path d="M 130 118 L 105 125 L 102 131 L 132 124 Z" fill="#1c1e21" stroke="#3e4145" strokeWidth="1" />
          <path d="M 470 118 L 495 125 L 498 131 L 468 124 Z" fill="#1c1e21" stroke="#3e4145" strokeWidth="1" />

          {/* 6. FRONT SPOILER ACCENTS & FOG LIGHTS */}
          <path d="M 105 212 L 150 216 L 145 228 L 98 222 Z" fill="#08080a" />
          <circle cx="122" cy="221" r="1.5" fill="#D4AF37" />
          
          <path d="M 495 212 L 450 216 L 455 228 L 502 222 Z" fill="#08080a" />
          <circle cx="478" cy="221" r="1.5" fill="#D4AF37" />

          {/* License Plate (Exclusive Touch) */}
          <rect x="270" y="215" width="60" height="15" rx="2" fill="#121315" stroke="#333" />
          <text x="300" y="225" fill="#999" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">
            SHREEJI
          </text>

          {/* 7. FRONT ROAD WHEELS Silhouette */}
          {/* Left Wheel */}
          <rect x="95" y="225" width="44" height="20" rx="4" fill="#050505" stroke="#151719" />
          {/* Right Wheel */}
          <rect x="461" y="225" width="44" height="20" rx="4" fill="#050505" stroke="#151719" />

        </svg>

        {/* 8. SHADOW & ROAD REFLECTION MATRIX */}
        <motion.div
          animate={{
            scaleX: [1, 0.94, 1],
            opacity: [0.35, 0.2, 0.35]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-2 w-[420px] h-[18px] bg-gradient-to-r from-transparent via-black/90 to-transparent blur-md rounded-[50%]"
        />
        
        {/* Luxury Gold Ground Neon Glow Under */}
        <motion.div
          animate={{
            scaleX: [0.9, 1, 0.9],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-3 w-[260px] h-[10px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent blur-md rounded-[50%]"
        />

      </motion.div>
    </div>
  );
}
