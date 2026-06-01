import React, { useState } from "react";
import { Phone, Shield, MessageSquare, Menu, X, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Our Advantages", href: "#advantages", id: "advantages" },
    { label: "Our Services", href: "#services", id: "services" },
    { label: "Our Fleet", href: "#fleet", id: "fleet" },
    { label: "Popular Routes & Rates", href: "#routes", id: "routes" },
    { label: "Customer Reviews", href: "#reviews", id: "reviews" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  const WHATSAPP_NUMBER = "+918530851640"; // real format placeholder

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 backdrop-blur-md">
        {/* Top-most announcement ribbon */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-xs font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 animate-pulse text-black" />
          <span>AHMEDABAD AIRPORT 24x7 PREPAID CAB CONCIERGE — FLIGHT TRACKING INCLUDED</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo and Name */}
          <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <span className="text-black font-black text-xl">S</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight block uppercase">
                SHREEJI <span className="text-[#D4AF37] font-extrabold">CAB</span>
              </span>
              <span className="text-[9px] text-[#D4AF37] font-mono uppercase tracking-[0.2em] block -mt-1 font-semibold">
                Airport & Outstation Concierge
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:text-[#FFD700] ${
                  activeTab === item.id ? "text-[#FFD700]" : "text-zinc-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Core Booking Actions Group */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="tel:+918530851640"
              id="nav-call-btn"
              className="flex items-center gap-2 py-2 px-3.5 bg-zinc-950 border border-white/10 hover:border-[#D4AF37] hover:text-[#FFD700] transition-all rounded-lg text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden md:inline text-zinc-350 font-mono text-xs">+91 85308 51640</span>
              <span className="md:hidden text-zinc-350 font-mono text-xs">Call Us</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shreeji%20Cab,%20I%20want%20to%20get%20rates%20right%20now!`}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="flex items-center gap-2 py-2.5 px-5 bg-[#25D366] hover:bg-[#1da851] text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Cash Fare</span>
            </a>
          </div>

          {/* Mobile responsive toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#0a0a0a]/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`block py-3 px-4 rounded-lg font-medium text-base transition-colors ${
                      activeTab === item.id
                        ? "bg-[#FFD700]/10 text-[#FFD700] border-l-2 border-[#FFD700]"
                        : "text-zinc-300 hover:bg-zinc-950"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile action call buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <a
                    href="tel:+918530851640"
                    className="flex items-center justify-center gap-2 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-300 text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shreeji%20Cab,%20I%20want%20to%20get%20rates%20right%20now!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg text-sm font-bold shadow-[0_0_12px_rgba(37,211,102,0.2)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Fare 📲</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
