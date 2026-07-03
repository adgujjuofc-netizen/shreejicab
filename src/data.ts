import { Vehicle, PopularRoute, Testimonial, Driver } from "./types";

export const VEHICLES: Vehicle[] = [
  {
    id: "sedan",
    name: "Maruti Dzire / Toyota Etios",
    tagline: "Comfortable budget-friendly sedan, perfect for couples or business travelers.",
    image: "sedan", // will map to an elegant icon list or local assets
    category: "Sedan",
    seats: 4,
    luggage: 2,
    features: [
      "Whisper Quiet Cabin A/C",
      "Pristine Fabric Seating",
      "Sufficient Trunk Space for 2 Luggas",
      "Real-time GPS Tracking",
      "Hindi & Gujarati Speaking Driver"
    ],
    pricePerKm: 15,
    pricePerKmRound: 11,
    pricePerDay: 2800,
    approxAirportFare: 799,
    bestFor: "Solo travelers, business executives & couples",
    status: "Available"
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    tagline: "The smart 7-seater option for balanced budgets and cheerful families.",
    image: "ertiga",
    category: "Family SUV",
    seats: 6,
    luggage: 3,
    features: [
      "Dual-Row Cooling Blower",
      "Plush Sanitized Cabin Seats",
      "Versatile Foldable 3rd Row",
      "Mobile Charging Outlets",
      "Verified Safe & Respectful Driver"
    ],
    pricePerKm: 18,
    pricePerKmRound: 13,
    pricePerDay: 3800,
    approxAirportFare: 1199,
    bestFor: "Family vacations, local weddings & budget outstations",
    status: "Popular Choose"
  },
  {
    id: "crysta",
    name: "Toyota Innova Crysta",
    tagline: "The gold standard of luxury travel. Supreme flight-level cabin smoothness.",
    image: "crysta", // will use the generated image: /src/assets/images/luxury_toyota_mpv_1780305020580.png
    category: "Premium SUV",
    seats: 7,
    luggage: 4,
    features: [
      "Deeply Reclining Captain Seats",
      "Superb Shock Absorption",
      "Ambient Interior Cabin Lights",
      "USB Quick Charging Ports",
      "Top-Tier English/Hindi Elite Chauffeur"
    ],
    pricePerKm: 22,
    pricePerKmRound: 18,
    pricePerDay: 4800,
    approxAirportFare: 1799,
    bestFor: "NRI airport luxury arrivals, long multi-day tours & executive commutes",
    status: "Popular Choose"
  },
  {
    id: "thar",
    name: "Mahindra Thar (4x4 Accent)",
    tagline: "The bold, high-ground-clearance adventure vehicle for iconic entries.",
    image: "thar",
    category: "Adventure SUV",
    seats: 4,
    luggage: 2,
    features: [
      "Rugged Premium Cabin Design",
      "Elevated Command Seating",
      "A/C & Smart Bluetooth Sound",
      "Expert Tourist Navigator Guide",
      "Ideal For Scenic Trails"
    ],
    pricePerKm: 20,
    pricePerDay: 5500,
    approxAirportFare: 1999,
    bestFor: "Couples, photographers & adventurous terrain exploration",
    status: "Available"
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: "rte-somnath",
    source: "Ahmedabad Airport (AMD)",
    destination: "Somnath Temple",
    distanceKm: 410,
    durationHours: 8,
    comfortNote: "Scenic National Highway with premium dining stops.",
    sedanEstimate: 4999,
    suvEstimate: 6200,
    crystaEstimate: 7800,
    sightseeingStopovers: ["Rajkot Heritage", "Junagadh Fort", "Virpur Jalaram Temple"],
    recommendedFor: "Spiritual pilgrimage with elderly parents & family tourists"
  },
  {
    id: "rte-dwarka",
    source: "Ahmedabad Airport (AMD)",
    destination: "Dwarka Dham",
    distanceKm: 440,
    durationHours: 8.5,
    comfortNote: "Smooth Saurashtra expressway with pristine marine air.",
    sedanEstimate: 5299,
    suvEstimate: 6600,
    crystaEstimate: 8300,
    sightseeingStopovers: ["Jamnagar Lakhota Lake", "Dwarkadhish Temple Entry", "Nageshwar Jyotirlinga"],
    recommendedFor: "Multi-day heritage touring & absolute family bliss"
  },
  {
    id: "rte-sou",
    source: "Ahmedabad Airport (AMD)",
    destination: "Statue Of Unity",
    distanceKm: 198,
    durationHours: 3.5,
    comfortNote: "Clean Vadodara-Sardar Sarovar dual carriageway. Very fast journey.",
    sedanEstimate: 2499,
    suvEstimate: 3200,
    crystaEstimate: 4100,
    sightseeingStopovers: ["Vadodara Laxmi Vilas Palace", "Poicha Swaminarayan Dham", "Narmada River Sunset Point"],
    recommendedFor: "Quick weekend getaways & international NRI travel delegations"
  },
  {
    id: "rte-udaipur",
    source: "Ahmedabad Airport (AMD)",
    destination: "Udaipur (Rajasthan)",
    distanceKm: 260,
    durationHours: 5,
    comfortNote: "Lush green Aravali Hill highway crossing Gujarat border.",
    sedanEstimate: 3199,
    suvEstimate: 4200,
    crystaEstimate: 5200,
    sightseeingStopovers: ["Shamlaji Ancient Temple", "Aravali Hills Overlooks", "Rajasthan State Welcome Border"],
    recommendedFor: "Royal lake-city holidays, honeymoon transfers & weekend retreats"
  },
  {
    id: "rte-rajkot",
    source: "Ahmedabad Airport (AMD)",
    destination: "Rajkot City Hub",
    distanceKm: 220,
    durationHours: 4,
    comfortNote: "Multi-lane high speed National Highway with excellent highway rest areas.",
    sedanEstimate: 2799,
    suvEstimate: 3500,
    crystaEstimate: 4400,
    sightseeingStopovers: ["Limbdi Food Parks", "Chotila Chamunda Temple Mountain View"],
    recommendedFor: "Fast business travel & urgent family functions"
  }
];

export const DRIVERS: Driver[] = [
  {
    id: "drv-1",
    name: "Ramesh Bhai Patel",
    photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4.9,
    experienceYears: 15,
    languages: ["Hindi", "Gujarati", "Basic English"],
    vehiclesSupported: ["Innova Crysta", "Ertiga"],
    tripsCompleted: 1850,
    badge: "NRI-Trusted Elite"
  },
  {
    id: "drv-2",
    name: "Sukhminder Singh (Vikram)",
    photo: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4.9,
    experienceYears: 12,
    languages: ["Hindi", "Punjabi", "Gujarati"],
    vehiclesSupported: ["Innova Crysta", "Dzire", "Thar"],
    tripsCompleted: 1420,
    badge: "Outstation Master"
  },
  {
    id: "drv-3",
    name: "Jagdishbhai K. Patel",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4.8,
    experienceYears: 10,
    languages: ["Gujarati", "Hindi"],
    vehiclesSupported: ["Ertiga", "Dzire"],
    tripsCompleted: 1150,
    badge: "Airport Punctuality Star"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tst-1",
    name: "Rohit Sharma",
    location: "Mumbai",
    rating: 5,
    reviewText: "Ahmedabad Airport par plane land hone se pehle driver Ramesh Bhai ka call aa gaya tha. Reception space par board ke sath khade the. Luggage load karne me madad kari aur gaadi bilkul chamchamati hui Crysta thi! Extra toll, tax charges are completely transparently mentioned card me. Highly recommended for family safety!",
    date: "14 May 2026",
    routeTaken: "Ahmedabad Airport Pickup to City",
    tag: "Airport Pickup",
    avatarColor: "bg-amber-500",
    tripPhoto: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tst-2",
    name: "Dr. Neha Deshmukh",
    location: "Pune",
    rating: 5,
    reviewText: "We booked Shreeji Cab for a Statue of Unity day trip. Our experience was outstanding. Beautiful neat Innova, the driver Vikram was so respectful, especially of my aged grandparents. He knew exactly where the best neat bathrooms and premium restaurants are on the Vadodara highway. Full worth for money and peaceful hospitality.",
    date: "28 April 2026",
    routeTaken: "Ahmedabad → Statue Of Unity Round Trip",
    tag: "Gujarat Tourism",
    avatarColor: "bg-emerald-500",
    tripPhoto: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tst-3",
    name: "Dushyant Singhania",
    location: "Delhi NCR",
    rating: 5,
    reviewText: "Shreeji Cabs makes outstation bookings fully reliable! Driver spoke fluent Hindi, drove at a safe speed under 90km/h on Dwarka highway, completely family-safe. Absolutely transparent billing with zero hidden costs at the end of trip. Highly reliable compared to local roadside cab drivers in Ahmedabad airport terminal.",
    date: "10 Feb 2026",
    routeTaken: "Ahmedabad Airport → Dwarka & Somnath Tour",
    tag: "Family Trip",
    avatarColor: "bg-blue-500",
    tripPhoto: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tst-4",
    name: "Sandeep Gandhi",
    location: "Noida / NRI Visitor",
    rating: 5,
    reviewText: "I visit Ahmedabad twice a year for NRI business affairs. Shreeji has become my go-to cab operator. Outstanding punctual drivers, neat SUVs, and smooth payment billing. Their instant WhatsApp fare calculator gave me the pricing upfront, which matched the final payment penny-to-penny. Excellent!",
    date: "02 Mar 2026",
    routeTaken: "Ahmedabad Airport to Rajkot Corporate",
    tag: "Corporate Travel",
    avatarColor: "bg-purple-500",
    tripPhoto: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400"
  }
];

export const PAIN_POINTS = {
  problems: [
    { title: "Airport Overcharging", text: "Traditional taxi drivers at arrivals demand 2x normal fares seeing outstate travelers." },
    { title: "Rude/No Hindi Drivers", text: "Many local drivers have high language barriers or refuse to guide non-Gujarati clients." },
    { title: "Dirty Cars, Bad Odors", text: "Musty odored old taxi cabs with non-functioning A/C, ruining long 8-hour pilgrimages." },
    { title: "Hidden Charges", text: "Demanding unknown toll, driver night allowances, or parking costs during drop-off." }
  ],
  solutions: [
    { title: "Transparent Best Pricing", text: "Fixed realistic upfront fare estimate before boarding. Absolutely zero hidden list pricing." },
    { title: "Verified Hindi-Speaking Drivers", text: "Extremely clean, safe, polite drivers who accommodate outstate travelers safely with fluent Hindi support." },
    { title: "Spotless New Fleet", text: "Freshly sanitized, luxury air-conditioned SUVs & Sedans with premium seat covers." },
    { title: "All-Inclusive Clear Quotes", text: "Taxes, luggage, drivers allowance clearly summarized before you close the booking." }
  ]
};
