import React, { useState } from "react";
import { Milestone, Flag, ShieldCheck, Route, ArrowRight, Table } from "lucide-react";
import { motion } from "motion/react";

interface RouteComparison {
  id: string;
  source: string;
  destination: string;
  distanceKm: number;
  durationHours: string;
  seater5Price: number;
  seater7Price: number;
  isCheapest?: boolean;
  isPopular?: boolean;
  transitNote: string;
}

const COMPARISON_ROUTES: RouteComparison[] = [
  {
    id: "route-hirasar",
    source: "Ahmedabad SVPI Airport",
    destination: "Hirasar Airport (New Rajkot Int.)",
    distanceKm: 180,
    durationHours: "3.0 Hrs",
    seater5Price: 2199,
    seater7Price: 2899,
    isCheapest: true,
    transitNote: "Direct transit through Saurashtra Express toll road."
  },
  {
    id: "route-rajkot",
    source: "Ahmedabad SVPI Airport",
    destination: "Rajkot City Corporate Hub",
    distanceKm: 220,
    durationHours: "4.0 Hrs",
    seater5Price: 2690,
    seater7Price: 3490,
    isPopular: true,
    transitNote: "Pristine state highway with Limbdi food court stopovers."
  },
  {
    id: "route-vadodara",
    source: "Ahmedabad SVPI Airport",
    destination: "Vadodara / Alkapuri Commercial",
    distanceKm: 115,
    durationHours: "2.0 Hrs",
    seater5Price: 1890,
    seater7Price: 2590,
    transitNote: "Premium NE-1 expressway route; highly optimized transfers."
  },
  {
    id: "route-local-amd",
    source: "Ahmedabad City Airport",
    destination: "Ahmedabad Full Day (Local Tour)",
    distanceKm: 80,
    durationHours: "8.0 Hrs",
    seater5Price: 1590,
    seater7Price: 2490,
    transitNote: "Best for NRI shopping, local temple pilgrimages & weddings."
  }
];

export default function RoutePricingTable() {
  const [selectedRoute, setSelectedRoute] = useState<string>("route-hirasar");

  const handleBookRoute = (destName: string, vehicleType: "sedan" | "family_suv") => {
    // Generate a dispatch select-route event to prefill the calculator coordinates!
    window.dispatchEvent(
      new CustomEvent("select-comparative-route", { 
        detail: { 
          destination: destName, 
          vehicleType: vehicleType 
        } 
      })
    );

    // Scroll smoothly to booking-calculator
    const calcElement = document.getElementById("booking-calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="route-comparison-table" className="py-20 bg-[#0a0a0d] relative overflow-hidden">
      {/* Radiant dynamic spotlight */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
              <Table className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFD700] uppercase">
                ⚙️ MULTI-VEHICLE FARE SHEET
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Compare Flat Tariffs <br />
              Across <span className="text-[#FFD700]">Popular City Routes</span>
            </h2>
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="text-xs text-zinc-400 font-medium">
              We operate standard daily corporate shuttle fleets and family carriages between Ahmedabad SVPI Terminal and Saurashtra business hubs. View pre-locked estimates below.
            </p>
          </div>
        </div>

        {/* Large Table Container with glassmorphism backdrop */}
        <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[700px]">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-white/5 bg-zinc-950/80">
                  <th className="py-5 px-6 font-display font-bold text-xs uppercase tracking-widest text-zinc-400">Routes & Specs</th>
                  <th className="py-5 px-6 font-display font-bold text-xs uppercase tracking-widest text-zinc-400">Avg. Commute</th>
                  <th className="py-5 px-6 font-display font-bold text-xs uppercase tracking-widest text-zinc-400 text-center">
                    🚘 5-Seater Rate <br />
                    <span className="text-[9px] text-[#FFD700] lowercase font-mono">Swift / Aura Sedan</span>
                  </th>
                  <th className="py-5 px-6 font-display font-bold text-xs uppercase tracking-widest text-zinc-400 text-center">
                    🚙 7-Seater Rate <br />
                    <span className="text-[9px] text-[#FFD700] lowercase font-mono">Ertiga / Rumion / Crysta</span>
                  </th>
                  <th className="py-5 px-6 font-display font-bold text-xs uppercase tracking-widest text-zinc-400 text-right">Instant Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-white/5">
                {COMPARISON_ROUTES.map((route) => (
                  <motion.tr
                    key={route.id}
                    onClick={() => setSelectedRoute(route.id)}
                    className={`transition-colors cursor-pointer ${
                      selectedRoute === route.id 
                        ? "bg-[#D4AF37]/5" 
                        : "hover:bg-zinc-900/40"
                    }`}
                  >
                    {/* Destination details and badges */}
                    <td className="py-6 px-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-zinc-900 border border-white/10 rounded-xl text-neutral-300">
                          <Milestone className="w-5 h-5 text-[#FFD700]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display font-black text-sm text-white group-hover:text-[#FFD700]">
                              {route.destination}
                            </span>
                            {route.isCheapest && (
                              <span className="py-0.5 px-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[8px] font-extrabold uppercase rounded-md tracking-wider">
                                💸 Best Budget Route
                              </span>
                            )}
                            {route.isPopular && (
                              <span className="py-0.5 px-2 bg-[#FFD700]/15 border border-[#FFD700]/30 text-[#FFD700] font-mono text-[8px] font-extrabold uppercase rounded-md tracking-wider">
                                🔥 Most Booked
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-zinc-500 font-mono block mt-0.5 uppercase tracking-wide">
                            From: {route.source}
                          </span>
                          <span className="text-[11px] text-zinc-400 italic block mt-1">
                            {route.transitNote}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Commute Indicators */}
                    <td className="py-6 px-6 font-mono text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-zinc-300 font-bold">
                          <span>📏 {route.distanceKm} Km d</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#FFD700] font-bold">
                          <span>⏱️ {route.durationHours}</span>
                        </div>
                      </div>
                    </td>

                    {/* 5 Seater rate with styling */}
                    <td className="py-6 px-6 text-center">
                      <div className="inline-block px-3 py-1.5 rounded-xl border border-white/5 bg-zinc-950/80">
                        <p className="font-mono font-black text-base text-zinc-100">₹{route.seater5Price}</p>
                        <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest -mt-0.5">Oneway Base</p>
                      </div>
                    </td>

                    {/* 7 Seater rate with styling */}
                    <td className="py-6 px-6 text-center">
                      <div className={`inline-block px-4 py-2 rounded-xl border ${
                        route.isCheapest 
                          ? "border-[#D4AF37] bg-[#D4AF37]/10" 
                          : "border-white/5 bg-zinc-950/80"
                      }`}>
                        <p className="font-mono font-black text-base text-white">₹{route.seater7Price}</p>
                        <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest -mt-0.5 font-bold">All-Inclusive</p>
                      </div>
                    </td>

                    {/* Active reservation links */}
                    <td className="py-6 px-6 text-right">
                      <div className="flex flex-col sm:flex-row gap-1.5 justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookRoute(route.destination, "sedan");
                          }}
                          className="py-1.5 px-3 bg-zinc-900 hover:bg-neutral-800 text-zinc-300 hover:text-white font-bold text-[10px] uppercase rounded-md border border-white/5 transition-colors cursor-pointer"
                        >
                          Book 5-Seat
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookRoute(route.destination, "family_suv");
                          }}
                          className="py-1.5 px-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:scale-105 transition-all text-black font-extrabold text-[10px] uppercase rounded-md shadow-md cursor-pointer"
                        >
                          Book 7-Seat
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Psychological micro reassurance flags */}
        <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex-wrap gap-4">
          <span>✓ Rates mentioned are estimated bases excluding sudden government toll gate taxes</span>
          <span className="text-[#FFD700] font-bold">✓ Standard luxury A/C included on all trips</span>
        </div>

      </div>
    </section>
  );
}
