import React from "react";
import { Users, ShieldCheck, Fuel, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export interface PricingVehicle {
  id: string;
  name: string;
  category: "Premium Sedan" | "Family SUV" | "Ultra Luxury MPV";
  pricePerKmOneWay: number;
  pricePerKmRound: number;
  seats: number;
  driverAllowance: number;
  minKmPerDay: number;
  tollInfo: string;
  bestUse: string;
  image: string;
  tagline: string;
}

const PRICING_VEHICLES: PricingVehicle[] = [
  {
    id: "dzire",
    name: "Suzuki Swift Dzire",
    category: "Premium Sedan",
    pricePerKmOneWay: 15,
    pricePerKmRound: 11,
    seats: 4,
    driverAllowance: 300,
    minKmPerDay: 300,
    tollInfo: "Tolls & Parking Extra",
    bestUse: "Efficient & rapid outstation travel or airport transfer",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/2017_Suzuki_Dzire_VXI.jpg",
    tagline: "Comfortable budget-friendly sedan, perfect for corporate or couples"
  },
  {
    id: "aura",
    name: "Hyundai Aura Executive",
    category: "Premium Sedan",
    pricePerKmOneWay: 15,
    pricePerKmRound: 11,
    seats: 4,
    driverAllowance: 300,
    minKmPerDay: 300,
    tollInfo: "Tolls & Parking Extra",
    bestUse: "Pristine styling & spacious rear seating legroom",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/2020_Hyundai_Aura_S.jpg",
    tagline: "Sleek modern aesthetics, perfect for city-to-city transfers"
  },
  {
    id: "ertiga",
    name: "Suzuki Ertiga Smart SUV",
    category: "Family SUV",
    pricePerKmOneWay: 18,
    pricePerKmRound: 13,
    seats: 6,
    driverAllowance: 300,
    minKmPerDay: 300,
    tollInfo: "Tolls & Parking Extra",
    bestUse: "Balanced budget family outstation pilgrimages",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/2019_Suzuki_Ertiga_GL_1.5.jpg",
    tagline: "Unbeatable cabin spaciousness & dual blower climate comfort"
  },
  {
    id: "rumion",
    name: "Toyota Rumion Neo",
    category: "Family SUV",
    pricePerKmOneWay: 18,
    pricePerKmRound: 13,
    seats: 6,
    driverAllowance: 300,
    minKmPerDay: 300,
    tollInfo: "Tolls & Parking Extra",
    bestUse: "Premium executive MPV comfort on long journeys",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2021_Toyota_Rumion_1.5_TX_%28South_Africa%29.jpg",
    tagline: "Toyota design language, robust performance & supreme luxury suspension"
  },
  {
    id: "crysta",
    name: "Toyota Innova Crysta VIP",
    category: "Ultra Luxury MPV",
    pricePerKmOneWay: 22,
    pricePerKmRound: 18,
    seats: 7,
    driverAllowance: 400,
    minKmPerDay: 300,
    tollInfo: "Tolls & Parking Extra",
    bestUse: "NRI VIP greetings, elite highway tourist routes & premium luxury",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/2016_Toyota_Innova_Crysta_2.4_ZX_%28India%29_front_view.jpg",
    tagline: "The gold-standard champion of absolute travel comfort & captains chairs"
  }
];

export default function PremiumPricing() {
  const handleCheckFare = (vehicleId: string) => {
    // Dispatch a custom event to notify the Live Fare Calculator of selection
    window.dispatchEvent(
      new CustomEvent("select-premium-vehicle", { detail: { vehicleId } })
    );

    // Scroll smoothly to booking-calculator
    const calcElement = document.getElementById("booking-calculator");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="pricing-cards" className="py-20 bg-[#0c0e12] relative overflow-hidden border-b border-zinc-900">
      {/* Decorative ambient glowing grids */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#FFD700]/5 to-transparent rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block mimicking modern travel startups */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFD700] uppercase">
              ✨ Dynamic Fleet Price List
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Elite <span className="text-[#FFD700]">Chauffeur Carriage Lineup</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Compare premium per-kilometer rates transparently. Flat tariffs. Absolutely zero hidden list pricing. Fully inclusive of hygiene kit & crisp A/C air circulation.
          </p>
        </div>

        {/* 5-Vehicle Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {PRICING_VEHICLES.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px -12px rgba(212,175,55,0.15)",
                borderColor: "rgba(255,215,0,0.3)" 
              }}
              className="flex flex-col justify-between bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/5 relative overflow-hidden group transition-all duration-300"
            >
              {/* Premium Glow effect behind cards */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                {/* Visual Image Container with custom height aspect ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950/60 border-b border-white/5">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 filter brightness-90 saturate-[0.85] group-hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Overlays */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase py-1 px-2.5 bg-black/80 backdrop-blur-md rounded-md text-zinc-300 border border-white/10 font-mono">
                    {car.category}
                  </span>
                  
                  {/* Per KM pricing tag mimicking Uber/Premium */}
                  <div className="absolute bottom-3 right-3 py-1.5 px-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-mono font-black rounded-xl shadow-lg border border-[#D4AF37] uppercase tracking-wider flex flex-col items-center leading-none justify-center">
                    <div className="text-[10px] font-black">₹{car.pricePerKmOneWay}/km <span className="text-[7.5px] font-medium opacity-85">(One Way)</span></div>
                    <div className="w-full h-[1px] bg-black/10 my-1"></div>
                    <div className="text-[9px] font-bold">₹{car.pricePerKmRound}/km <span className="text-[7.5px] font-medium opacity-85">(Round)</span></div>
                  </div>
                </div>

                {/* Technical Specifications Area */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-display font-black text-base text-white tracking-tight group-hover:text-[#FFD700] transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-[10px] text-zinc-500 font-medium mt-0.5 leading-relaxed truncate">
                      {car.tagline}
                    </p>
                  </div>

                  {/* Core specifications parameters */}
                  <div className="grid grid-cols-2 gap-2 bg-black/40 border border-white/5 rounded-xl p-2.5 text-center font-mono text-[10px]">
                    <div className="border-r border-white/5 flex flex-col justify-center items-center">
                      <span className="text-zinc-550 uppercase tracking-widest text-[8px] mb-0.5">Capacity</span>
                      <span className="text-white font-extrabold flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#FFD700]" /> {car.seats} PAX
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-zinc-550 uppercase tracking-widest text-[8px] mb-0.5">Daily Min</span>
                      <span className="text-neutral-220 font-extrabold flex items-center gap-1 text-zinc-350">
                        <Fuel className="w-3.5 h-3.5 text-[#FFD700]" /> {car.minKmPerDay} KM
                      </span>
                    </div>
                  </div>

                  {/* Pricing details allowance */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <span className="text-zinc-400">Driver Allowance:</span>
                      <span className="font-bold text-white font-mono">₹{car.driverAllowance}/day</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <span className="text-zinc-400">Tolls & Parking:</span>
                      <span className="text-[11px] text-[#FFD700] font-bold font-mono uppercase tracking-tight">{car.tollInfo}</span>
                    </div>
                  </div>

                  {/* Best use scenarios */}
                  <div className="text-[10px] bg-[#D4AF37]/5 border border-[#D4AF37]/10 p-2.5 rounded-xl text-zinc-350 leading-relaxed text-left">
                    <span className="font-bold text-[#FFD700] block uppercase tracking-wider mb-0.5 font-mono text-[9px]">💡 Suggested For</span>
                    {car.bestUse}
                  </div>
                </div>
              </div>

              {/* Check fare trigger button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleCheckFare(car.id)}
                  className="w-full py-3 bg-zinc-900 border border-white/5 hover:border-transparent hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-black text-zinc-300 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Check Fare</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick assurance trust triggers at the footer of grid */}
        <div className="mt-12 text-center flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] text-zinc-400">
          <span className="flex items-center gap-1.5 leading-none">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" /> <b>Best Price Guarantee</b> (We match any reputable agency tariff)
          </span>
          <span className="flex items-center gap-1.5 leading-none">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" /> <b>Compare Before Booking</b> (Dynamic updates)
          </span>
          <span className="flex items-center gap-1.5 leading-none">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" /> <b>24/7 Professional WhatsApp Support</b>
          </span>
        </div>

      </div>
    </section>
  );
}
