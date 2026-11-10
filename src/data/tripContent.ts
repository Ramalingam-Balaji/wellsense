
export type TripActivity = {
  title: string;
  sub: string;
  icon: "community" | "family" | "sightseeing" | "wellness" | "adventure";
};

export type TripContent = {
  image: string;
  imageAlt: string;
  imageCaption: string;
  activities: TripActivity[];
};

export const tripContent: Record<string, TripContent> = {
  JAN: {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tropical resort with swimming pool and palm trees",
    imageCaption: "Coastal community getaway",
    activities: [
      { title: "Community", sub: "Meeting", icon: "community" },
      { title: "Family", sub: "Games", icon: "family" },
      { title: "Sightseeing", sub: "Konark & Puri", icon: "sightseeing" },
      { title: "Wellness", sub: "Activities", icon: "wellness" },
      { title: "Family Fun", sub: "& Gathering", icon: "adventure" },
    ],
  },

  FEB: {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Green mountain forest landscape",
    imageCaption: "Discover the Araku Valley",
    activities: [
      { title: "Nature", sub: "Walks", icon: "adventure" },
      { title: "Coffee", sub: "Plantations", icon: "sightseeing" },
      { title: "Family", sub: "Activities", icon: "family" },
      { title: "Wellness", sub: "Sessions", icon: "wellness" },
      { title: "Community", sub: "Gathering", icon: "community" },
    ],
  },

  MAR: {
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Lush green forest in Coorg",
    imageCaption: "Escape to the coffee hills",
    activities: [
      { title: "Coffee", sub: "Estate Tour", icon: "sightseeing" },
      { title: "Nature", sub: "Trails", icon: "adventure" },
      { title: "Family", sub: "Games", icon: "family" },
      { title: "Wellness", sub: "Activities", icon: "wellness" },
      { title: "Community", sub: "Connect", icon: "community" },
    ],
  },

  APR: {
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Historic architecture and heritage landscape",
    imageCaption: "Explore the heritage of Hampi",
    activities: [
      { title: "Heritage", sub: "Walk", icon: "sightseeing" },
      { title: "Photography", sub: "Tour", icon: "adventure" },
      { title: "Family", sub: "Activities", icon: "family" },
      { title: "Culture", sub: "Experience", icon: "community" },
      { title: "Relax", sub: "Together", icon: "wellness" },
    ],
  },

  MAY: {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Beautiful green mountain landscape",
    imageCaption: "Experience the Nilgiri hills",
    activities: [
      { title: "Hill", sub: "Sightseeing", icon: "sightseeing" },
      { title: "Nature", sub: "Walks", icon: "adventure" },
      { title: "Family", sub: "Games", icon: "family" },
      { title: "Relax", sub: "Together", icon: "wellness" },
      { title: "Community", sub: "Connect", icon: "community" },
    ],
  },

  JUN: {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Beautiful Goa beach and coastline",
    imageCaption: "A refreshing Goa coastal escape",
    activities: [
      { title: "Beach", sub: "Walks", icon: "adventure" },
      { title: "Local", sub: "Exploration", icon: "sightseeing" },
      { title: "Family", sub: "Fun", icon: "family" },
      { title: "Wellness", sub: "Sessions", icon: "wellness" },
      { title: "Community", sub: "Gathering", icon: "community" },
    ],
  },

  JUL: {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Lush green Wayanad landscape",
    imageCaption: "Explore the green beauty of Wayanad",
    activities: [
      { title: "Waterfall", sub: "Visits", icon: "sightseeing" },
      { title: "Nature", sub: "Trails", icon: "adventure" },
      { title: "Family", sub: "Activities", icon: "family" },
      { title: "Wellness", sub: "Sessions", icon: "wellness" },
      { title: "Community", sub: "Connect", icon: "community" },
    ],
  },

  AUG: {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Peaceful tropical beach",
    imageCaption: "Relax along the Gokarna coast",
    activities: [
      { title: "Beach", sub: "Activities", icon: "adventure" },
      { title: "Coastal", sub: "Walks", icon: "sightseeing" },
      { title: "Family", sub: "Games", icon: "family" },
      { title: "Yoga", sub: "& Wellness", icon: "wellness" },
      { title: "Community", sub: "Gathering", icon: "community" },
    ],
  },

  SEP: {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Royal heritage architecture in Rajasthan",
    imageCaption: "Discover the royal city of Udaipur",
    activities: [
      { title: "Heritage", sub: "Tours", icon: "sightseeing" },
      { title: "Lake", sub: "Experiences", icon: "adventure" },
      { title: "Family", sub: "Activities", icon: "family" },
      { title: "Culture", sub: "Exploration", icon: "community" },
      { title: "Relax", sub: "& Rejuvenate", icon: "wellness" },
    ],
  },

  OCT: {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Green gardens and traditional architecture",
    imageCaption: "Experience the charm of Mysuru",
    activities: [
      { title: "Palace", sub: "Visit", icon: "sightseeing" },
      { title: "Garden", sub: "Walks", icon: "adventure" },
      { title: "Family", sub: "Fun", icon: "family" },
      { title: "Culture", sub: "Experience", icon: "community" },
      { title: "Wellness", sub: "Activities", icon: "wellness" },
    ],
  },

  NOV: {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Mountain river landscape in Rishikesh",
    imageCaption: "Reconnect with yourself in Rishikesh",
    activities: [
      { title: "River", sub: "Experiences", icon: "adventure" },
      { title: "Yoga", sub: "Sessions", icon: "wellness" },
      { title: "Sightseeing", sub: "Tours", icon: "sightseeing" },
      { title: "Family", sub: "Activities", icon: "family" },
      { title: "Community", sub: "Connect", icon: "community" },
    ],
  },

  DEC: {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Beautiful seaside coastline",
    imageCaption: "Celebrate together in Pondicherry",
    activities: [
      { title: "Beach", sub: "Walks", icon: "adventure" },
      { title: "French", sub: "Heritage", icon: "sightseeing" },
      { title: "Family", sub: "Gathering", icon: "family" },
      { title: "Wellness", sub: "Activities", icon: "wellness" },
      { title: "Community", sub: "Connect", icon: "community" },
    ],
  },
};
