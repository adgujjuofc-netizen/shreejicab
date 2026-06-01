import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import FareCalculator from "./FareCalculator";
import SleekCar from "./SleekCar";

export default function Hero() {
  const WHATSAPP_NUMBER = "+919825447781";

  // Use the custom generated airport luxury taxi transfer scene image
  const bgImage = "/src/assets/images/premium_cab_hero_1780304999047.png";

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-10 lg:py-16 overflow-hidden">
      {/* Background Graphic Asset with Dark Glass overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Ahmedabad Airport Premium Cab Transfer Scene"
          className="w-full h-full object-cover object-center opacity-25 select-none scale-[1.03] filter brightness-[0.6] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
      </div>

      {/* Floating subtle ambient decor lights */}
      <div className="absolute top-20 left-10 w-96 h-96 gold-glow -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute right-10 bottom-20 w-80 h-80 gold-glow -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copywriting & Core Trust Metrics */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Meta Ad Headline badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
                👑 #1 Rated SVPI Airport Prepaid Cabs Ahmedabad
              </span>
            </motion.div>

            {/* Cinematic High Impact Indian Bilingual Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white tracking-tight"
              >
                Ahmedabad Airport <br className="hidden sm:inline" />
                पर उतर रहे हैं? <br />
                <span className="text-[#FFD700] italic">Taxi की Tension हमें छोड़िये! 🚖</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl font-normal leading-relaxed"
              >
                No more overcharging, zero long cues, and absolute family safety. Book pristine <b>Toyota Crysta, Ertiga,</b> or spacious <b>Sedans</b> with verified multilingual chauffeurs starting directly from Sardar Vallabhbhai Patel International Arrivals.
              </motion.p>
            </div>

            {/* Quick Feature Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3">
                <span className="text-lg">👨‍✈️</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Elite Drivers</h4>
                  <p className="text-[10px] text-gray-400">Hindi / Multilingual</p>
                </div>
              </div>
              <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3">
                <span className="text-lg">🛡️</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Family Vested</h4>
                  <p className="text-[10px] text-gray-400">100% Locked Safety</p>
                </div>
              </div>
              <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-3">
                <span className="text-lg">💰</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Flat Pricing</h4>
                  <p className="text-[10px] text-gray-400">No Hidden Hikes</p>
                </div>
              </div>
            </motion.div>

            {/* Luxurious Sleek Interactive Chauffeur Carriage */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full pt-1"
            >
              <SleekCar />
            </motion.div>

            {/* Direct Instant Action Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 items-center"
            >
              <a
                href="#booking-calculator"
                className="inline-flex justify-center items-center py-4 px-8 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#1da851] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all transform hover:scale-[1.03] gap-2 w-full sm:w-auto"
              >
                <span>📲 Compare Instant Fares Below</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shreeji%20Cab,%20I%20want%20to%20get%20rates%20right%20now!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center text-sm font-semibold uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/40 pb-1 hover:border-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                💬 Compare Price List via Chat
              </a>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <FareCalculator />
          </motion.div>

        </div>

        {/* Scroll indicator banner spacer */}
        <div className="flex justify-center mt-12 animate-bounce">
          <a href="#advantages" className="p-2 bg-zinc-900 border border-zinc-850 rounded-full text-zinc-500 hover:text-amber-500 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
