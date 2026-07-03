export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  image: string;
  category: "Sedan" | "Family SUV" | "Premium SUV" | "Adventure SUV";
  seats: number;
  luggage: number;
  features: string[];
  pricePerKm: number;
  pricePerKmRound?: number;
  pricePerDay: number;
  approxAirportFare: number;
  bestFor: string;
  status: "Available" | "Popular Choose";
}

export interface PopularRoute {
  id: string;
  source: string;
  destination: string;
  distanceKm: number;
  durationHours: number;
  comfortNote: string;
  sedanEstimate: number;
  suvEstimate: number;
  crystaEstimate: number;
  sightseeingStopovers: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewText: string;
  date: string;
  routeTaken: string;
  tag: "Family Trip" | "Airport Pickup" | "Corporate Travel" | "Gujarat Tourism";
  avatarColor: string;
  tripPhoto?: string;
}

export interface Driver {
  id: string;
  name: string;
  photo: string;
  rating: number;
  experienceYears: number;
  languages: string[];
  vehiclesSupported: string[];
  tripsCompleted: number;
  badge: string;
}

export interface BookingState {
  pickupLocation: string;
  destination: string;
  selectedRouteId: string;
  selectedVehicleId: string;
  date: string;
  time: string;
  passengerName: string;
  passengerPhone: string;
  flightNo?: string;
  isAirportPickup: boolean;
}
