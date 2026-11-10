import type { Metadata } from "next";
import SiteHeader from "@/components/wellsense/SiteHeader";
import SiteFooter from "@/components/wellsense/SiteFooter";
import HomePage from "@/components/wellsense/HomePage";

export const metadata: Metadata = {
  title: "WellSense Community Trips | Travel Together. Live Well.",
  description:
    "Curated community trips for WellSense families — wellness, nature, culture and adventure across India. Explore the 2027 events calendar and register your interest.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomePage />
      </main>
      <SiteFooter />
    </div>
  );
}
