import React, { useState, useEffect } from "react";
import { Calculator, Calendar, Users, MapPin, Compass, ShieldCheck, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface VehicleConfig {
  id: string;
  name: string;
  pricePerKmOneWay: number;
  pricePerKmRound: number;
  driverAllowance: number;
}

const VEHICLES_CONFIG: Record<string, VehicleConfig> = {
  dzire: { id: "dzire", name: "Swift Dzire", pricePerKmOneWay: 15, pricePerKmRound: 11, driverAllowance: 300 },
  aura: { id: "aura", name: "Hyundai Aura", pricePerKmOneWay: 15, pricePerKmRound: 11, driverAllowance: 300 },
  ertiga: { id: "ertiga", name: "Suzuki Ertiga", pricePerKmOneWay: 18, pricePerKmRound: 13, driverAllowance: 300 },
  rumion: { id: "rumion", name: "Toyota Rumion", pricePerKmOneWay: 18, pricePerKmRound: 13, driverAllowance: 300 },
  crysta: { id: "crysta", name: "Innova Crysta", pricePerKmOneWay: 22, pricePerKmRound: 18, driverAllowance: 400 }
};

const POPULAR_SUGGESTIONS = [
  { label: "Ahmedabad Airport", val: "Ahmedabad Airport (AMD)" },
  { label: "Hirasar Airport", val: "Hirasar Airport (New Rajkot Int.)" },
  { label: "Rajkot City", val: "Rajkot City Hub" },
  { label: "Vadodara", val: "Vadodara Commercial Area" },
  { label: "Upleta", val: "Mandap road Jirapa plot Upleta" },
  { label: "Somnath", val: "Somnath Temple Premises" },
  { label: "Dwarka", val: "Dwarka Dham" }
];

export default function FareCalculator() {
  const [pickupCity, setPickupCity] = useState("Ahmedabad Airport (AMD)");
  const [destinationCity, setDestinationCity] = useState("Rajkot City Hub");
  const [distanceKm, setDistanceKm] = useState<number>(220);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("dzire");
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [passengers, setPassengers] = useState<number>(4);
  const [travelDate, setTravelDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");
  const [notification, setNotification] = useState("");

  // Listen to custom events for modular cross-section synergy
  useEffect(() => {
    const handleSelectVehicle = (e: Event) => {
      const customEvent = e as CustomEvent<{ vehicleId: string }>;
      if (customEvent.detail && customEvent.detail.vehicleId) {
        const vId = customEvent.detail.vehicleId;
        if (VEHICLES_CONFIG[vId]) {
          setSelectedVehicle(vId);
        }
      }
    };

    const handleSelectRoute = (e: Event) => {
      const customEvent = e as CustomEvent<{ destination: string; vehicleType: "sedan" | "family_suv" }>;
      if (customEvent.detail) {
        const { destination, vehicleType } = customEvent.detail;
        setDestinationCity(destination);
        setPickupCity("Ahmedabad Airport (AMD)");

        // Prefill realistic distance based on selected destination
        if (destination.includes("Hirasar")) {
          setDistanceKm(180);
        } else if (destination.includes("Rajkot")) {
          setDistanceKm(220);
        } else if (destination.includes("Vadodara")) {
          setDistanceKm(115);
        } else {
          setDistanceKm(80);
        }

        // Map general size categories to precise cars
        if (vehicleType === "sedan") {
          setSelectedVehicle("dzire");
        } else {
          setSelectedVehicle("ertiga");
        }
      }
    };

    window.addEventListener("select-premium-vehicle", handleSelectVehicle);
    window.addEventListener("select-comparative-route", handleSelectRoute);

    return () => {
      window.removeEventListener("select-premium-vehicle", handleSelectVehicle);
      window.removeEventListener("select-comparative-route", handleSelectRoute);
    };
  }, []);

  // Live Calculation state derivation
  const config = VEHICLES_CONFIG[selectedVehicle] || VEHICLES_CONFIG.dzire;
  const ratePerKm = tripType === "round" ? config.pricePerKmRound : config.pricePerKmOneWay;
  const driverAllowance = config.driverAllowance;
  
  // Calculate total distance traveled
  const totalTravelDistance = tripType === "round" ? distanceKm * 2 : distanceKm;
  
  // Base cost calculation
  const baseCost = totalTravelDistance * ratePerKm;

  // All-inclusive calculated fare representation
  const calculatedFare = Math.round(baseCost + driverAllowance);

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim()) {
      setNotification("⚠️ Please enter passenger full name to reserve your fare quote.");
      setTimeout(() => setNotification(""), 4000);
      return;
    }

    // Automating specific clean inquiry message requested
    const vehicleLabel = VEHICLES_CONFIG[selectedVehicle]?.name || "Premium Cab";
    const tripTypeLabel = tripType === "round" ? "Round Trip" : "One Way";

    let msg = `Hello Shreeji Cab Service 🚖\n\n`;
    msg += `Pickup: ${pickupCity}\n`;
    msg += `Drop: ${destinationCity}\n`;
    msg += `Distance: ${distanceKm} KM\n`;
    msg += `Vehicle: ${vehicleLabel}\n`;
    msg += `Trip Type: ${tripTypeLabel}\n`;
    msg += `Passengers: ${passengers}\n`;
    msg += `Estimated Fare: ₹${calculatedFare}\n\n`;
    msg += `Passenger: ${passengerName}\n`;
    if (passengerPhone) msg += `Phone Contact: ${passengerPhone}\n`;
    msg += `Travel Date: ${travelDate}\n\n`;
    msg += `Please confirm final pricing. Thank you!`;

    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/918530851640?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="booking-calculator" className="w-full bg-black/40 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
      
      {/* Top golden ambient line glow */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* Conversion free badge */}
      <div className="absolute top-0 right-0 py-1.5 px-4 bg-gradient-to-l from-[#D4AF37] to-[#FFD700] text-black text-[9px] font-mono tracking-widest font-black uppercase rounded-bl-xl shadow-md">
        🔒 Free Fare Inquiry
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent text-[#FFD700] rounded-xl border border-white/5">
          <Calculator className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="font-display font-black text-lg text-white tracking-tight">InstaFare™ Live Calculator</h3>
          <p className="text-[10px] text-zinc-400">Lock tax-inclusive rates for state outstations in 30 seconds.</p>
        </div>
      </div>

      <form onSubmit={handleWhatsappSubmit} className="space-y-4">
        
        {/* Row 1: Trip Type selectors */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-black/60 rounded-xl border border-white/5 text-xs">
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={`py-2 px-1 text-center font-bold rounded-lg transition-all cursor-pointer ${
              tripType === "oneway"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            One Way trip
          </button>
          <button
            type="button"
            onClick={() => setTripType("round")}
            className={`py-2 px-1 text-center font-bold rounded-lg transition-all cursor-pointer ${
              tripType === "round"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Round Tour (-10% Off)
          </button>
        </div>

        {/* Row 2: Pickup and Destination */}
        <div className="space-y-3.5">
          {/* Pickup */}
          <div className="relative">
            <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-500 block mb-1 font-mono">
              1. Pickup Location / City *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
              <input
                type="text"
                placeholder="E.g., Ahmedabad Airport (AMD)"
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all placeholder:text-zinc-550"
                required
              />
            </div>
          </div>

          {/* Destination */}
          <div className="relative">
            <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-500 block mb-1 font-mono">
              2. Destination Address / City *
            </label>
            <div className="relative">
              <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
              <input
                type="text"
                placeholder="E.g., Rajkot, Somnath, Upleta..."
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all placeholder:text-zinc-550"
                required
              />
            </div>
          </div>
        </div>

        {/* Dynamic Suggesters row */}
        <div className="flex flex-wrap gap-1 items-center">
          <span className="text-[8px] font-bold text-zinc-500 font-mono uppercase mr-1">Quick Select:</span>
          {POPULAR_SUGGESTIONS.slice(0, 5).map((sugg) => (
            <button
              key={sugg.label}
              type="button"
              onClick={() => {
                setDestinationCity(sugg.val);
                if (sugg.label.includes("Hirasar")) setDistanceKm(180);
                else if (sugg.label.includes("Rajkot")) setDistanceKm(220);
                else if (sugg.label.includes("Vadodara")) setDistanceKm(115);
                else if (sugg.label.includes("Upleta")) setDistanceKm(320);
                else if (sugg.label.includes("Somnath")) setDistanceKm(410);
                else setDistanceKm(150);
              }}
              className="text-[9px] px-2 py-0.5 bg-white/[0.03] hover:bg-[#FFD700]/10 border border-white/10 hover:border-[#FFD700]/30 rounded text-zinc-400 hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              to {sugg.label}
            </button>
          ))}
        </div>

        {/* Row 3: Distance Slider & Passenger Input */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-zinc-950/60 border border-white/5 rounded-xl space-y-1.5 text-left">
            <div className="flex justify-between items-center">
              <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-550 font-mono">
                3. Distance (KM)
              </label>
              <span className="text-xs font-mono font-black text-[#FFD700]">{distanceKm} Km</span>
            </div>
            <input
              type="range"
              min="10"
              max="1200"
              value={distanceKm}
              onChange={(e) => setDistanceKm(parseInt(e.target.value) || 10)}
              className="w-full accent-[#FFD700] h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <input
              type="number"
              min="10"
              max="1500"
              value={distanceKm}
              onChange={(e) => setDistanceKm(parseInt(e.target.value) || 10)}
              className="w-full bg-transparent border-t border-white/5 pt-1.5 focus:outline-none font-mono text-center text-xs text-white"
            />
          </div>

          <div className="p-3 bg-zinc-950/60 border border-white/5 rounded-xl space-y-1 text-left">
            <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-550 font-mono block">
              4. Passenger Count
            </label>
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 text-white flex items-center justify-center font-bold font-mono hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="font-mono text-sm font-black text-white">{passengers} Passengers</span>
              <button
                type="button"
                onClick={() => setPassengers(Math.min(10, passengers + 1))}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 text-white flex items-center justify-center font-bold font-mono hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Row 4: Vehicle Type selection cards with fast select mechanism */}
        <div className="space-y-1.5 text-left">
          <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-500 block font-mono">
            5. Select Elite Carriage
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {Object.values(VEHICLES_CONFIG).map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicle(v.id)}
                className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer ${
                  selectedVehicle === v.id
                    ? "border-[#FFD700] bg-[#FFD700]/5 text-[#FFD700]"
                    : "border-white/5 bg-zinc-950/60 text-zinc-400 hover:border-zinc-850 hover:text-white"
                }`}
              >
                <span className="text-[10px] font-bold block truncate">{v.name}</span>
                <span className="text-[8px] font-mono block text-zinc-500">₹{tripType === "round" ? v.pricePerKmRound : v.pricePerKmOneWay}/km</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 5: Travel Date & Passenger Personalization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-550 block mb-1 font-mono text-left">
              6. Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-black/40 border border-white/10 focus:border-[#FFD700] rounded-xl py-2 pl-9 pr-3 text-xs text-white focus:outline-none transition-all cursor-pointer"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[9px] uppercase tracking-widest font-extrabold text-zinc-555 block mb-1 font-mono text-left">
              7. Passenger Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Bhai"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              className="w-full bg-black/40 border border-white/10 focus:border-[#FFD700] rounded-xl py-2 px-3.5 text-xs text-white focus:outline-none transition-all placeholder:text-zinc-600 font-medium"
              required
            />
          </div>
        </div>

        {/* Instant Dynamic Estimates Panel */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-transparent border border-white/10 rounded-2xl p-4 mt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-left">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-zinc-500 text-[9px] uppercase tracking-wider font-mono">ESTIMATED COMPREHENSIVE FARE</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[8.5px] font-black rounded uppercase">ALL-INCLUSIVE</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">₹{calculatedFare}</span>
                <span className="text-zinc-500 text-[10px] lowercase font-mono">approx base tariff</span>
              </div>
              <div className="mt-1 text-[9px] text-zinc-400 flex flex-wrap gap-x-2 gap-y-1">
                <span>🚘 {VEHICLES_CONFIG[selectedVehicle]?.name} @ ₹{ratePerKm}/km</span>
                <span>•</span>
                <span>⚙️ Driver allowance incl.</span>
              </div>
            </div>

            {/* Premium CTA */}
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 bg-[#25D366] hover:bg-[#1da851] text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Get Fare on WhatsApp</span>
            </button>
          </div>

          {notification && (
            <p className="text-red-400 font-bold text-xs mt-3 text-center animate-pulse">
              {notification}
            </p>
          )}

          {/* Core static warning required */}
          <p className="text-[9px] text-center text-zinc-500 italic mt-3 pt-3 border-t border-white/5 leading-normal">
            “Final fare depends on timing, route and availability.”
          </p>
        </div>

        {/* Badge guarantees row */}
        <div className="flex items-center justify-center gap-3 text-zinc-400 text-[9px] uppercase font-mono font-bold pt-1">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" /> Best Price Guarantee</span>
          <span>•</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" /> 24x7 WhatsApp Support</span>
        </div>

      </form>
    </div>
  );
}
