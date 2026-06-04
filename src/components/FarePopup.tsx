import React, { useEffect, useState } from "react";
import { X, MessageSquare, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FarePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_NUMBER = "+918530851640";
  const presetMessage = encodeURIComponent("Hi, I want to check today's fare.");

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenFarePopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000); // 4 seconds delay as requested

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenFarePopup", "true");
  };

  const handleCTA = () => {
    sessionStorage.setItem("hasSeenFarePopup", "true");
    setIsOpen(false);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${presetMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60 font-sans"
          id="fare-popup-wrapper"
        >
          {/* Overlay dismissal */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Luxury Card Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-lg bg-zinc-950/90 border border-[#D4AF37]/35 rounded-[24px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(212,175,55,0.25)] p-6 sm:p-8 flex flex-col pointer-events-auto"
            id="fare-popup-card"
          >
            {/* Absolute Ambient Glow in background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Glowing top line accent */}
            <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent shadow-[0_0_12px_rgba(255,215,0,0.4)]" />

            {/* Close Button element */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-[#FFD700] hover:bg-white/5 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Dismiss Offer"
              id="close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge Indicator */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[11px] sm:text-xs font-mono font-black text-[#FFD700] tracking-wider uppercase animate-pulse">
                🔥 LIMITED TIME OFFER
              </span>
            </div>

            {/* Heading Section */}
            <div className="text-center mb-6">
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                💰 Special Fare Available Today
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-sm mx-auto font-medium">
                Check today's best available outstation & airport fare before rates change.
              </p>
            </div>

            {/* Premium Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-3" />

            {/* Benefits Row Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 my-2" id="popup-features">
              {[
                "Instant Fare Check",
                "Live Availability Status",
                "Best Available Pricing",
                "No Booking Required"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-white/[0.03] border border-white/5 rounded-xl">
                  <span className="text-emerald-400 text-sm shrink-0">✅</span>
                  <span className="text-zinc-300 font-bold text-[11px] sm:text-xs tracking-tight line-clamp-1">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mini Urgency section */}
            <div className="bg-gradient-to-r from-amber-500/5 to-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-xl p-3.5 mt-4 text-center relative overflow-hidden">
              <span className="absolute top-1/2 left-2 -translate-y-1/2 text-lg opacity-25">⏳</span>
              <div className="text-[11px] sm:text-xs text-zinc-300 font-bold leading-normal">
                <span className="text-[#FFD700] font-black mr-1 uppercase font-mono tracking-wider">⏳ Limited Availability</span>
                Today's fare and promo rates may change based on vehicle demand. Check now before prices update.
              </div>
            </div>

            {/* Conversational Psychology Prompt */}
            <div className="text-center text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-wider mt-4">
              ⭐ Trusted By Travelers Across Gujarat
            </div>

            {/* Large Interactive Pulsing CTA */}
            <div className="mt-5 relative group">
              {/* Outer pulsing ring aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-65 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <button
                onClick={handleCTA}
                className="relative w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-[#25D366] to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] active:scale-[0.98] transition-all duration-300 rounded-2xl flex items-center justify-center gap-3 select-none"
                id="popup-main-cta"
              >
                {/* Embedded floating pulsing operator chat head */}
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                
                <span className="text-white text-base font-black tracking-widest drop-shadow-md">🟢 CHECK MY FARE</span>
                
                <MessageSquare className="w-5 h-5 shrink-0 fill-white/10" />
              </button>
            </div>

            {/* Micro dismiss label for psychological comfort */}
            <button 
              onClick={handleClose}
              className="mt-3.5 mx-auto text-[10px] text-zinc-500 hover:text-zinc-300 font-mono hover:underline tracking-wider cursor-pointer"
            >
              No thanks, I'll pay full rate later
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
