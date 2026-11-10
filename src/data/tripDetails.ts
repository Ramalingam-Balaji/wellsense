
export type TripDetail = {
  title: string;
  description: string;
  highlights: {
    title: string;
    sub: string;
    icon: "community" | "family" | "explore" | "relax" | "discover";
  }[];
};

export type TripTabName =
  | "Overview"
  | "Itinerary"
  | "Stay (Resort)"
  | "Activities"
  | "Sightseeing"
  | "Travel Options"
  | "Meals"
  | "Registration";

export const tripDetails: Record<
  string,
  Record<TripTabName, TripDetail>
> = {
  JAN: {
    Overview: {
      title: "Trip Overview",
      description:
        "A refreshing 2-night community getaway to Puri – Konark, combining wellness, community engagement, family bonding, heritage and beach experiences at Toshali Sands Puri.",
      highlights: [
        { title: "Community", sub: "Connect", icon: "community" },
        { title: "Wellness", sub: "& Fitness", icon: "relax" },
        { title: "Explore", sub: "& Experience", icon: "explore" },
        { title: "Family", sub: "Time", icon: "family" },
        { title: "Relax", sub: "& Rejuvenate", icon: "discover" },
      ],
    },
    Itinerary: {
      title: "A Relaxed 3-Day Itinerary",
      description:
        "Day 1: Arrive at Toshali Sands, check in and attend the community welcome. Day 2: Explore Konark Sun Temple, enjoy wellness activities and a family evening. Day 3: Breakfast, beach time and departure.",
      highlights: [
        { title: "Arrival", sub: "& Welcome", icon: "community" },
        { title: "Heritage", sub: "Exploration", icon: "explore" },
        { title: "Group", sub: "Activities", icon: "family" },
        { title: "Beach", sub: "Time", icon: "relax" },
        { title: "Departure", sub: "Together", icon: "discover" },
      ],
    },
    "Stay (Resort)": {
      title: "Stay at Toshali Sands Puri",
      description:
        "A comfortable resort stay with family-friendly spaces, swimming pool access and convenient access to Puri and Konark. Final room allocation will be shared after package confirmation.",
      highlights: [
        { title: "Comfort", sub: "Stay", icon: "relax" },
        { title: "Swimming", sub: "Pool", icon: "discover" },
        { title: "Family", sub: "Rooms", icon: "family" },
        { title: "Resort", sub: "Facilities", icon: "explore" },
        { title: "Community", sub: "Spaces", icon: "community" },
      ],
    },
    Activities: {
      title: "Wellness & Family Activities",
      description:
        "Enjoy community connections, guided movement, family games, group activities and relaxed time to explore at your own pace.",
      highlights: [
        { title: "Yoga", sub: "Sessions", icon: "relax" },
        { title: "Family", sub: "Games", icon: "family" },
        { title: "Group", sub: "Activities", icon: "community" },
        { title: "Exploration", sub: "Time", icon: "explore" },
        { title: "Relax", sub: "Together", icon: "discover" },
      ],
    },
    Sightseeing: {
      title: "Explore Puri & Konark",
      description:
        "Discover the famous Konark Sun Temple, Puri beach and local cultural highlights. Sightseeing timings will be confirmed in the final itinerary.",
      highlights: [
        { title: "Konark", sub: "Sun Temple", icon: "explore" },
        { title: "Puri", sub: "Beach", icon: "discover" },
        { title: "Local", sub: "Culture", icon: "community" },
        { title: "Photography", sub: "Moments", icon: "family" },
        { title: "Heritage", sub: "Walks", icon: "relax" },
      ],
    },
    "Travel Options": {
      title: "Choose the Way You Travel",
      description:
        "Compare flight, train and road options from your city. The team will coordinate group travel preferences after interest registrations.",
      highlights: [
        { title: "Flight", sub: "Options", icon: "explore" },
        { title: "Train", sub: "Connections", icon: "discover" },
        { title: "Road", sub: "Travel", icon: "family" },
        { title: "Group", sub: "Planning", icon: "community" },
        { title: "Easy", sub: "Journey", icon: "relax" },
      ],
    },
    Meals: {
      title: "Meals & Dietary Preferences",
      description:
        "Share vegetarian, non-vegetarian, Jain or other dietary preferences during registration so the team can plan meals inclusively.",
      highlights: [
        { title: "Breakfast", sub: "Planning", icon: "discover" },
        { title: "Vegetarian", sub: "Options", icon: "relax" },
        { title: "Family", sub: "Dining", icon: "family" },
        { title: "Dietary", sub: "Choices", icon: "explore" },
        { title: "Community", sub: "Meals", icon: "community" },
      ],
    },
    Registration: {
      title: "Register Your Family Interest",
      description:
        "Submit your family count and travel preferences. This is an expression of interest, not a payment or confirmed booking.",
      highlights: [
        { title: "Member", sub: "Details", icon: "family" },
        { title: "Family", sub: "Count", icon: "community" },
        { title: "Travel", sub: "Preference", icon: "explore" },
        { title: "Room", sub: "Planning", icon: "discover" },
        { title: "Submit", sub: "Interest", icon: "relax" },
      ],
    },
  },
};

// Generate destination-specific starter content for the other months.
// This ensures every calendar destination has all eight tabs.
const destinations = {
  FEB: ["Araku Valley", "misty hills and coffee plantations"],
  MAR: ["Coorg", "coffee estates and forest trails"],
  APR: ["Hampi", "heritage monuments and ancient architecture"],
  MAY: ["Ooty", "cool mountain air and scenic gardens"],
  JUN: ["Goa", "beaches and coastal experiences"],
  JUL: ["Wayanad", "waterfalls and green landscapes"],
  AUG: ["Gokarna", "peaceful beaches and coastal trails"],
  SEP: ["Udaipur", "lakes and royal architecture"],
  OCT: ["Mysuru", "heritage palaces and gardens"],
  NOV: ["Rishikesh", "river views and mindful experiences"],
  DEC: ["Pondicherry", "seaside streets and French heritage"],
} as const;

const defaultHighlights = [
  { title: "Community", sub: "Connect", icon: "community" as const },
  { title: "Wellness", sub: "& Fitness", icon: "relax" as const },
  { title: "Explore", sub: "& Experience", icon: "explore" as const },
  { title: "Family", sub: "Time", icon: "family" as const },
  { title: "Discover", sub: "& Unwind", icon: "discover" as const },
];

const tabTitles: Record<TripTabName, string> = {
  Overview: "Trip Overview",
  Itinerary: "Explore Your Itinerary",
  "Stay (Resort)": "Accommodation & Stay",
  Activities: "Destination Activities",
  Sightseeing: "Explore Local Attractions",
  "Travel Options": "Choose Your Travel Options",
  Meals: "Meals & Dietary Preferences",
  Registration: "Register Your Family Interest",
};

const tabDescriptions: Record<TripTabName, string> = {
  Overview: "Discover the destination, connect with the community and enjoy a refreshing getaway.",
  Itinerary: "The detailed day-wise schedule will be announced closer to the trip date.",
  "Stay (Resort)": "Accommodation details, room categories and final resort information will be announced soon.",
  Activities: "Enjoy destination-based activities, family experiences and community wellness sessions.",
  Sightseeing: "Explore local attractions, scenic viewpoints and cultural highlights.",
  "Travel Options": "Compare available flight, train and road routes from your departure city.",
  Meals: "Share your dietary preferences so the community team can plan inclusive meals.",
  Registration: "Register your family's interest to help the team plan accommodation and logistics.",
};

export const completeTripDetails = {
  ...tripDetails,
  ...Object.fromEntries(
    Object.entries(destinations).map(([month, [place, experience]]) => [
      month,
      Object.fromEntries(
        (Object.keys(tabTitles) as TripTabName[]).map((tab) => [
          tab,
          {
            title:
              tab === "Overview"
                ? `${place} Trip Overview`
                : tabTitles[tab],
            description:
              tab === "Overview"
                ? `Discover ${place}, enjoying ${experience}. Experience community connection, family bonding, local culture and memorable moments together.`
                : `${tabDescriptions[tab]} Destination focus: ${place}. ${experience}.`,
            highlights: defaultHighlights,
          },
        ])
      ),
    ])
  ),
} as Record<string, Record<TripTabName, TripDetail>>;
