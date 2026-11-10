"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Plane,
  Users,
  Heart,
  Leaf,
  BedDouble,
  Compass,
  Sparkles,
  Palmtree,
  Mountain,
  Utensils,
  CalendarCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Wellness First",
    text: "Every trip blends mindful movement, restorative activities and time in nature — travel that leaves you recharged.",
    tint: "bg-[#eef3e0]",
    fg: "text-forest",
  },
  {
    icon: Users,
    title: "Community Bonding",
    text: "Shared meals, family games and group experiences designed so families connect and friendships grow stronger.",
    tint: "bg-[#f8efe2]",
    fg: "text-copper-deep",
  },
  {
    icon: Compass,
    title: "Curated Destinations",
    text: "Hand-picked stays and itineraries across India — beaches, hills, heritage towns and spiritual escapes.",
    tint: "bg-[#f2ecf0]",
    fg: "text-[#7a5636]",
  },
];

const upcoming = [
  { month: "JAN", place: "Puri · Konark", note: "Registration Open" },
  { month: "FEB", place: "Araku Valley", note: "12 – 14 Feb" },
  { month: "MAR", place: "Coorg", note: "Coming Soon" },
  { month: "APR", place: "Hampi", note: "Coming Soon" },
];

const values = [
  { icon: Heart, label: "Family Time" },
  { icon: Mountain, label: "Nature & Adventure" },
  { icon: Utensils, label: "Inclusive Meals" },
  { icon: BedDouble, label: "Comfortable Stays" },
  { icon: Sparkles, label: "Lifelong Memories" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-banner relative isolate overflow-hidden">
        <div className="hero-overlay" />
        <div className="relative mx-auto flex min-h-[380px] max-w-[1440px] items-center px-4 py-14 sm:min-h-[420px] sm:px-8 lg:min-h-[470px] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-[640px]"
          >
            <p className="mb-3 text-[10px] font-bold tracking-[0.32em] text-[#634b2b] sm:text-xs">
              WELLSENSE COMMUNITY TRIPS
            </p>
            <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#2e3c1a]">
              Travel Together.
              <br />
              <em className="font-semibold text-[#8f5b35]">Live Well. Grow Together.</em>
            </h1>
            <p className="mt-5 max-w-[480px] border-l-[3px] border-[#667a39] pl-4 text-sm leading-6 text-[#352f23] sm:text-base">
              Curated community trips for WellSense families — explore new places, build stronger connections, learn,
              stay active and create lifelong memories.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/events" className="btn-forest">
                Explore 2027 Trips <ArrowRight size={17} aria-hidden />
              </Link>
              <Link href="/events#register" className="btn-outline">
                <Users size={17} aria-hidden /> Register Your Family
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hero-bottom-fade" />
      </section>

      {/* Why travel with us */}
      <section className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title justify-center text-center">
            <Sparkles className="text-copper" aria-hidden /> Trips Designed Around Well-Being
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[#6d604d]">
            More than a holiday — every WellSense trip is planned for health, connection and joy.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text, tint, fg }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#e8dece] bg-white/60 p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${tint} ${fg}`}>
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b5d4a]">{text}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured trip */}
      <section className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-6 overflow-hidden rounded-3xl border border-[#e8dece] bg-white/60 shadow-soft lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="trip-photo-wrap !rounded-none !border-0 !shadow-none lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
              alt="Tropical resort with swimming pool surrounded by palm trees"
              className="trip-photo lg:min-h-[340px] lg:max-h-none lg:h-full"
              loading="lazy"
            />
            <span className="photo-caption">
              <Palmtree size={15} aria-hidden /> Toshali Sands, Puri
            </span>
          </div>
          <div className="p-6 sm:p-8 lg:py-10 lg:pr-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6edd6] px-3 py-1 text-[11px] font-bold text-forest">
              <Plane size={13} aria-hidden /> Next Trip · Registration Open
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#50351f] sm:text-4xl">
              Puri &amp; Konark, Odisha
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#3d3528]">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} className="text-cocoa" aria-hidden /> 8 – 10 January 2027
              </span>
              <span className="inline-flex items-center gap-2">
                <BedDouble size={18} className="text-cocoa" aria-hidden /> 2 Nights / 3 Days
              </span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b5d4a]">
              A refreshing coastal getaway blending wellness, community connection, heritage and beach experiences —
              visit the Konark Sun Temple, enjoy beach time and unwind together at Toshali Sands Puri.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/events" className="btn-copper">
                View Event Details <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/events#calendar" className="btn-outline">
                <CalendarCheck size={16} aria-hidden /> Full 2027 Calendar
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Upcoming preview */}
      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <h2 className="section-title">
              <CalendarDays className="text-forest" aria-hidden /> Coming Up in 2027
            </h2>
            <Link href="/events#calendar" className="text-xs font-bold text-forest underline-offset-4 hover:underline sm:text-sm">
              See all 12 destinations →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {upcoming.map((u) => (
              <Link
                key={u.month}
                href="/events#calendar"
                className="month-tile !min-h-[120px] !items-start !text-left"
              >
                <span className="text-[11px] font-extrabold tracking-wide text-copper">{u.month}</span>
                <span className="mt-1 font-display text-base font-bold leading-snug text-[#33451e]">{u.place}</span>
                <span
                  className={`mt-auto inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${
                    u.note === "Registration Open" ? "bg-[#dce8c7] text-forest" : "bg-[#f0eadb] text-[#7a6a50]"
                  }`}
                >
                  {u.note}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-[#e2ead0] bg-[#f4f8ea]/70 px-5 py-4">
            {values.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-xs font-bold text-forest sm:text-sm">
                <Icon size={17} className="text-moss" aria-hidden /> {label}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[#756852]">
            <MapPin size={14} className="text-copper" aria-hidden />
            From the hills of Araku to the beaches of Gokarna — one community, twelve journeys.
          </div>
        </motion.div>
      </section>
    </>
  );
}
