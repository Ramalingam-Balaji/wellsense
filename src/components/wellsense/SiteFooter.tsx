"use client";

import Link from "next/link";
import { Users, ArrowRight, Leaf, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer-cta">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[#f5eddb]/15 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-3xl font-bold italic text-[#fff8e9] sm:text-4xl">Let&rsquo;s Travel Together</p>
            <p className="mt-2 text-sm text-[#f5eddb]">Be part of the WellSense Community Trips.</p>
            <p className="mt-1 text-xs text-[#e8dcc0]">Explore · Learn · Stay Healthy · Build Lifelong Bonds</p>
          </div>
          <Link href="/events#register" className="btn-light w-full sm:w-auto">
            <Users size={16} aria-hidden /> Register Interest <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-[#e8dcc0] sm:flex-row sm:items-center">
          <p className="flex items-center gap-2">
            <Leaf size={13} aria-hidden /> WellSense Community Trips · A wellness initiative for families
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} aria-hidden /> India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={12} aria-hidden /> community@wellsense.in
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
