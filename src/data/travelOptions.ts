
export type TravelMode = {
  title: string;
  detail: string;
  rows: string[];
  tone: "peach" | "sage";
};

export const travelOptions: Record<string, TravelMode[]> = {
  JAN: [
    {
      title: "By Flight",
      detail: "Fly to Bhubaneswar (BBI), then continue to Puri",
      tone: "peach",
      rows: [
        "Hyderabad → Bhubaneswar → Puri",
        "Chennai → Bhubaneswar → Puri",
        "Bengaluru → Bhubaneswar → Puri",
        "Visakhapatnam → Bhubaneswar → Puri",
      ],
    },
    {
      title: "By Train",
      detail: "Direct or connecting trains to Puri",
      tone: "sage",
      rows: [
        "Visakhapatnam → Puri",
        "Chennai → Puri",
        "Tirupati → Puri",
        "Nellore → Puri",
        "Hyderabad → Puri via connecting routes",
      ],
    },
    {
      title: "By Road",
      detail: "Road connections through Odisha",
      tone: "peach",
      rows: [
        "Hyderabad → Puri",
        "Visakhapatnam → Puri",
        "Chennai → Puri",
        "Bengaluru → Puri",
      ],
    },
  ],

  FEB: [
    {
      title: "By Flight",
      detail: "Fly to Visakhapatnam (VTZ), then travel to Araku",
      tone: "peach",
      rows: [
        "Hyderabad → Visakhapatnam → Araku",
        "Chennai → Visakhapatnam → Araku",
        "Bengaluru → Visakhapatnam → Araku",
        "Tirupati → Visakhapatnam → Araku",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Araku Valley",
      tone: "sage",
      rows: [
        "Visakhapatnam → Araku",
        "Hyderabad → Visakhapatnam → Araku",
        "Chennai → Visakhapatnam → Araku",
        "Bengaluru → Visakhapatnam → Araku",
      ],
    },
    {
      title: "By Road",
      detail: "Scenic road journey through the Eastern Ghats",
      tone: "peach",
      rows: [
        "Visakhapatnam → Araku",
        "Hyderabad → Araku",
        "Vijayawada → Araku",
        "Bengaluru → Araku",
      ],
    },
  ],

  MAR: [
    {
      title: "By Flight",
      detail: "Fly to Kannur or Mangaluru, then continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Kannur → Coorg",
        "Chennai → Mangaluru → Coorg",
        "Bengaluru → Coorg by road",
        "Visakhapatnam → Bengaluru → Coorg",
      ],
    },
    {
      title: "By Train",
      detail: "Reach nearby rail stations and continue by road",
      tone: "sage",
      rows: [
        "Hyderabad → Mysuru → Coorg",
        "Chennai → Mysuru → Coorg",
        "Bengaluru → Mysuru → Coorg",
        "Visakhapatnam → Mysuru → Coorg",
      ],
    },
    {
      title: "By Road",
      detail: "Road access through Karnataka and Kerala",
      tone: "peach",
      rows: [
        "Bengaluru → Coorg",
        "Mysuru → Coorg",
        "Chennai → Coorg",
        "Hyderabad → Coorg",
      ],
    },
  ],

  APR: [
    {
      title: "By Flight",
      detail: "Fly to Hubballi or nearby airports and continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Hubballi → Hampi",
        "Chennai → Bengaluru → Hampi",
        "Bengaluru → Hampi",
        "Visakhapatnam → Bengaluru → Hampi",
      ],
    },
    {
      title: "By Train",
      detail: "Rail access through Hospet and nearby stations",
      tone: "sage",
      rows: [
        "Hyderabad → Hosapete",
        "Bengaluru → Hosapete",
        "Chennai → Hosapete",
        "Tirupati → Hosapete via connections",
      ],
    },
    {
      title: "By Road",
      detail: "Highway connections to the Hampi heritage region",
      tone: "peach",
      rows: [
        "Bengaluru → Hampi",
        "Hyderabad → Hampi",
        "Chennai → Hampi",
        "Visakhapatnam → Hampi",
      ],
    },
  ],

  MAY: [
    {
      title: "By Flight",
      detail: "Fly to Coimbatore or Bengaluru and continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Coimbatore → Ooty",
        "Chennai → Coimbatore → Ooty",
        "Bengaluru → Ooty",
        "Visakhapatnam → Coimbatore → Ooty",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Mettupalayam and onward hill railway",
      tone: "sage",
      rows: [
        "Chennai → Mettupalayam → Ooty",
        "Bengaluru → Mettupalayam → Ooty",
        "Hyderabad → Coimbatore → Ooty",
        "Tirupati → Coimbatore → Ooty",
      ],
    },
    {
      title: "By Road",
      detail: "Scenic Nilgiri mountain road routes",
      tone: "peach",
      rows: [
        "Coimbatore → Ooty",
        "Bengaluru → Ooty",
        "Chennai → Ooty",
        "Mysuru → Ooty",
      ],
    },
  ],

  JUN: [
    {
      title: "By Flight",
      detail: "Fly directly to Goa's airport",
      tone: "peach",
      rows: [
        "Hyderabad → Goa",
        "Chennai → Goa",
        "Bengaluru → Goa",
        "Visakhapatnam → Goa",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Madgaon and other Goa stations",
      tone: "sage",
      rows: [
        "Hyderabad → Goa",
        "Chennai → Goa",
        "Bengaluru → Madgaon",
        "Visakhapatnam → Goa",
      ],
    },
    {
      title: "By Road",
      detail: "Well-connected coastal highway routes",
      tone: "peach",
      rows: [
        "Bengaluru → Goa",
        "Hyderabad → Goa",
        "Chennai → Goa",
        "Pune → Goa",
      ],
    },
  ],

  JUL: [
    {
      title: "By Flight",
      detail: "Fly to Kozhikode or Kannur and continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Kozhikode → Wayanad",
        "Chennai → Kozhikode → Wayanad",
        "Bengaluru → Kozhikode → Wayanad",
        "Visakhapatnam → Kozhikode → Wayanad",
      ],
    },
    {
      title: "By Train",
      detail: "Rail access through Kozhikode and nearby stations",
      tone: "sage",
      rows: [
        "Hyderabad → Kozhikode",
        "Chennai → Kozhikode",
        "Bengaluru → Kozhikode",
        "Visakhapatnam → Kozhikode",
      ],
    },
    {
      title: "By Road",
      detail: "Green mountain roads into Wayanad",
      tone: "peach",
      rows: [
        "Bengaluru → Wayanad",
        "Kozhikode → Wayanad",
        "Chennai → Wayanad",
        "Hyderabad → Wayanad",
      ],
    },
  ],

  AUG: [
    {
      title: "By Flight",
      detail: "Fly to Goa or Mangaluru and continue to Gokarna",
      tone: "peach",
      rows: [
        "Hyderabad → Goa → Gokarna",
        "Chennai → Mangaluru → Gokarna",
        "Bengaluru → Goa → Gokarna",
        "Visakhapatnam → Goa → Gokarna",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Gokarna Road and nearby stations",
      tone: "sage",
      rows: [
        "Mumbai → Gokarna Road",
        "Bengaluru → Gokarna Road",
        "Mangaluru → Gokarna Road",
        "Chennai → Bengaluru → Gokarna",
      ],
    },
    {
      title: "By Road",
      detail: "Coastal highway connections",
      tone: "peach",
      rows: [
        "Bengaluru → Gokarna",
        "Goa → Gokarna",
        "Mangaluru → Gokarna",
        "Hyderabad → Gokarna",
      ],
    },
  ],

  SEP: [
    {
      title: "By Flight",
      detail: "Fly to Maharana Pratap Airport, Udaipur",
      tone: "peach",
      rows: [
        "Hyderabad → Udaipur",
        "Chennai → Udaipur",
        "Bengaluru → Udaipur",
        "Delhi → Udaipur",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connectivity to Udaipur City",
      tone: "sage",
      rows: [
        "Hyderabad → Udaipur",
        "Chennai → Udaipur via connections",
        "Bengaluru → Udaipur via connections",
        "Delhi → Udaipur",
      ],
    },
    {
      title: "By Road",
      detail: "Highway access across Rajasthan",
      tone: "peach",
      rows: [
        "Jaipur → Udaipur",
        "Ahmedabad → Udaipur",
        "Delhi → Udaipur",
        "Mumbai → Udaipur",
      ],
    },
  ],

  OCT: [
    {
      title: "By Flight",
      detail: "Fly to Mysuru or Bengaluru",
      tone: "peach",
      rows: [
        "Hyderabad → Mysuru / Bengaluru",
        "Chennai → Mysuru / Bengaluru",
        "Bengaluru → Mysuru",
        "Visakhapatnam → Bengaluru → Mysuru",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Mysuru Junction",
      tone: "sage",
      rows: [
        "Bengaluru → Mysuru",
        "Chennai → Mysuru",
        "Hyderabad → Mysuru",
        "Tirupati → Mysuru",
      ],
    },
    {
      title: "By Road",
      detail: "Convenient road access through Karnataka",
      tone: "peach",
      rows: [
        "Bengaluru → Mysuru",
        "Chennai → Mysuru",
        "Coorg → Mysuru",
        "Hyderabad → Mysuru",
      ],
    },
  ],

  NOV: [
    {
      title: "By Flight",
      detail: "Fly to Dehradun Airport and continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Dehradun → Rishikesh",
        "Chennai → Dehradun → Rishikesh",
        "Bengaluru → Dehradun → Rishikesh",
        "Delhi → Dehradun → Rishikesh",
      ],
    },
    {
      title: "By Train",
      detail: "Rail connections to Haridwar and Rishikesh",
      tone: "sage",
      rows: [
        "Delhi → Haridwar → Rishikesh",
        "Hyderabad → Haridwar → Rishikesh",
        "Chennai → Haridwar → Rishikesh",
        "Bengaluru → Haridwar → Rishikesh",
      ],
    },
    {
      title: "By Road",
      detail: "Road connectivity from Uttarakhand and Delhi",
      tone: "peach",
      rows: [
        "Delhi → Rishikesh",
        "Dehradun → Rishikesh",
        "Haridwar → Rishikesh",
        "Chandigarh → Rishikesh",
      ],
    },
  ],

  DEC: [
    {
      title: "By Flight",
      detail: "Fly to Chennai and continue by road",
      tone: "peach",
      rows: [
        "Hyderabad → Chennai → Pondicherry",
        "Bengaluru → Chennai → Pondicherry",
        "Visakhapatnam → Chennai → Pondicherry",
        "Tirupati → Chennai → Pondicherry",
      ],
    },
    {
      title: "By Train",
      detail: "Rail access through Villupuram and nearby stations",
      tone: "sage",
      rows: [
        "Chennai → Villupuram → Pondicherry",
        "Bengaluru → Villupuram → Pondicherry",
        "Hyderabad → Villupuram → Pondicherry",
        "Visakhapatnam → Villupuram → Pondicherry",
      ],
    },
    {
      title: "By Road",
      detail: "Coastal East Coast Road and highway connections",
      tone: "peach",
      rows: [
        "Chennai → Pondicherry",
        "Bengaluru → Pondicherry",
        "Hyderabad → Pondicherry",
        "Tirupati → Pondicherry",
      ],
    },
  ],
};
