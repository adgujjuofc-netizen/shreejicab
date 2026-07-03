import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, Star, ShieldCheck, Clock, BadgeCheck, FileText, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const WHATSAPP_NUMBER = "918530851640";
  const PREFILLED_MSG = encodeURIComponent(
    "Hi,\nI want to check today's fare.\nPickup: \nDestination: \nPassengers: \nDate: "
  );

  // Use the newly generated luxury emotional image of the Toyota Innova Crysta, driver, and happy family
  const heroImg = "/src/assets/images/premium_gujarat_cabs_hero_1783077372538.jpg";

  // Dynamic live availability counters to simulate real fleet operations
  const [liveAvailability, setLiveAvailability] = useState({
    ahmedabad: 3,
    rajkot: 2,
    surat: 4
  });

  useEffect(() => {
    // Subtle real-time fluctuation of car availability
    const interval = setInterval(() => {
      setLiveAvailability(prev => ({
        ahmedabad: Math.max(1, Math.min(5, prev.ahmedabad + (Math.random() > 0.5 ? 1 : -1))),
        rajkot: Math.max(1, Math.min(4, prev.rajkot + (Math.random() > 0.6 ? 1 : -1))),
        surat: Math.max(2, Math.min(6, prev.surat + (Math.random() > 0.5 ? 1 : -1)))
      }));
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-8 pb-12 lg:pt-16 lg:pb-20 overflow-hidden bg-[#070809]">
      
      {/* Dynamic ambient background glows */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-[120px] -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute right-10 bottom-20 w-[400px] h-[400px] bg-gradient-to-br from-[#FFD700]/5 to-transparent rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: High-converting Bilingual Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
            {/* Live Availability Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-zinc-950/80 border border-[#D4AF37]/25 rounded-2xl shadow-[0_4px_20px_rgba(212,175,55,0.05)]"
            >
              <div className="flex items-center gap-1.5 mr-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-black tracking-wider text-emerald-400 uppercase">
                  🟢 LIVE AVAILABILITY:
                </span>
              </div>
              <div className="flex gap-x-3 gap-y-1 text-[10.5px] font-mono font-bold text-zinc-300">
                <span>Ahmedabad: <b className="text-emerald-400 font-black">{liveAvailability.ahmedabad} Cars</b> Available</span>
                <span className="text-zinc-700">•</span>
                <span>Rajkot: <b className="text-emerald-400 font-black">{liveAvailability.rajkot} Cars</b></span>
                <span className="text-zinc-700">•</span>
                <span>Surat: <b className="text-emerald-400 font-black">{liveAvailability.surat} Cars</b></span>
              </div>
            </motion.div>

            {/* Headline and Emotional Pitch */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white tracking-tight"
              >
                Gujarat માં ક્યાંય પણ <br className="hidden sm:inline" />
                જવું છે? <br />
                <span className="text-[#FFD700] italic">30 Seconds માં Fare જાણો! 🚖</span>
              </motion.h1>

              {/* Tag Cloud of Core Offerings as Sub-points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2.5 pt-1.5"
              >
                <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-xs text-zinc-300 font-semibold flex items-center gap-1">
                  ✈️ Airport Pickup
                </span>
                <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-xs text-zinc-300 font-semibold flex items-center gap-1">
                  🛣️ Outstation Travel
                </span>
                <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-xs text-zinc-300 font-semibold flex items-center gap-1">
                  👨‍👩‍👧‍👦 Family Tours
                </span>
                <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-xs text-zinc-300 font-semibold flex items-center gap-1">
                  💼 Business Travel
                </span>
              </motion.div>

              {/* Subtitle / Bullet Proofs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="pt-2 text-zinc-400 space-y-2 text-sm sm:text-base leading-relaxed"
              >
                <p>
                  No more overcharging, long airport arrival queues, or dirty cabs. Hire immaculate premium vehicles with verified drivers for a stress-free journey.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-emerald-400 font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider pt-1.5">
                  <span className="flex items-center gap-1">✓ Verified Drivers</span>
                  <span className="flex items-center gap-1">✓ No Hidden Charges</span>
                  <span className="flex items-center gap-1">✓ 24×7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* High-Converting CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4 pt-2"
            >
              {/* Primary Massive Glowing WhatsApp Button */}
              <div className="relative group max-w-md">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#25D366] opacity-30 blur-lg group-hover:opacity-45 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] hover:bg-[#1da851] text-white text-sm sm:text-base font-black uppercase tracking-wide rounded-2xl shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>🟢 WhatsApp માં 30 સેકન્ડમાં Fare મેળવો</span>
                </a>
              </div>
              
              {/* Secondary CTA: Call Now */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pl-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFD700] block">
                  ⚡ Average reply time &lt; 2 Minutes
                </span>
                <span className="hidden sm:inline text-zinc-700">|</span>
                <a
                  href="tel:+918530851640"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD700] fill-current" />
                  <span>📞 Call Now: +91 85308 51640</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Luxury Emotional Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient golden photo frame glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-br from-[#D4AF37]/35 via-transparent to-black/40 rounded-3xl blur-[12px] opacity-70" />
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)] bg-black">
              <img
                src={heroImg}
                alt="Shreeji Premium Cab: Luxury Toyota Innova Crysta with family and professional driver"
                className="w-full h-auto object-cover max-h-[380px] sm:max-h-[440px] filter brightness-95 contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              
              {/* Bottom overlay badge on image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 text-left">
                <div className="flex items-center gap-1.5 mb-1 text-[#FFD700] text-[10px] font-mono font-black tracking-widest uppercase">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Shreeji VIP Standard</span>
                </div>
                <h4 className="text-white font-bold text-xs sm:text-sm">Luxury Toyota Innova Crysta & Professional Chauffeurs</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Perfect for NRI Airport arrivals, family tours & long comfortable pilgrimages.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Trust Bar Strip immediately below hero columns */}
      <div className="w-full mt-12 bg-black/80 border-t border-b border-[#D4AF37]/25 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-4 gap-x-2 text-center items-center">
            
            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <div className="flex gap-0.5 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs font-black text-white">4.9 Google Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">12000+</span>
              <span className="text-[10px] text-zinc-400 font-bold">Trips Completed</span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">100%</span>
              <span className="text-[10px] text-zinc-400 font-bold">On-Time Pickup</span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">45 Mins</span>
              <span className="text-[10px] text-zinc-400 font-bold">Free Flight Waiting</span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">24×7</span>
              <span className="text-[10px] text-zinc-400 font-bold">WhatsApp Support</span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-zinc-850/60 last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">Police-Verified</span>
              <span className="text-[10px] text-zinc-400 font-bold">Drivers Vetted</span>
            </div>

            <div className="flex flex-col items-center justify-center last:border-0 px-2">
              <span className="text-sm font-black text-[#FFD700] font-mono">GST Invoice</span>
              <span className="text-[10px] text-zinc-400 font-bold">Claim Available</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
