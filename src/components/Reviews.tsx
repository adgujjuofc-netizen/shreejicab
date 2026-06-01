import React from "react";
import { Star, Quote, ShieldAlert, BadgeCheck, Check } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Reviews() {
  const reviews = TESTIMONIALS;

  return (
    <section id="reviews" className="py-20 bg-[#0c0d0e] relative overflow-hidden border-b border-zinc-900">
      {/* Background glow flares */}
      <div className="absolute right-10 top-1/4 w-80 h-80 gold-glow -z-10 bg-radial"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              💬 REAL TRAVELER EXPERIENCES
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Hear From Our Happy <br className="hidden sm:inline" />
            <span className="text-amber-500">Families, tourists & business clients</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Real names. Real ratings. Verified journeys booked straight from SVPI arrivals to pilgrimages across Dwarka, Somnath, and Vadodara.
          </p>
        </div>

        {/* 2x2 Testimonial reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 hover:border-amber-500/15 duration-300 relative flex flex-col justify-between"
            >
              {/* Giant quote background asset */}
              <Quote className="absolute right-6 top-6 w-14 h-14 text-white/2 select-none pointer-events-none" />

              <div className="space-y-4">
                {/* Star rating bar and trip details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 bg-zinc-950 border border-zinc-900 rounded-md text-[10px] text-zinc-400 font-mono">
                    🎫 {rev.routeTaken}
                  </span>
                </div>

                {/* Main commentary text */}
                <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed pt-2">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Author Profile card bottom alignment */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  {/* Decorative simple rounded letters profile symbol */}
                  <div className={`w-10 h-10 ${rev.avatarColor} text-black font-extrabold flex items-center justify-center rounded-full text-sm`}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white flex items-center gap-1">
                      {rev.name}
                      <BadgeCheck className="w-4 h-4 text-emerald-500 fill-black inline-block" />
                    </h4>
                    <p className="text-[10px] text-zinc-500">Traveler from {rev.location} • {rev.date}</p>
                  </div>
                </div>

                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] uppercase font-mono tracking-wider font-semibold rounded-md">
                  {rev.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Trust Policy Box: live flights delays insurance */}
        <div className="mt-16 bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded text-[10px] font-mono font-bold">
              🛡️ SVPI AIRGROUND PRE-ARRANGED INSURANCE
            </div>
            <h3 className="font-display font-bold text-lg text-white">Live SVPI Airport Delayed-Flight Waiver</h3>
            <p className="text-xs text-zinc-400 leading-normal">
              Unlike traditional taxi booths at terminal exits who charge waiting premiums if flights are delayed, Shreeji automatically syncs vehicle arrivals with real airline telemetry. We provide up to **45 minutes of free terminal standby** from boarding time. Complete reassurance!
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-zinc-905 border border-zinc-900 rounded-xl p-4">
            <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-500 text-sm">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono block">Terminal delay standby</span>
              <span className="text-sm font-black text-white">₹0 FREE Extra charges</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
