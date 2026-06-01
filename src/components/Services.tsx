import React from "react";
import { Plane, Compass, RotateCcw, Building2, MapPin, Sparkles, MoveRight } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const serviceList = [
    {
      icon: <Plane className="w-6 h-6 text-amber-500" />,
      title: "Airport Pickup & Drop",
      desc: "Live flight-delayed tracking with chauffeur awaiting you with a custom name-board at SVPI Terminal. Free luggage hauling included.",
      badge: "24x7 Guaranteed"
    },
    {
      icon: <MoveRight className="w-6 h-6 text-amber-500" />,
      title: "One-Way Outstation Taxi",
      desc: "Traveling from Ahmedabad to Udaipur, Somnath, or Dwarka? Pay strictly for your drop-leg. No empty return-leg charges.",
      badge: "Most Popular"
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-amber-500" />,
      title: "Outstation Round-Trip",
      desc: "Our drivers stay with you for multi-day Saurashtra and Gujarat tours. High-end outstation advice on temple darshan timelines.",
      badge: "Best Value"
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: "In-City Local Sightseeing",
      desc: "Flexible, comfortable hourly rental packages (4h/40k, 8h/80k, or more) to tour Sabarmati Ashram, Adalaj Stepwell or luxury shopping.",
      badge: "Flexible Hourly"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Family Pilgrim Special",
      desc: "Thoughtfully optimized road trip paces for children & seniors. Vetted rest points on Dwarka-Somal-SOU routes with pristine toilets.",
      badge: "Peace of Mind"
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-500" />,
      title: "Corporate & NRI Chauffeurs",
      desc: "Elite quiet cabins, pristine dark SUVs (Toyota Innova Crysta), prompt timings & formal English/Hindi speaking drivers.",
      badge: "Premium Class"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0c0d0e] relative overflow-hidden">
      {/* Decorative ambient glowing overlay */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 gold-glow -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
              💼 OUR ELITE TRAVEL SOLUTIONS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Comprehensive VIP Fleet Chauffeur Services <br className="hidden sm:inline" />
            Designed For <span className="text-amber-500">Every Kind of Gujarat Visit</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Enjoy premium leather interiors, high climate control comfort, complimentary bottled mineral water, and expert road insights standard in every vehicle.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((srv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-amber-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-zinc-900 border border-zinc-850 text-amber-500 rounded-xl group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    {srv.icon}
                  </div>
                  <span className="px-2.5 py-1- text-[9px] font-bold uppercase tracking-widest bg-zinc-950 border border-zinc-900 group-hover:border-amber-500/20 text-zinc-400 group-hover:text-amber-500 rounded-full transition-all duration-300">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              {/* Booking CTA trigger */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-amber-500 transition-all cursor-pointer">
                <a href="#booking-calculator" className="flex items-center gap-1">
                  <span>Get fare pricing</span>
                  <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Airport Flight Notice Policy Block */}
        <div className="mt-12 bg-gradient-to-r from-[#ca8a04]/20 to-transparent border-l-4 border-[#ca8a04] p-5 rounded-r-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
              ✈️ Flight delayed? No worries! Driver tracks flight numbers automatically
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Simply input your arrival flight details. We track delay cycles in real-time. Driver stays at terminal arrivals with names board without billing your delay minutes.
            </p>
          </div>
          <a
            href="#booking-calculator"
            className="py-2 px-4 bg-amber-500 hover:bg-amber-600 text-black text-xs font-extrabold rounded-lg shrink-0 transition-colors"
          >
            Input Flight & Book
          </a>
        </div>

      </div>
    </section>
  );
}
