import React from "react";
import { Compass, Clock, MapPin, Milestone, ArrowRightLeft, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { POPULAR_ROUTES } from "../data";

export default function RoutesWidget() {
  const routes = POPULAR_ROUTES;

  const handleRouteBooking = (routeId: string) => {
    // Smooth scroll back up to the booking/calculator element
    const calcElement = document.getElementById("booking-calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="routes" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute right-0 bottom-0 w-80 h-80 gold-glow -z-10 bg-radial pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFD700] uppercase">
              🗺️ GUJARAT TOURISM OUTSTATIONS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Popular High-Converting <br className="hidden sm:inline" />
            <span className="text-[#FFD700]">Tourist & Business Highway Routes</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Pristine outstation journeys with vetted rest-stops. Select your routes below to view pricing estimates and recommended hygiene-first stops for senior travelers.
          </p>
        </div>

        {/* 3x2 Grid containing outstation cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {routes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-[#FFD700]/20 group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Source & Destination Display Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#FFD700]/10 text-[#FFD700] rounded-lg">
                      <Milestone className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-white group-hover:text-[#FFD700] transition-colors">
                        {route.destination}
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-wider">FROM: {route.source}</p>
                    </div>
                  </div>

                  {/* Route indicators like hours & km */}
                  <div className="flex items-center gap-3 bg-zinc-950 border border-white/5 rounded-xl px-3 py-1.5 font-mono text-[11px] font-bold text-zinc-400">
                    <span className="flex items-center gap-1 text-zinc-300">📏 {route.distanceKm} Km</span>
                    <span className="text-zinc-650">|</span>
                    <span className="flex items-center gap-1 text-[#FFD700]">⏱️ {route.durationHours} Hrs</span>
                  </div>
                </div>

                {/* Comfort note italic */}
                <p className="my-4 text-xs sm:text-sm text-zinc-400 italic font-medium">
                  💡 {route.comfortNote}
                </p>

                {/* Sideline Recommended Stops to build absolute tourist reliability */}
                <div className="my-4 p-4 bg-zinc-950/60 border border-white/5 rounded-xl space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-widest font-mono text-zinc-500 block">Recommended Tourist Stops on Way</span>
                  <div className="flex flex-wrap gap-1.5">
                    {route.sightseeingStopovers.map((stop, i) => (
                      <span key={i} className="px-2 py-1 bg-zinc-900 border border-white/5 text-[10px] text-zinc-350 rounded-md font-medium">
                        📍 {stop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subheading tag detailing best fit */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] rounded font-mono">
                    Ideal For
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold">{route.recommendedFor}</span>
                </div>
              </div>

              {/* Real and specific transparent pricing table for this route */}
              <div className="space-y-4">
                <div className="space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-mono">ALL-INCLUSIVE ESTIMATED DIRECT RATES</div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {/* Sedan */}
                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-center">
                      <span className="text-[10px] text-zinc-500 block mb-0.5 uppercase font-bold">Sedan (Dzire)</span>
                      <span className="font-mono text-[13px] sm:text-base font-black text-white">₹{route.sedanEstimate}*</span>
                      <span className="text-[8px] text-zinc-650 block mt-0.5 font-mono">One-way base</span>
                    </div>

                    {/* SUV */}
                    <div className="p-3 bg-zinc-950 border border-[#D4AF37]/20 rounded-xl text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-[#FFD700] text-[8px] font-mono font-bold text-black py-0.5 px-1 uppercase tracking-tighter">7-Seater</div>
                      <span className="text-[10px] text-zinc-500 block mb-0.5 uppercase font-bold">SUV (Ertiga)</span>
                      <span className="font-mono text-[13px] sm:text-base font-black text-[#FFD700]">₹{route.suvEstimate}*</span>
                      <span className="text-[8px] text-zinc-650 block mt-0.5 font-mono">One-way base</span>
                    </div>

                    {/* Innova Premium */}
                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-center">
                      <span className="text-[10px] text-zinc-500 block mb-0.5 uppercase font-bold">Crysta (VIP)</span>
                      <span className="font-mono text-[13px] sm:text-base font-black text-white">₹{route.crystaEstimate}*</span>
                      <span className="text-[8px] text-zinc-650 block mt-0.5 font-mono">One-way base</span>
                    </div>
                  </div>
                </div>

                {/* Push Route selection to top calculator */}
                <button
                  onClick={() => handleRouteBooking(route.id)}
                  className="w-full py-3 bg-zinc-950 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] border border-white/10 hover:border-[#FFD700] text-zinc-350 hover:text-black font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Choose & Lock This Route Fare 🚖</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Warning footnote for outstation tariffs */}
        <p className="text-center text-zinc-550 text-[10px] mt-8 leading-relaxed italic">
          * Fares represent approximate all-inclusive base rates starting from AMD Airport Arrivals, excluding sudden government highway parking. Drivers check and approve real route maps prior to departure. Zero secret night travel premiums apply.
        </p>

      </div>
    </section>
  );
}
