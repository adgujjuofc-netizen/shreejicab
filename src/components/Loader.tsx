import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
  key?: React.Key;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Headlights glow (0s - 0.8s)
    // Stage 2: Golden line animation (0.8s - 1.5s)
    // Stage 3: Logo text reveal (1.5s - 2.4s)
    // Stage 4: Fade-out transition (2.4s - 2.8s)
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(3), 1600),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden">
      {/* Interactive lighting depth nodes */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      
      <div className="relative w-full max-w-sm flex flex-col items-center px-6">
        
        {/* Step 1: Headlight beam vectors */}
        <div className="relative w-full h-24 mb-6 flex items-center justify-between px-10">
          {/* Main grill light line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={stage >= 1 ? { scaleX: 1, opacity: [0, 0.4, 0.2] } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent top-1/2"
          />

          {/* Left Headlight Bead and Beam */}
          <div className="relative">
            {/* Bead LED */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={stage >= 1 ? { scale: [0.5, 1.2, 1], opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(103,232,249,0.8)] z-20 relative"
            />
            {/* Beam Flares */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={stage >= 1 ? { opacity: [0, 0.7, 0.45], scale: [0.8, 1.4, 1.2] } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-radial from-cyan-100 to-transparent filter blur-sm pointer-events-none z-10"
            />
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={stage >= 1 ? { opacity: [0, 0.35, 0.2], scaleX: [0.5, 1.5, 1.3] } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-1/2 -left-20 w-32 h-16 bg-gradient-to-r from-cyan-200/40 to-transparent rounded-[50%] blur-md origin-right pointer-events-none -translate-y-1/2 -rotate-12"
            />
          </div>

          {/* Right Headlight Bead and Beam */}
          <div className="relative">
            {/* Bead LED */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={stage >= 1 ? { scale: [0.5, 1.2, 1], opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(103,232,249,0.8)] z-20 relative"
            />
            {/* Beam Flares */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={stage >= 1 ? { opacity: [0, 0.7, 0.45], scale: [0.8, 1.4, 1.2] } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-radial from-cyan-100 to-transparent filter blur-sm pointer-events-none z-10"
            />
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={stage >= 1 ? { opacity: [0, 0.35, 0.2], scaleX: [0.5, 1.5, 1.3] } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-1/2 -right-20 w-32 h-16 bg-gradient-to-l from-cyan-200/40 to-transparent rounded-[50%] blur-md origin-left pointer-events-none -translate-y-1/2 rotate-12"
            />
          </div>
        </div>

        {/* Step 2: Golden rule line */}
        <div className="w-48 h-[1.5px] bg-[#222] overflow-hidden rounded relative mb-4">
          <motion.div
            initial={{ left: "-100%", width: "100%" }}
            animate={stage >= 2 ? { left: ["-100%", "0%"] } : {}}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute top-0 h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* Step 3: Premium text reveal with spacing */}
        <div className="text-center overflow-hidden h-14 relative flex flex-col justify-center">
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-1"
              >
                <h1 className="font-display font-black text-white text-lg tracking-[0.35em] uppercase">
                  SHREEJI <span className="text-[#D4AF37]">CAB</span>
                </h1>
                <p className="text-[8px] font-mono tracking-[0.25em] text-zinc-550 uppercase">
                  Premium Airport Travel Gujarat
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Luxury atmosphere background spots */}
      <motion.div 
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37] opacity-[0.15] rounded-full blur-[140px] pointer-events-none"
      />
    </div>
  );
}
