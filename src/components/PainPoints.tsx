import React from "react";
import { AlertCircle, CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { PAIN_POINTS } from "../data";

export default function PainPoints() {
  const data = PAIN_POINTS;

  return (
    <section className="py-20 bg-[#0d0e10] relative overflow-hidden border-t border-b border-zinc-900">
      {/* Subtle overlay glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 gold-glow -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
              ⚠️ ROAD TRIP WARNING
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Traditional Airport Taxis <span className="text-red-500">❌</span> vs. <br className="hidden sm:inline" />
            Shreeji Premium Comfort <span className="text-emerald-500">✅</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Booking can be a lottery at airport arrivals. Don&apos;t compromise your family&apos;s holy pilgrimage or important business journey. Compare the realities below.
          </p>
        </div>

        {/* Side-by-Side Cards displaying contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PROBLEM SIDE: Normal Taxi Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 bg-zinc-950/40 border border-red-500/15 rounded-2xl relative overflow-hidden"
          >
            {/* Soft decorative background red circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-red-500/10 text-red-500 rounded-lg">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-zinc-150">Normal Airport Cabs Realities</h3>
                <p className="text-xs text-red-400 font-medium">Why family road trips fail at arrivals</p>
              </div>
            </div>

            <div className="space-y-6">
              {data.problems.map((prob, k) => (
                <div key={k} className="flex gap-4">
                  <span className="flex-shrink-0 text-red-500 text-sm mt-1 font-mono font-bold">0{k + 1}.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
                      {prob.title}
                      <AlertCircle className="w-3.5 h-3.5 text-zinc-600 inline-block" />
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">
                      {prob.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Negative outcome text badge */}
            <div className="mt-8 p-4 bg-red-500/5 border border-red-500/10 rounded-xl text-center">
              <p className="text-xs text-red-400 italic">
                “Tired families are often forced to haggle under heat, getting poor-quality cars, leading to exhaustion before reaching sacred sites.”
              </p>
            </div>
          </motion.div>

          {/* UTTER COMFORT SOLUTION: Shreeji Cab Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-950/80 border border-amber-500/20 rounded-2xl relative overflow-hidden shadow-xl"
          >
            {/* Soft decorative golden glov overlay */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Shreeji Premium Standard</h3>
                <p className="text-xs text-emerald-400 font-medium">Voted 100% stress-free travel by 300+ NRIs</p>
              </div>
            </div>

            <div className="space-y-6">
              {data.solutions.map((sol, k) => (
                <div key={k} className="flex gap-4">
                  <span className="flex-shrink-0 text-amber-500 text-sm mt-1 font-mono font-bold">0{k + 1}.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                      {sol.title}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline-block" />
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-350 mt-1 leading-relaxed">
                      {sol.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct transition CTA connection */}
            <div className="mt-8 p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex items-center justify-between gap-3">
              <p className="text-xs text-zinc-300">
                Compare fares instantly and locked your customized itinerary rate quote.
              </p>
              <a
                href="#booking-calculator"
                className="py-1.5 px-3 bg-amber-500 text-black text-xs font-bold rounded-md hover:bg-amber-600 transition-colors shrink-0 flex items-center gap-1"
              >
                <span>Calculate 🚕</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
