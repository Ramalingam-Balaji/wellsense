import type { Metadata } from "next";
import SiteHeader from "@/components/wellsense/SiteHeader";
import SiteFooter from "@/components/wellsense/SiteFooter";
import EventsPage from "@/components/wellsense/EventsPage";

export const metadata: Metadata = {
  title: "Events & Trips 2027 | WellSense Community",
  description:
    "Browse the WellSense 2027 community trip calendar — Puri & Konark, Araku Valley, Coorg, Hampi and more. Explore destinations on the map and register your family's interest.",
};

export default function Events() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <EventsPage />
      </main>
      <SiteFooter />
    </div>
  );
}
