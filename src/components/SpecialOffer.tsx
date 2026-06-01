import React from "react";
import { Sparkles, MessageCircle, Info, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function SpecialOffer() {
  const WHATSAPP_NUMBER = "+918530851640";

  const promoMessage = `Hello Shreeji Cab, I want to avail the FIRST RIDE SPECIAL DISCOUNT of ₹250 for my trip. Please share options!`;

  return (
    <section className="py-12 bg-[#0c0d0e] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Glowing border outline container card with gold gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-zinc-950 via-[#1c1404] to-zinc-950 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 text-center sm:text-left overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle gold backlighting overlay circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 gold-glow-strong -z-10 bg-radial pointer-events-none"></div>

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-black text-[10px] font-extrabold uppercase rounded-full tracking-widest mx-auto sm:mx-0">
              <Sparkles className="w-3.5 h-3.5 fill-black animate-spin" />
              <span>LIMITED TIME LAUNCH DISCOUNT</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3.5xl md:text-3.5xl text-white tracking-tight leading-tight">
              First Ride Special Discount 🎉 <br />
              <span className="text-amber-500">Flat ₹250 OFF On Your Outstation Booking</span>
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              We are so confident in our pricing and neat sanitized fleet that we urge you to <b>compare our rates</b> with any airport pre-paid booth or local taxi package before clicking below. 
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">✅ 100% Transparent billing</span>
              <span className="flex items-center gap-1">✅ Zero secret driver fees</span>
              <span className="flex items-center gap-1">✅ Premium A/C included</span>
            </div>
          </div>

          {/* Call To Action Gold Glow Trigger button */}
          <div className="shrink-0 flex flex-col items-center gap-2 w-full md:w-auto z-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(promoMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="promo-whatsapp-btn"
              className="w-full md:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-black text-sm uppercase rounded-xl tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.03] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>Claim ₹250 Discount</span>
            </a>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wide uppercase">
              Or compare quotes on WhatsApp
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
