import React from "react";
import { ShieldCheck, Tags, HeartHandshake, Headphones, Trophy, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function TrustIndicators() {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: "Your Family's Safety Comes First",
      desc: "Our drivers are rigorously police-verified, strictly vetted, and personally trained. No over-speeding, no rough behavior—just complete respect, care, and safety for your parents and children."
    },
    {
      icon: <Tags className="w-8 h-8 text-amber-500" />,
      title: "Spotless Cab Every Time",
      desc: "Pristine, freshly sanitized premium vehicles with refreshing fragrance and powerful dual blower climate control. We inspect each car before it departs for your pickup."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-amber-500" />,
      title: "Real Humans Answer Within Minutes",
      desc: "Skip automated robotic chatbots. Direct connection with the owners on WhatsApp or Call within 2 minutes. We track your flight, manage delay times, and guide you with real human empathy."
    },
    {
      icon: <Headphones className="w-8 h-8 text-amber-500" />,
      title: "No Hidden Charges, Ever",
      desc: "What you see is exactly what you pay. Transparent pricing including driver allowance and up-front toll structures. No last-minute surprises or awkward arguments at your destination."
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-[#0c0d0e] relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 gold-glow -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
              🏆 OUR UNCOMPROMISING STANDARD
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Designed for Travelers Who Value <br className="hidden sm:inline" />
            <span className="text-amber-500">Punctuality, Honor & Absolute Safety</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            We are not just another taxi listing. Shreeji is a premium private chauffeur collective focusing on high-level hospitality for family pilgrims and business executives landing in Gujarat.
          </p>
        </div>

        {/* 4-Column Grid displaying critical trust factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-amber-500/30 transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl inline-block mb-5 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Instant Trust stats strip */}
        <div className="mt-16 bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500 rounded-full text-black font-bold text-xl">
              🌟
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">4.9/5 Google Rated Operator</h3>
              <p className="text-xs text-zinc-400">Voted Gujarat&apos;s most reliable airport outstation cabin brand by out-of-state travelers.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-center justify-center md:justify-end">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-amber-500">12,000+</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">Trips Vetted</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-amber-500">100%</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">On-Time Pickups</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-amber-500">45+ Min</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">Free Flight Delay Wait</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
