import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = "+919825447781";
  const defaultText = encodeURIComponent(
    "Hello Shreeji Cab! I just landed on your premium airport service page and want to book/get an instant fare quote."
  );

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center pointer-events-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center gap-3 bg-black/80 backdrop-blur-md p-1.5 pl-4 pr-1.5 border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
      >
        {/* Soft pulsing green glowing ring around the badge */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 -z-10 animate-pulse duration-[3000ms]" />

        {/* Dynamic high contrast text prompt */}
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#FFD700] uppercase">
            ⚡ LIVE OPERATOR
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-black text-white hover:text-emerald-400 transition-colors uppercase whitespace-nowrap pr-2"
          >
            📲 Get Instant Fare
          </a>
        </div>

        {/* Magnetic Button Element */}
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.6)] text-white transition-all duration-300 relative shrink-0"
          aria-label="Contact on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366] shrink-0" />
          
          {/* Multi-layered dynamic halos */}
          <span className="absolute -inset-1.5 rounded-full border border-emerald-500/30 animate-pulse duration-[1500ms] pointer-events-none"></span>
          <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping duration-[3000ms] pointer-events-none"></span>
        </motion.a>
      </motion.div>
    </div>
  );
}
