import React from "react";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { motion } from "motion/react";

export default function StickyMobileBar() {
  const WHATSAPP_NUMBER = "918530851640";
  const PREFILLED_MSG = encodeURIComponent(
    "Hi,\nI want to check today's fare.\nPickup: \nDestination: \nPassengers: \nDate: "
  );

  const handleScrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("booking-calculator");
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/40 h-16 flex items-center justify-around px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      
      {/* Column 1: Call Now */}
      <a
        href="tel:+918530851640"
        className="flex flex-col items-center justify-center flex-1 text-center h-full active:bg-zinc-900 transition-colors py-1.5"
      >
        <Phone className="w-5 h-5 text-[#FFD700] fill-current animate-pulse" />
        <span className="text-[10px] font-bold text-zinc-300 mt-1 uppercase tracking-wider">📞 Call</span>
      </a>

      {/* Column 2: Center Highlighted WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 text-center h-full active:bg-zinc-900 border-l border-r border-zinc-850 py-1.5 bg-[#25D366]/10 relative group"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[#25D366] animate-pulse"></div>
        <MessageSquare className="w-5 h-5 text-[#25D366] fill-current" />
        <span className="text-[10px] font-black text-[#25D366] mt-1 uppercase tracking-wider">💬 WhatsApp</span>
      </a>

      {/* Column 3: Fare Calculator */}
      <a
        href="#booking-calculator"
        onClick={handleScrollToCalculator}
        className="flex flex-col items-center justify-center flex-1 text-center h-full active:bg-zinc-900 transition-colors py-1.5"
      >
        <Calculator className="w-5 h-5 text-[#FFD700]" />
        <span className="text-[10px] font-bold text-zinc-300 mt-1 uppercase tracking-wider">💰 Fare Check</span>
      </a>

    </div>
  );
}
