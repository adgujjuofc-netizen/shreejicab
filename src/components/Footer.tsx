import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const WHATSAPP_NUMBER = "+919825447781";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080a] text-zinc-400 border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Footer background gold dust ring deco */}
      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 gold-glow opacity-30 bg-radial -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900 text-left">
          
          {/* Brand Presentation Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-500 rounded-lg text-black font-extrabold text-lg">
                🚖
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  SHREEJI <span className="text-amber-500 font-extrabold">CAB</span>
                </span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-[0.2em] block -mt-1">
                  Premium Airport Travel
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
              Gujarat&apos;s most trusted private outstation transport service since 2011. Providing clean premium cars, verified professional drivers, and absolute pricing transparency.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[10px] text-emerald-400 font-bold font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>24x7 PREPAID AIR ARRIVALS DESK ACTIVE</span>
            </div>
          </div>

          {/* Quick Nav Solutions Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-mono">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  ✈️ Ahmedabad SVPI Airport Pickups
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  ➡️ One-Way Outstation Drop Cabs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  🔄 Saurashtra Pilgrimage Tour Packages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  ⏱️ In-City Local Sightseeing Rentals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  👑 VIP Executive NRI Transfers
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tourist Destinations SEO column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-mono">
              Tourism Routes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#routes" className="hover:text-amber-500 transition-colors">
                  📍 Ahmedabad → Somnath Temple (~8 hrs)
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-500 transition-colors">
                  📍 Ahmedabad → Dwarka Dham (~8.5 hrs)
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-500 transition-colors">
                  📍 Ahmedabad → Statue of Unity (~3.5 hrs)
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-500 transition-colors">
                  📍 Ahmedabad → Udaipur City (~5 hrs)
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-500 transition-colors">
                  📍 Ahmedabad → Rajkot Corporates (~4 hrs)
                </a>
              </li>
            </ul>
          </div>

          {/* Real Contact Coordinates column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-mono">
              VIPP Concierge Contacts
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed text-zinc-400">
                  Office No. 104, SVPI Airport Circular Road, Hansol Corridor, Ahmedabad, Gujarat 382475
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919825447781" className="font-mono text-[#f5bf42] font-semibold hover:underline">
                  +91-98254-47781
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:shreejicabsamd@gmail.com" className="hover:text-amber-500 hover:underline">
                  booking@shreejicab.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand ownership, copyrights, legal disclaimers notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-550 space-y-1.5 text-center md:text-left">
            <p>
              &copy; {currentYear} <b>Shreeji Cab Service Ahmedabad</b>. All Rights Reserved. Custom high-converting landing route.
            </p>
            <p className="text-[10px] text-zinc-600 max-w-2xl leading-normal">
              Disclaimer: Shreeji Cab is an independent premium prepaid cab provider registered in Gujarat, India. Any reference to airline brands or car model names (Toyota, Innova, Crysta, Ertiga, Maruti) is strictly descriptive for customer vehicle selection convenience.
            </p>
          </div>

          {/* Quick back top element */}
          <button
            onClick={handleScrollTop}
            className="p-3 bg-zinc-900 hover:bg-amber-500 hover:text-black rounded-lg border border-zinc-800 hover:border-amber-500 transition-colors group cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
