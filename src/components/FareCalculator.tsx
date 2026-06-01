import React, { useState, useEffect } from "react";
import { Calculator, Calendar, Clock, MapPin, Navigation, Compass, ShieldCheck, HelpCircle } from "lucide-react";
import { VEHICLES, POPULAR_ROUTES } from "../data";
import { BookingState } from "../types";

export default function FareCalculator() {
  const [bookingType, setBookingType] = useState<"airport" | "outstation_oneway" | "outstation_round" | "local_pkg">("airport");
  
  const [state, setState] = useState<BookingState>({
    pickupLocation: "Ahmedabad Airport (AMD) - International/Domestic Terminal",
    destination: "rte-sou", // default route
    selectedRouteId: "rte-sou",
    selectedVehicleId: "crysta",
    date: new Date().toISOString().split("T")[0],
    time: "12:00",
    passengerName: "",
    passengerPhone: "",
    flightNo: "",
    isAirportPickup: true
  });

  const [customDestination, setCustomDestination] = useState("");
  const [customDistance, setCustomDistance] = useState("150"); // default for custom
  const [calculatedFare, setCalculatedFare] = useState(0);
  const [calculatedDistance, setCalculatedDistance] = useState(198);
  const [calculatedHours, setCalculatedHours] = useState(3.5);
  const [notification, setNotification] = useState("");

  const popularRoutes = POPULAR_ROUTES;
  const vehicles = VEHICLES;

  // Real-time calculation formula
  useEffect(() => {
    let baseFare = 0;
    let dist = 0;
    let hours = 0;

    const selectedVehicle = vehicles.find((v) => v.id === state.selectedVehicleId) || vehicles[1];

    if (bookingType === "outstation_oneway" || bookingType === "outstation_round") {
      if (state.selectedRouteId !== "custom") {
        const route = popularRoutes.find((r) => r.id === state.selectedRouteId);
        if (route) {
          dist = route.distanceKm;
          hours = route.durationHours;
          if (state.selectedVehicleId === "sedan") baseFare = route.sedanEstimate;
          else if (state.selectedVehicleId === "ertiga") baseFare = route.suvEstimate;
          else if (state.selectedVehicleId === "crysta") baseFare = route.crystaEstimate;
          else baseFare = route.crystaEstimate * 1.15; // Thar or higher
        }
      } else {
        // Custom route estimation
        const parsedDistance = parseFloat(customDistance) || 100;
        dist = parsedDistance;
        hours = Math.ceil((parsedDistance / 50) * 10) / 10; // 50 km/h avg
        const rate = selectedVehicle.pricePerKm;
        baseFare = parsedDistance * rate;
      }

      if (bookingType === "outstation_round") {
        // Round trips get 40% discount on return leg
        baseFare = Math.round(baseFare * 1.6);
      }
    } else if (bookingType === "airport") {
      // Small premium for airport pickup services with flight monitoring and name boards
      dist = 18; // Average city transfer distance
      hours = 0.75;
      baseFare = selectedVehicle.approxAirportFare;
    } else {
      // Local hourly rentals (8 Hours / 80 Km packages)
      dist = 80;
      hours = 8;
      baseFare = selectedVehicle.pricePerDay;
    }

    setCalculatedFare(Math.round(baseFare));
    setCalculatedDistance(dist);
    setCalculatedHours(hours);
  }, [bookingType, state.selectedRouteId, state.selectedVehicleId, customDistance, state.destination]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRouteSelect = (routeId: string) => {
    if (routeId === "custom") {
      setState((prev) => ({ ...prev, selectedRouteId: "custom", destination: "Custom Destination" }));
    } else {
      const route = popularRoutes.find((r) => r.id === routeId);
      setState((prev) => ({
        ...prev,
        selectedRouteId: routeId,
        destination: route ? route.destination : ""
      }));
    }
  };

  const constructWhatsAppLink = () => {
    const selectedVehicleObj = vehicles.find((v) => v.id === state.selectedVehicleId);
    const vehicleName = selectedVehicleObj ? selectedVehicleObj.name : "Premium Cab";
    
    // Header
    let text = `*🚖 NEW BOOKING INQUIRY — SHREEJI CAB SERVICES* \n\n`;
    text += `*Passenger Name:* ${state.passengerName || "Valued Guest"}\n`;
    if (state.passengerPhone) text += `*Mobile Number:* ${state.passengerPhone}\n`;
    
    let tourTypeText = "";
    if (bookingType === "airport") tourTypeText = "Airport Pick/Drop Transfer";
    else if (bookingType === "outstation_oneway") tourTypeText = "One-Way Outstation trip";
    else if (bookingType === "outstation_round") tourTypeText = "Outstation Round-Trip";
    else tourTypeText = "Local Sightseeing / Daily Package";
    
    text += `*Travel Type:* ${tourTypeText}\n`;
    text += `*Pickup From:* ${state.pickupLocation}\n`;
    
    if (bookingType === "airport" && state.flightNo) {
      text += `*Flight Number:* ${state.flightNo.toUpperCase()} (Live tracking enabled ✈️)\n`;
    }

    const routeDest = state.selectedRouteId === "custom" ? customDestination : state.destination;
    text += `*Drop-off Destination:* ${routeDest || "City Hub"}\n`;
    text += `*Selected Vehicle:* ${vehicleName}\n`;
    text += `*Date of Travel:* ${state.date} (dd-mm-yyyy)\n`;
    text += `*Expected Time:* ${state.time}\n\n`;
    
    text += `*Estimate Base Fare:* ₹${calculatedFare} (Best Rate Guarantee)\n`;
    text += `*Estimated Distance:* ~${calculatedDistance} km\n`;
    text += `*Estimated Ride Time:* ~${calculatedHours} Hours\n\n`;
    text += `_Please lock my rate and verify availability of sanitized vehicle with Hindi-speaking driver. Thank you!_`;

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/918530851640?text=${encodedText}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.passengerName) {
      setNotification("Please entering Passenger Name to generate accurate quote.");
      setTimeout(() => setNotification(""), 4000);
      return;
    }
    const link = constructWhatsAppLink();
    window.open(link, "_blank");
  };

  return (
    <div id="booking-calculator" className="w-full bg-black/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
      {/* Dynamic Ambient Glowing Border Accent */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse duration-[3000ms]"></div>
      
      <div className="absolute top-0 right-0 py-1.5 px-4 bg-gradient-to-l from-[#D4AF37] to-[#FFD700] text-black text-[9px] font-mono tracking-widest font-extrabold uppercase rounded-bl-xl shadow-md">
        🔒 SECURED FARE QUOTE
      </div>

      <div className="flex items-center gap-3.5 mb-6">
        <div className="p-3 bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 text-[#FFD700] rounded-xl border border-[#FFD700]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          <Calculator className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h3 className="font-display font-black text-xl text-white tracking-tight">Free Fare Inquiry</h3>
          <p className="text-xs text-zinc-400">Lock your flat airport base tariff instantly. No card required.</p>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Booking Category Navigation Tabs */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-black/60 rounded-xl border border-white/5 text-[10px] sm:text-xs">
          <button
            type="button"
            onClick={() => {
              setBookingType("airport");
              setState(prev => ({
                ...prev,
                pickupLocation: "Ahmedabad Airport (AMD) - International/Domestic Terminal",
                isAirportPickup: true
              }));
            }}
            className={`py-2.5 px-1 text-center font-bold rounded-lg transition-all ${
              bookingType === "airport"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow-md transform scale-[1.01]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Airport Cab
          </button>
          
          <button
            type="button"
            onClick={() => {
              setBookingType("outstation_oneway");
              setState(prev => ({
                ...prev,
                pickupLocation: "Ahmedabad (Any Hotel / Location)",
                isAirportPickup: false
              }));
            }}
            className={`py-2.5 px-1 text-center font-bold rounded-lg transition-all ${
              bookingType === "outstation_oneway"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow-md transform scale-[1.01]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Oneway Trip
          </button>

          <button
            type="button"
            onClick={() => {
              setBookingType("outstation_round");
              setState(prev => ({
                ...prev,
                pickupLocation: "Ahmedabad (Any Hotel / Location)",
                isAirportPickup: false
              }));
            }}
            className={`py-2.5 px-1 text-center font-bold rounded-lg transition-all ${
              bookingType === "outstation_round"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow-md transform scale-[1.01]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Round Trip
          </button>

          <button
            type="button"
            onClick={() => {
              setBookingType("local_pkg");
              setState(prev => ({
                ...prev,
                pickupLocation: "Ahmedabad City Address",
                isAirportPickup: false
              }));
            }}
            className={`py-2.5 px-1 text-center font-bold rounded-lg transition-all ${
              bookingType === "local_pkg"
                ? "bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] text-black font-extrabold shadow-md transform scale-[1.01]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Hourly Rental
          </button>
        </div>

        {/* Pickup Location details */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            Pick-up Location (Starting Address)
          </label>
          <div className="relative">
            <input
              type="text"
              name="pickupLocation"
              value={state.pickupLocation}
              onChange={handleInputChange}
              placeholder="Starting hotel, airport terminal or railway station..."
              className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300 placeholder:text-zinc-500"
              required
            />
          </div>
        </div>

        {/* Route / Destination selection conditionally */}
        {(bookingType === "outstation_oneway" || bookingType === "outstation_round") ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 animate-fadeIn">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Select Destination Route
              </label>
              <select
                value={state.selectedRouteId}
                onChange={(e) => handleRouteSelect(e.target.value)}
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300 cursor-pointer"
              >
                {popularRoutes.map((route) => (
                  <option key={route.id} value={route.id} className="bg-zinc-950 text-white">
                    To: {route.destination} (~{route.distanceKm} Km)
                  </option>
                ))}
                <option value="custom" className="bg-zinc-950 text-white">── Custom Route / Address ──</option>
              </select>
            </div>

            {state.selectedRouteId === "custom" ? (
              <div className="space-y-4 animate-slideDown col-span-1">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                    Entering Custom Destination
                  </label>
                  <input
                    type="text"
                    value={customDestination}
                    onChange={(e) => setCustomDestination(e.target.value)}
                    placeholder="E.g., Bhuj, Gandhidham, Mount Abu..."
                    className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                    Est. Single Distance (Km)
                  </label>
                  <input
                    type="number"
                    value={customDistance}
                    onChange={(e) => setCustomDistance(e.target.value)}
                    min="10"
                    max="1500"
                    className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="bg-black/60 border border-white/5 rounded-xl p-3.5 text-xs text-zinc-400 self-end h-[48px] flex items-center justify-between">
                <span>🚘 Standard Highway Traveled</span>
                <span className="text-[#FFD700] font-black font-mono tracking-wide text-[10px] uppercase">Verified Safe Route</span>
              </div>
            )}
          </div>
        ) : bookingType === "airport" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Drop-off City Address
              </label>
              <input
                type="text"
                name="destination"
                value={state.destination === "rte-sou" ? "Any Address in Ahmedabad / Gandhinagar" : state.destination}
                onChange={handleInputChange}
                placeholder="Hotel, residential area, or office name..."
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
                ✈️ Flight Number (For delay tracking)
              </label>
              <input
                type="text"
                name="flightNo"
                value={state.flightNo}
                onChange={handleInputChange}
                placeholder="E.g., AI-102, 6E-205 (Optional)"
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none uppercase focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
              />
            </div>
          </div>
        ) : (
          /* Local travel sightseeing pkg */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                Select Packages
              </label>
              <select
                name="destination"
                value={state.destination}
                onChange={handleInputChange}
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
              >
                <option value="Ahmedabad Full Day (8 Hrs / 80 Km Package)" className="bg-zinc-950 text-white">Local Sightseeing (8 Hrs / 80 Km)</option>
                <option value="Ahmedabad In-City Business Trip (12 Hrs / 120 Km)" className="bg-zinc-950 text-white">Business Extension (12 Hrs / 120 Km)</option>
                <option value="Half Day Quick Jet (4 Hrs / 40 Km Package)" className="bg-zinc-950 text-white">Quick Business Route (4 Hrs / 40 Km)</option>
              </select>
            </div>
            <div className="bg-black/60 border border-white/5 rounded-xl p-3.5 text-xs text-zinc-400 flex items-center justify-between self-end h-[48px]">
              <span>⏱️ Local Night-driver Charges</span>
              <span className="text-emerald-400 font-bold font-mono">Included</span>
            </div>
          </div>
        )}

        {/* Date and Time selectors */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              Pickup Date
            </label>
            <input
              type="date"
              name="date"
              value={state.date}
              onChange={handleInputChange}
              className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              Pickup Time
            </label>
            <input
              type="time"
              name="time"
              value={state.time}
              onChange={handleInputChange}
              className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none cursor-pointer focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
              required
            />
          </div>
        </div>

        {/* Passenger Contact Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Passenger Full Name *
            </label>
            <input
              type="text"
              name="passengerName"
              value={state.passengerName}
              onChange={handleInputChange}
              placeholder="e.g. Ramesh Shah / Amit Patel"
              className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Phone Number (WhatsApp No)
            </label>
            <input
              type="tel"
              name="passengerPhone"
              value={state.passengerPhone}
              onChange={handleInputChange}
              placeholder="E.g., +91 98XXX XXXXX (Optional)"
              className="w-full bg-black/40 backdrop-blur-md border border-white/10 focus:border-[#FFD700] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/15 transition-all duration-300"
            />
          </div>
        </div>

        {/* Vehicle Selection list with mini-costs */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
            Select Your Premium Carriage & Comfort level
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {vehicles.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setState((prev) => ({ ...prev, selectedVehicleId: v.id }))}
                className={`p-3 rounded-lg border text-left transition-all ${
                  state.selectedVehicleId === v.id
                    ? "border-[#FFD700] bg-[#FFD700]/5 text-white"
                    : "border-white/10 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm block truncate">{v.category}</span>
                  {state.selectedVehicleId === v.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
                  )}
                </div>
                <span className="text-[10px] text-zinc-505 font-mono block mb-1.5">{v.name.split(" / ")[0]}</span>
                
                <div className="flex items-baseline justify-between mt-2 pt-1 border-t border-white/5">
                  <span className="text-[10px] text-zinc-550">Rate/Km</span>
                  <span className="font-mono text-xs font-bold text-[#FFD700]">₹{v.pricePerKm}/km</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Instant Pricing Estimates Bar */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/10 to-transparent border border-white/10 rounded-xl p-4 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-400 text-xs uppercase tracking-wider font-mono">ESTIMATED FARE</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold rounded-md">ALL-INCLUSIVE</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-white">₹{calculatedFare}</span>
                <span className="text-zinc-500 text-[10px] lowercase">approx base rate</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-2 text-[10px] text-zinc-400">
                <span>📏 ~{calculatedDistance} km</span>
                <span>•</span>
                <span>⏱️ ~{calculatedHours} hrs trip</span>
                <span>•</span>
                <span className="text-[#FFD700] font-semibold font-mono">✓ Free delay tracker</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold rounded-lg text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.03] flex items-center justify-center gap-2"
            >
              <span>📲 Get Fare on WhatsApp</span>
            </button>
          </div>

          {notification && (
            <div className="text-red-400 font-semibold text-xs mt-3 text-center animate-pulse">
              {notification}
            </div>
          )}

          {/* Psychological trust anchors */}
          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-zinc-400 justify-center">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" /> Safe Family Journey</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" /> Absolutely Zero Secret Fee</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" /> Fully Sanitized Suvs</span>
          </div>
        </div>
      </form>
    </div>
  );
}
