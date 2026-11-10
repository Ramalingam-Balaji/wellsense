"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Plane,
  TrainFront,
  CarFront,
  Users,
  Heart,
  BedDouble,
  Camera,
  Trophy,
  Dumbbell,
  Compass,
  Utensils,
  ClipboardList,
  ChevronRight,
  CheckCircle2,
  Clock3,
  Mountain,
  Palmtree,
  CalendarCheck,
  Sparkles,
  Loader2,
} from "lucide-react";
import { trips, categories, activities, departureCities } from "@/data/trips";

const TripMap = dynamic(() => import("./TripMap"), {
  ssr: false,
  loading: () => (
    <div className="map-shell flex items-center justify-center bg-[#eef0e4]" aria-label="Loading map">
      <Loader2 className="animate-spin text-moss" size={30} />
    </div>
  ),
});

/* ---------------- Page header ---------------- */
function EventsHeader() {
  return (
    <section className="hero-banner relative isolate overflow-hidden">
      <div className="hero-overlay" />
      <div className="relative mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <nav className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-[#78664f]" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-forest">
              Home
            </Link>
            <ChevronRight size={13} aria-hidden />
            <span className="text-forest">Events</span>
          </nav>
          <p className="mb-2 text-[10px] font-bold tracking-[0.32em] text-[#634b2b] sm:text-xs">
            WELLSENSE COMMUNITY TRIPS
          </p>
          <h1 className="max-w-[720px] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#2e3c1a]">
            Events &amp; <em className="font-semibold text-[#8f5b35]">Trips 2027</em>
          </h1>
          <p className="mt-4 max-w-[560px] border-l-[3px] border-[#667a39] pl-4 text-sm leading-6 text-[#352f23] sm:text-base">
            A full year of curated community getaways — browse the calendar, explore destinations on the map and
            register your family&rsquo;s interest.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {[
              { icon: CalendarDays, label: "12 destinations" },
              { icon: Compass, label: "4 experience categories" },
              { icon: Sparkles, label: "Registration open for Puri · Konark" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#d9c9ae] bg-[#fffdf7]/80 px-4 py-2 text-xs font-semibold text-[#4b4437] shadow-sm"
              >
                <Icon size={14} className="text-copper" aria-hidden /> {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom-fade" />
    </section>
  );
}

/* ---------------- Calendar strip ---------------- */
function CalendarStrip({ selected, setSelected }: { selected: number; setSelected: (i: number) => void }) {
  return (
    <section id="calendar" className="mx-auto max-w-[1440px] scroll-mt-24 px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <h2 className="section-title">
          <CalendarDays className="text-copper" aria-hidden /> 2027 Community Trip Calendar
        </h2>
        <p className="text-xs text-[#6d604d] sm:text-sm">A year of wellness, travel, learning and togetherness.</p>
      </div>
      <div className="calendar-grid">
        {trips.map((trip, i) => (
          <button
            key={trip.month}
            onClick={() => {
              setSelected(i);
              document.getElementById("trips")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-pressed={selected === i}
            className={`month-tile ${selected === i ? "month-active" : ""}`}
          >
            <span className="text-[11px] font-extrabold tracking-wide">{trip.month}</span>
            <span className="mt-1 text-center text-[11px] font-bold leading-tight sm:text-xs">{trip.place}</span>
            <span className="mt-2 hidden text-[9px] opacity-80 sm:block">
              {i === 0 ? "8 – 10 Jan" : "Coming Soon"}
            </span>
            {selected === i && <span className="mt-2 text-[9px] font-medium">✓ Open for Registration</span>}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Featured trip ---------------- */
function TripFeature({ trip }: { trip: (typeof trips)[number] }) {
  return (
    <section id="trips" className="mx-auto max-w-[1440px] scroll-mt-24 px-4 pt-7 sm:px-6 lg:px-8">
      <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.35fr]">
        <motion.div
          key={trip.month + "photo"}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="trip-photo-wrap"
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
            alt="Tropical resort with swimming pool surrounded by palm trees"
            className="trip-photo"
            loading="lazy"
          />
          <span className="photo-caption">
            <Palmtree size={15} aria-hidden /> Community getaway
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={trip.month + "details"}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.35 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6edd6] px-3 py-1 text-[11px] font-bold text-forest">
              <Plane size={13} aria-hidden /> {trip.status === "Registration Open" ? "Next Trip" : "Featured Destination"}
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[#50351f] sm:text-4xl lg:text-5xl">
              {trip.short}
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#3d3528]">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} className="text-cocoa" aria-hidden /> {trip.dates}
              </span>
              <span className="inline-flex items-center gap-2">
                <BedDouble size={18} className="text-cocoa" aria-hidden /> {trip.nights}
              </span>
            </div>
            <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-[#4b4437]">
              <MapPin size={18} className="mt-0.5 shrink-0 text-cocoa" aria-hidden />
              {trip.stay} <span className="font-normal text-[#82745f]">({trip.city})</span>
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b5d4a]">{trip.description}</p>
            <div className="mt-4 grid max-w-[620px] grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {activities.map(({ title, sub }) => (
                <div key={title} className="activity-tile">
                  {title === "Community" ? (
                    <Users size={22} aria-hidden />
                  ) : title === "Family" ? (
                    <Trophy size={22} aria-hidden />
                  ) : title === "Sightseeing" ? (
                    <Camera size={22} aria-hidden />
                  ) : title === "Wellness" ? (
                    <Heart size={22} aria-hidden />
                  ) : (
                    <Sparkles size={22} aria-hidden />
                  )}
                  <span>{title}</span>
                  <small>{sub}</small>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link href="/events#register" className="btn-copper">
                Register Your Interest <ArrowRight size={16} aria-hidden />
              </Link>
              <span className="text-xs text-[#877965]">
                {trip.status === "Registration Open"
                  ? "Interest registration is open"
                  : "Destination details will be updated soon"}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- Detail tabs ---------------- */
const tabItems = [
  { name: "Overview", icon: Compass },
  { name: "Itinerary", icon: CalendarDays },
  { name: "Stay (Resort)", icon: BedDouble },
  { name: "Activities", icon: Dumbbell },
  { name: "Sightseeing", icon: Mountain },
  { name: "Travel Options", icon: Plane },
  { name: "Meals", icon: Utensils },
  { name: "Registration", icon: ClipboardList },
] as const;

const tabCopy: Record<string, [string, string]> = {
  Overview: [
    "Trip Overview",
    "A refreshing 2-night community getaway to Puri – Konark, combining wellness, community engagement, family bonding, heritage and beach experiences at Toshali Sands Puri.",
  ],
  Itinerary: [
    "A relaxed 3-day itinerary",
    "Day 1: Arrive, check in and community welcome. Day 2: Konark heritage visit, wellness activities and family evening. Day 3: Breakfast, beach time and return journey.",
  ],
  "Stay (Resort)": [
    "Stay at Toshali Sands Puri",
    "A comfortable resort stay with family-friendly spaces, swimming pool access and convenient access to Puri and Konark. Final room allocation will be shared after package confirmation.",
  ],
  Activities: [
    "Wellness & family activities",
    "Community connect, guided movement, family games, group activities and relaxed time to explore at your own pace.",
  ],
  Sightseeing: [
    "Explore Puri & Konark",
    "Discover the Konark Sun Temple, Puri beach and local cultural highlights. Sightseeing timings will be confirmed in the final itinerary.",
  ],
  "Travel Options": [
    "Choose the way you travel",
    "Compare flight, train and road options from your city. The team will coordinate group travel preferences after interest registrations.",
  ],
  Meals: [
    "Meals & dietary preferences",
    "Share vegetarian, non-vegetarian, Jain or other dietary preferences during registration so the team can plan meals inclusively.",
  ],
  Registration: [
    "Register your family interest",
    "Submit your family count and travel preferences. This is an expression of interest, not a payment or confirmed booking.",
  ],
};

function TripTabs() {
  const [active, setActive] = useState<string>("Overview");
  const [title, description] = tabCopy[active];
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-[#e8dece] bg-white/55 shadow-soft">
        <div className="hide-scrollbar flex overflow-x-auto border-b border-[#e7ddcd]" role="tablist" aria-label="Trip details">
          {tabItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              role="tab"
              aria-selected={active === name}
              onClick={() => setActive(name)}
              className={`tab-button ${active === name ? "tab-active" : ""}`}
            >
              <Icon size={16} aria-hidden /> {name}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_2fr] lg:items-center"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-forest">{title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#625845]">{description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { i: Users, t: "Community", s: "Connect" },
                { i: Heart, t: "Family", s: "Time" },
                { i: Camera, t: "Explore", s: "& Experience" },
                { i: Sparkles, t: "Relax", s: "& Rejuvenate" },
                { i: Mountain, t: "Discover", s: "& Unwind" },
              ].map(({ i: Icon, t, s }) => (
                <div key={t} className="value-item">
                  <Icon size={26} aria-hidden />
                  <b>{t}</b>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- Travel options ---------------- */
function TravelOptions() {
  const options = [
    {
      title: "By Flight",
      icon: Plane,
      detail: "Fly to Bhubaneswar (BBI) → Puri (about 60 km / 1 hr by road)",
      rows: [
        "Hyderabad → Bhubaneswar → Puri",
        "Chennai → Bhubaneswar → Puri",
        "Bengaluru → Bhubaneswar → Puri",
        "Tirupati / Nellore → Puri via Chennai / BBI",
      ],
      tone: "peach",
    },
    {
      title: "By Train",
      icon: TrainFront,
      detail: "Direct or connecting trains to Puri",
      rows: [
        "Visakhapatnam → Puri (about 7.5 – 9.5 hrs)",
        "Chennai → Puri (about 22 hrs)",
        "Tirupati → Puri (about 25 – 28 hrs)",
        "Nellore → Puri (about 19 – 20 hrs)",
        "Hyderabad → Puri via Khurda / Bhubaneswar",
      ],
      tone: "sage",
    },
    {
      title: "By Road",
      icon: CarFront,
      detail: "Well-connected highways (good for group / family travel)",
      rows: [
        "Hyderabad → Puri (about 1,055 km)",
        "Visakhapatnam → Puri (about 450 km)",
        "Chennai → Puri (about 1,200 km)",
        "Bengaluru → Puri (about 1,400+ km)",
      ],
      tone: "peach",
    },
  ];
  return (
    <section id="travel" className="mx-auto max-w-[1440px] scroll-mt-24 px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <h2 className="section-title">
          <Plane className="text-forest" aria-hidden /> Travel Options to Reach Puri
        </h2>
        <p className="rounded-full bg-[#f0eadb] px-4 py-2 text-xs font-medium text-forest">
          Multiple convenient options from key cities
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {options.map(({ title, icon: Icon, detail, rows, tone }) => (
          <motion.article whileHover={{ y: -4 }} key={title} className={`travel-card ${tone}`}>
            <div className="flex items-center gap-3">
              <span className="travel-icon">
                <Icon size={24} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-[#583a22]">{title}</h3>
                <p className="text-[10px] text-[#6c604e]">{detail}</p>
              </div>
            </div>
            <ul className="mt-4 divide-y divide-[#e4d9c8]">
              {rows.map((row) => (
                <li key={row} className="flex items-start gap-2 py-2.5 text-xs font-medium text-[#383326]">
                  <Icon size={14} className="mt-0.5 shrink-0 text-cocoa" aria-hidden /> {row}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Map + destination filters ---------------- */
function MapAndFilters({
  selectedTrip,
  setSelected,
  category,
  setCategory,
}: {
  selectedTrip: (typeof trips)[number];
  setSelected: (i: number) => void;
  category: string;
  setCategory: (c: string) => void;
}) {
  const filtered = useMemo(
    () => trips.filter((t) => category === "All Trips" || t.category === category),
    [category]
  );

  const selectTrip = (month: string) => {
    const index = trips.findIndex((x) => x.month === month);
    setSelected(index);
    if (window.innerWidth < 1024) {
      document.querySelector(".map-shell")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="section-title">
            <MapPin className="text-cocoa" aria-hidden /> Explore Destinations
          </h2>
          <p className="mt-1 text-xs text-[#756852]">Browse the year&rsquo;s community trips by interest and location.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter destinations by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`filter-chip ${category === c ? "filter-selected" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <TripMap trip={selectedTrip} />
        <div className="destination-list" role="list" aria-label="Destinations">
          <AnimatePresence initial={false}>
            {filtered.map((t) => (
              <motion.button
                key={t.month}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                role="listitem"
                onClick={() => selectTrip(t.month)}
                className={`destination-row ${selectedTrip.month === t.month ? "destination-current" : ""}`}
              >
                <span className="destination-month">{t.month}</span>
                <span className="min-w-0 flex-1 text-left">
                  <b className="block text-sm text-[#3a3a27]">{t.short}</b>
                  <small className="text-[11px] text-[#7b6d58]">
                    {t.category} · {t.dates}
                  </small>
                </span>
                <ChevronRight size={17} className="shrink-0 text-[#9a8c74]" aria-hidden />
              </motion.button>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && <p className="p-5 text-sm text-[#766b59]">No destinations in this category yet.</p>}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Registration ---------------- */
function Registration() {
  const [count, setCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      id="register"
      className="mx-auto grid max-w-[1440px] scroll-mt-24 gap-4 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.35fr_0.9fr] lg:px-8"
    >
      <div className="form-panel">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title">
            <Users className="text-forest" aria-hidden /> Register Your Family
          </h2>
          <span className="rounded-full bg-[#edf1df] px-3 py-1 text-[10px] font-bold text-forest">Step 1 of 4</span>
        </div>
        <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-[#796d5a]">
          {["Member Details", "Family Members", "Trip Preferences", "Review & Submit"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <b className={`step-dot ${i === 0 ? "step-current" : ""}`}>{i + 1}</b>
              {s}
              {i !== 3 && <span className="mx-1 h-px w-4 bg-[#d7cbb8]" aria-hidden />}
            </span>
          ))}
        </div>

        {submitted ? (
          <div className="rounded-xl bg-[#edf4e5] p-6 text-center" role="status">
            <CheckCircle2 className="mx-auto text-forest" size={34} aria-hidden />
            <h3 className="mt-2 font-display text-xl font-bold text-forest">Interest saved in this demo</h3>
            <p className="mt-1 text-sm text-[#5e674e]">
              Connect this form to your backend or form service to receive registrations.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-forest mt-4">
              Submit another response
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-x-5 gap-y-3 sm:grid-cols-2"
          >
            <label className="field-label">
              Primary member full name *
              <input required placeholder="Enter your name" className="field-input" name="fullName" />
            </label>
            <label className="field-label">
              Mobile number *
              <input
                required
                type="tel"
                pattern="[0-9+ -]{10,15}"
                placeholder="+91  Enter mobile number"
                className="field-input"
                name="mobile"
              />
            </label>
            <label className="field-label">
              Email ID *
              <input required type="email" placeholder="Enter email address" className="field-input" name="email" />
            </label>
            <label className="field-label">
              City of departure *
              <select required className="field-input" name="city" defaultValue="">
                <option value="" disabled>
                  Select city
                </option>
                {departureCities.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="field-label">
              Preferred travel mode
              <select className="field-input" name="travelMode" defaultValue="Flight / Train / Road">
                <option>Flight / Train / Road</option>
                <option>Flight</option>
                <option>Train</option>
                <option>Road</option>
              </select>
            </label>
            <label className="field-label">
              Accommodation preference
              <select className="field-input" name="accommodation" defaultValue="Standard / Twin / Family Room">
                <option>Standard / Twin / Family Room</option>
                <option>Standard room</option>
                <option>Twin sharing</option>
                <option>Family room</option>
              </select>
            </label>
            <label className="field-label">
              Dietary preference
              <select className="field-input" name="dietary" defaultValue="Veg / Non-Veg / Jain / Other">
                <option>Veg / Non-Veg / Jain / Other</option>
                <option>Vegetarian</option>
                <option>Non-vegetarian</option>
                <option>Jain</option>
                <option>Other</option>
              </select>
            </label>
            <label className="field-label">
              Special requirements
              <input placeholder="e.g. senior citizen, medical, etc." className="field-input" name="special" />
            </label>
            <div className="flex items-center justify-between rounded-xl bg-[#f5f0e6] p-3 sm:col-span-2">
              <div>
                <b className="block text-xs text-[#413b2d]">Number of family members</b>
                <small className="text-[10px] text-[#80745f]">Including yourself</small>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="count-btn"
                  aria-label="Decrease family members"
                >
                  −
                </button>
                <b className="min-w-4 text-center" aria-live="polite">
                  {count}
                </b>
                <button
                  type="button"
                  onClick={() => setCount(Math.min(15, count + 1))}
                  className="count-btn"
                  aria-label="Increase family members"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
              <label className="flex max-w-sm items-start gap-2 text-[10px] leading-4 text-[#6d634f]">
                <input required type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#58722f]" />
                This is an interest registration to help the community team plan accommodation, meals and logistics. No
                payment required now.
              </label>
              <button className="btn-forest" type="submit">
                Submit Interest
              </button>
            </div>
          </form>
        )}
      </div>

      <aside className="plan-panel">
        <h2 className="section-title">
          <CalendarCheck className="text-forest" aria-hidden /> Your Community Travel Plan
        </h2>
        <p className="mt-1 text-xs text-[#7b6d58]">Illustrative registration summary</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="stat-tile">
            <Users size={18} aria-hidden />
            <b>24</b>
            <span>Families Registered</span>
          </div>
          <div className="stat-tile">
            <Users size={18} aria-hidden />
            <b>68</b>
            <span>Adults</span>
          </div>
          <div className="stat-tile">
            <Heart size={18} aria-hidden />
            <b>19</b>
            <span>Children</span>
          </div>
          <div className="stat-tile">
            <BedDouble size={18} aria-hidden />
            <b>30</b>
            <span>Rooms (Tentative)</span>
          </div>
        </div>
        <div className="mt-4 divide-y divide-[#e7ddca] rounded-xl bg-[#f7f3e8] px-4">
          <div className="summary-row">
            <span>
              <CalendarDays size={14} aria-hidden /> Trip
            </span>
            <b>Puri – Konark</b>
          </div>
          <div className="summary-row">
            <span>
              <CalendarDays size={14} aria-hidden /> Dates
            </span>
            <b>8 – 10 January 2027</b>
          </div>
          <div className="summary-row">
            <span>
              <MapPin size={14} aria-hidden /> Stay
            </span>
            <b>Toshali Sands Puri</b>
          </div>
          <div className="summary-row">
            <span>
              <Plane size={14} aria-hidden /> Travel Modes
            </span>
            <b className="text-xs">Train (48%) · Flight (34%) · Road (18%)</b>
          </div>
          <div className="summary-row">
            <span>
              <Clock3 size={14} aria-hidden /> Status
            </span>
            <b className="rounded-full bg-[#dce8c7] px-3 py-1 text-[10px] text-forest">Open for Registration</b>
          </div>
        </div>
      </aside>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function EventsPage() {
  const [selected, setSelected] = useState(0);
  const [category, setCategory] = useState<string>("All Trips");
  const trip = trips[selected];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, []);

  return (
    <>
      <EventsHeader />
      <CalendarStrip selected={selected} setSelected={setSelected} />
      <TripFeature trip={trip} />
      <TripTabs />
      <TravelOptions />
      <MapAndFilters
        selectedTrip={trip}
        setSelected={setSelected}
        category={category}
        setCategory={setCategory}
      />
      <Registration />
    </>
  );
}
