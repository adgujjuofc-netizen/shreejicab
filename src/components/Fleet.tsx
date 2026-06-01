import React from "react";
import { Users, Briefcase, Ruler, Heart, Star, Check } from "lucide-react";
import { motion } from "motion/react";
import { VEHICLES } from "../data";

export default function Fleet() {
  const fleetList = VEHICLES;

  // Custom visual images matching each SUV/Sedan
  const vehicleImages: Record<string, string> = {
    sedan: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    ertiga: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
    crysta: "/src/assets/images/luxury_toyota_mpv_1780305020580.png", // generated Crysta image
    thar: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600"
  };

  const handleSelectVehicle = (vehicleId: string) => {
    // Scroll smoothly to calculator, setting state
    const calcElement = document.getElementById("booking-calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-[#0d0e10] relative overflow-hidden border-b border-zinc-900">
      {/* Background radial glows */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 gold-glow -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
              🚘 VEHICLE FLEET & RATES
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Spotless & Squeak-Free <br />
            Our Pristine <span className="text-amber-500">Chauffeur Carriage Lineup</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            We retire our cars early and maintain them with premium synthetic oil and complete upholstery detailing. Every cabin smells crisp, fresh and is fully air-conditioned.
          </p>
        </div>

        {/* 4-Vehicle Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {fleetList.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel flex flex-col justify-between overflow-hidden rounded-2xl border-white/5 hover:border-amber-500/20 group transition-all duration-300"
            >
              {/* Vehicle photo holder */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={vehicleImages[car.id]}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 filter brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status Float badge */}
                <span className={`absolute top-4 left-4 text-[10px] font-mono font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider ${
                  car.status === "Popular Choose"
                    ? "bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400"
                }`}>
                  {car.status}
                </span>

                {/* Rates overlay ribbon */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-between p-4">
                  <span className="text-zinc-200 text-xs uppercase font-semibold font-mono tracking-wider">BASE EST. RATE</span>
                  <div className="text-right">
                    <span className="text-white text-lg font-black font-display">₹{car.pricePerKm}/Km</span>
                    <span className="text-[10px] text-zinc-400 block -mt-1 font-mono">excluding tolls</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Specifications */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-500 transition-colors">
                      {car.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-900 border border-zinc-850 rounded-lg text-amber-500 uppercase font-mono tracking-wider">
                      {car.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 italic">
                    &ldquo;{car.tagline}&rdquo;
                  </p>
                </div>

                {/* Seat capacity & Luggage units specifications metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-2.5 bg-zinc-950/60 border border-zinc-900 rounded-xl text-center">
                    <Users className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Seats</span>
                    <span className="text-xs font-bold text-white font-mono">{car.seats} Passengers</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950/60 border border-zinc-900 rounded-xl text-center">
                    <Briefcase className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Luggage</span>
                    <span className="text-xs font-bold text-white font-mono">{car.luggage} Suitecases</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950/60 border border-zinc-900 rounded-xl text-center">
                    <Star className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">Est Airport</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">₹{car.approxAirportFare}</span>
                  </div>
                </div>

                {/* Feature Checkmarks List */}
                <div className="space-y-2.5 pt-2 border-t border-white/5">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-mono">Premium Cabin Amenities Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {car.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-zinc-350 truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Vehicle button */}
                <motion.button
                  whileHover={{ scale: 1.025, boxShadow: "0 0 20px rgba(212,175,55,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectVehicle(car.id)}
                  className="w-full py-3.5 bg-gradient-to-r from-zinc-900 to-black hover:from-[#D4AF37] hover:to-[#FFD700] text-zinc-200 hover:text-black border border-white/10 hover:border-transparent font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>📲 Get Instant Fare for This Car</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
