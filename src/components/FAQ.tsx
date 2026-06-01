import React, { useState } from "react";
import { HelpCircle, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "How do I locate my driver at Ahmedabad Airport (SVPI) arrivals?",
      answer: "We make airport pickups completely painless. Once your plane taxi-downs, your assigned driver will call you. He will be waiting near the Terminal Arrivals Exit Gate with a clean name card panel with your name on it. He will assist with full luggage moving to our pristine nearby SUV parked in direct premium transfer lanes."
    },
    {
      question: "Are toll gate fees, parking costs, and state taxes included in the fare?",
      answer: "Our interactive calculator estimates the accurate base tariff. When our WhatsApp team coordinates, we lock an ALL-INCLUSIVE quote which fully bundles the state permits (like entering Rajasthan for Udaipur), highway tolls, driver night halt allowances, and fuel levies. You pay exactly what is written - strictly zero surprise surcharge at drop-offs."
    },
    {
      question: "Can we book multi-day tours across Dwarka and Somnath? How are driver stops arranged?",
      answer: "Yes, this is our core specialty! You can hire our premium Innova Crysta or Ertiga for 2, 4, or 7-day Saurashtra pilgrimages. Our drivers are well-acquainted with holy pilgrimage structures. They arrange their own overnight lodging and meals, so you don't face any hidden expenses. They also recommend pristine restrooms and high-hygiene restaurants."
    },
    {
      question: "What is your flight delay standby policy? What if my flight landing gets delayed by hours?",
      answer: "Don't fret! We provide an automatic Flight Delay Insurance standby. Simply provide your arrival Flight Number in our calculator form. We track the flight live from Ahmedabad SVPI airport terminals. Our driver adjusts his pickup presence automatically, offering up to 45 minutes of free terminal arrivals search standby with zero charge."
    },
    {
      question: "What are your vehicle cleanliness standards and safety checks for night journeys?",
      answer: "Every Shreeji passenger vehicle undergoes deep chemical wash cleaning prior to boarding. Upholstery is vacuumed and steering points are fully disinfected, maintaining a crisp air freshness inside. For high-comfort night journeys, our drivers respect strict speed governors (under 95km/h speed bounds) and provide family security."
    },
    {
      question: "Is there a cancellation fee if my travel itinerary gets rescheduled?",
      answer: "We support total stress-free travel planning. Shreeji Cab Service charges 100% ZERO cancellation or re-scheduling fees if informed up to 6 hours before departure time. Simply text us on WhatsApp, and we will update or cancel your reservation quote instantly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0d0e10] relative overflow-hidden border-t border-b border-zinc-900">
      {/* Decorative ambient gold glow background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 gold-glow -z-10 bg-radial"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
              ❓ TRAVEL ASSURANCES & FAQS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Have Questions? We Have <br />
            <span className="text-amber-500">Completely Honest Answers</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Learn more about our luggage capacities, outstation route permissions, billing details, and customized tourist itineraries below.
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-xl overflow-hidden border-white/5 transition-colors duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-zinc-950/45 hover:bg-zinc-900/60 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-zinc-100 flex items-start gap-2.5">
                    <span className="text-amber-500 font-mono font-bold mt-0.5 shrink-0">Q.</span>
                    <span>{item.question}</span>
                  </span>
                  <span className="ml-4 shrink-0 text-amber-500">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion Answer Content (Smooth expand entry) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-1 bg-zinc-950/20 border-t border-white/2 text-xs sm:text-sm text-zinc-400 leading-relaxed pl-10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom micro CTA hook */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-medium">
          Still have an out-of-the-box itinerary request? 
          <a
            href="https://wa.me/918530851640?text=Hello%20Shreeji%20Cab,%20I%20have%20a%20special%20custom%20trip%20itinerary..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 font-extrabold hover:underline ml-1 inline-flex items-center gap-0.5"
          >
            Ask Us Directly on WhatsApp 💬
          </a>
        </div>

      </div>
    </section>
  );
}
