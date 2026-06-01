import React from "react";
import { Star, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { DRIVERS } from "../data";

export default function DriverProfiles() {
  const drivers = DRIVERS;

  return (
    <section className="py-20 bg-[#0d0e10] relative overflow-hidden border-t border-b border-zinc-900">
      <div className="absolute top-1/3 left-10 w-72 h-72 gold-glow -z-10 bg-radial"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content Area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
              🛡️ ELITE VERIFIED CHAUFFEURS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Meet Our Top-Vetted <br className="hidden sm:inline" />
            <span className="text-amber-500">Hindi-Speaking Family Drivers</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Professional demeanor, verified driving records, and local route expertise. Our drivers act as helpful regional guides rather than just taxi chauffeurs.
          </p>
        </div>

        {/* 3 Driver profile cards display row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drivers.map((drv, idx) => (
            <motion.div
              key={drv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-amber-500/15 group transition-all duration-300 relative text-center"
            >
              {/* Profile badge */}
              <span className="absolute top-4 right-4 text-[9px] font-mono font-bold py-1 px-2 text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">
                {drv.badge}
              </span>

              {/* Pilot Circle Image */}
              <div className="relative w-24 h-24 mx-auto mb-5 rounded-full p-1 bg-gradient-to-tr from-amber-500/30 to-transparent group-hover:from-amber-400 group-hover:to-amber-600 transition-colors duration-500">
                <img
                  src={drv.photo}
                  alt={drv.name}
                  className="w-full h-full object-cover rounded-full filter grayscale-[20%] group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black border-2 border-zinc-950 p-1 rounded-full text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Driver name & Bio */}
              <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-amber-500 transition-colors">
                {drv.name}
              </h3>
              
              <div className="flex items-center justify-center gap-1 text-sm font-semibold text-amber-500 font-mono mb-4">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>{drv.rating} Rating</span>
                <span className="text-zinc-600 font-sans font-normal">•</span>
                <span className="text-zinc-400 text-xs font-sans font-normal">{drv.experienceYears} Years Exp</span>
              </div>

              {/* Specs & Capabilities blocks */}
              <div className="space-y-3.5 pt-3 border-t border-white/5 text-xs text-zinc-450">
                
                {/* Completed Trips */}
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Highway Trips Vetted</span>
                  <span className="font-mono font-bold text-white mb-0.5">{drv.tripsCompleted}+ Travels</span>
                </div>

                {/* Fluent languages spoken to clear boundary block */}
                <div className="flex flex-col items-start gap-1 pb-1">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold">Languages Fluent</span>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {drv.languages.map((lang, lidx) => (
                      <span key={lidx} className="px-2 py-0.5 bg-zinc-950/80 border border-zinc-900 rounded font-medium text-[10px] text-zinc-350">
                        💬 {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supported vehicles */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold">Assigned Vehicles</span>
                  <span className="text-zinc-300 font-semibold">{drv.vehiclesSupported.join(" • ")}</span>
                </div>

              </div>

              {/* Short emotional assurance trigger */}
              <div className="mt-5 p-3.5 bg-zinc-950/40 rounded-xl border border-zinc-900 flex items-center justify-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[10px] text-zinc-405 leading-normal text-left">
                  Trained for elder comfort & child travel assistance.
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
