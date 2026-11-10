export type Trip = {
  month: string;
  monthName: string;
  place: string;
  short: string;
  dates: string;
  status: "Registration Open" | "Coming Soon";
  category: "Wellness" | "Nature" | "Culture" | "Adventure";
  nights: string;
  stay: string;
  city: string;
  coords: [number, number];
  color: "green" | "sand";
  description: string;
};

export const trips: Trip[] = [
  { month: "JAN", monthName: "January", place: "Puri · Konark", short: "Puri & Konark", dates: "8 – 10 Jan 2027", status: "Registration Open", category: "Wellness", nights: "2 Nights / 3 Days", stay: "Toshali Sands Puri", city: "Puri, Odisha", coords: [19.8135, 85.8312], color: "green", description: "A refreshing coastal getaway blending wellness, community connection, heritage and beach experiences." },
  { month: "FEB", monthName: "February", place: "Araku Valley", short: "Araku Valley", dates: "12 – 14 Feb 2027", status: "Coming Soon", category: "Nature", nights: "2 Nights / 3 Days", stay: "Stay details soon", city: "Araku Valley, Andhra Pradesh", coords: [18.3273, 82.8775], color: "sand", description: "A slow-paced escape through misty hills, coffee plantations and beautiful valley viewpoints." },
  { month: "MAR", monthName: "March", place: "Coorg", short: "Coorg", dates: "Dates to be announced", status: "Coming Soon", category: "Nature", nights: "Details soon", stay: "Stay details soon", city: "Kodagu, Karnataka", coords: [12.3375, 75.8069], color: "sand", description: "Reconnect with nature among coffee estates, forest trails and the green hills of Coorg." },
  { month: "APR", monthName: "April", place: "Hampi", short: "Hampi", dates: "Dates to be announced", status: "Coming Soon", category: "Culture", nights: "Details soon", stay: "Stay details soon", city: "Hampi, Karnataka", coords: [15.335, 76.46], color: "sand", description: "Discover remarkable heritage, dramatic landscapes and stories from the Vijayanagara era." },
  { month: "MAY", monthName: "May", place: "Ooty", short: "Ooty", dates: "Dates to be announced", status: "Coming Soon", category: "Nature", nights: "Details soon", stay: "Stay details soon", city: "Ooty, Tamil Nadu", coords: [11.4102, 76.695], color: "sand", description: "Enjoy cool mountain air, scenic gardens and relaxed community time in the Nilgiris." },
  { month: "JUN", monthName: "June", place: "Goa", short: "Goa", dates: "Dates to be announced", status: "Coming Soon", category: "Wellness", nights: "Details soon", stay: "Stay details soon", city: "Goa, India", coords: [15.2993, 74.124], color: "sand", description: "A balanced coastal break with beach walks, local experiences and restorative activities." },
  { month: "JUL", monthName: "July", place: "Wayanad", short: "Wayanad", dates: "Dates to be announced", status: "Coming Soon", category: "Nature", nights: "Details soon", stay: "Stay details soon", city: "Wayanad, Kerala", coords: [11.6854, 76.132], color: "sand", description: "Explore waterfalls, green landscapes and refreshing monsoon-season experiences." },
  { month: "AUG", monthName: "August", place: "Gokarna", short: "Gokarna", dates: "Dates to be announced", status: "Coming Soon", category: "Wellness", nights: "Details soon", stay: "Stay details soon", city: "Gokarna, Karnataka", coords: [14.5479, 74.3188], color: "sand", description: "Unwind with peaceful beaches, coastal trails and time to recharge together." },
  { month: "SEP", monthName: "September", place: "Udaipur", short: "Udaipur", dates: "Dates to be announced", status: "Coming Soon", category: "Culture", nights: "Details soon", stay: "Stay details soon", city: "Udaipur, Rajasthan", coords: [24.5854, 73.7125], color: "sand", description: "Experience lakeside beauty, royal architecture and memorable cultural moments." },
  { month: "OCT", monthName: "October", place: "Mysuru", short: "Mysuru", dates: "Dates to be announced", status: "Coming Soon", category: "Culture", nights: "Details soon", stay: "Stay details soon", city: "Mysuru, Karnataka", coords: [12.2958, 76.6394], color: "sand", description: "A welcoming city break filled with heritage, gardens and local food experiences." },
  { month: "NOV", monthName: "November", place: "Rishikesh", short: "Rishikesh", dates: "Dates to be announced", status: "Coming Soon", category: "Adventure", nights: "Details soon", stay: "Stay details soon", city: "Rishikesh, Uttarakhand", coords: [30.0869, 78.2676], color: "sand", description: "Find your balance with river views, mindful sessions and gentle adventure options." },
  { month: "DEC", monthName: "December", place: "Pondicherry", short: "Pondicherry", dates: "Dates to be announced", status: "Coming Soon", category: "Wellness", nights: "Details soon", stay: "Stay details soon", city: "Puducherry, India", coords: [11.9416, 79.8083], color: "sand", description: "Close the year with colourful streets, relaxed cafés and a beautiful seaside atmosphere." },
];

export const categories = ["All Trips", "Wellness", "Nature", "Culture", "Adventure"] as const;

export const activities = [
  { title: "Community", sub: "Meeting" },
  { title: "Family", sub: "Games" },
  { title: "Sightseeing", sub: "Konark & Puri" },
  { title: "Wellness", sub: "Activities" },
  { title: "Family Fun", sub: "& Gathering" },
] as const;

export const departureCities = ["Hyderabad", "Chennai", "Bengaluru", "Visakhapatnam", "Tirupati", "Nellore", "Other"];
