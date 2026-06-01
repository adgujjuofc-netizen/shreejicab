import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import PremiumPricing from "./components/PremiumPricing";
import RoutePricingTable from "./components/RoutePricingTable";
import SpecialOffer from "./components/SpecialOffer";
import DriverProfiles from "./components/DriverProfiles";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add simple anchor scroll listeners with manual compensation for sticky high navigations offset height
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        const id = anchor.getAttribute("href")?.slice(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 110; // offset navbar height ribbon
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans text-white antialiased selection:bg-[#FFD700] selection:text-black overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Atmospheric Background Gradients of Immersive UI */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFD700] opacity-[0.05] rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37] opacity-[0.08] rounded-full blur-[100px]"></div>
              <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#4ade80] opacity-[0.03] rounded-full blur-[100px]"></div>
            </div>
            
            {/* Sticky Top Bar Navbar with Promo announcements */}
            <Navbar />

            <main className="relative">
              
              {/* Full-screen Hero + Lead Capture widget */}
              <Hero />

              {/* Core Value badges row */}
              <TrustIndicators />

              {/* Strategic Comparison (Problems vs Advantages) */}
              <PainPoints />

              {/* Six Main Fleet Services */}
              <Services />

              {/* City Route Price Table comparison section */}
              <RoutePricingTable />

              {/* Premium Vehicle pricing cards section */}
              <PremiumPricing />

              {/* Vetted Driver Bios profiles */}
              <DriverProfiles />

              {/* Client reviews in English & Hindi */}
              <Reviews />

              {/* Flat Coupon offer banner */}
              <SpecialOffer />

              {/* Interactive accordion lists */}
              <FAQ />

            </main>

            {/* Brand Footer navigation details */}
            <Footer />

            {/* Sticky Pulsing green WhatsApp Floating badge */}
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
