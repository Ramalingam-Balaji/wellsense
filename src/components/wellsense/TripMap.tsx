"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation } from "lucide-react";
import { trips, type Trip } from "@/data/trips";

const pinIcon = new L.DivIcon({
  className: "trip-pin",
  html: '<span><b>✦</b></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -14],
});

const pinIconSoon = new L.DivIcon({
  className: "trip-pin trip-pin-soon",
  html: '<span><b>✦</b></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -14],
});

function MapController({
  trip,
  markersRef,
}: {
  trip: Trip;
  markersRef: React.RefObject<Record<string, L.Marker | null>>;
}) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(trip.coords, 6, { duration: 1.2 });
    const t = setTimeout(() => {
      markersRef.current?.[trip.month]?.openPopup();
    }, 1350);
    return () => clearTimeout(t);
  }, [map, trip, markersRef]);
  return null;
}

export default function TripMap({ trip }: { trip: Trip }) {
  const markersRef = useRef<Record<string, L.Marker | null>>({});

  return (
    <div className="map-shell">
      <MapContainer
        center={trips[0].coords}
        zoom={6}
        minZoom={5}
        scrollWheelZoom={false}
        className="trip-map"
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController trip={trip} markersRef={markersRef} />
        {trips.map((t) => (
          <Marker
            key={t.month}
            position={t.coords}
            icon={t.status === "Registration Open" ? pinIcon : pinIconSoon}
            ref={(m) => {
              markersRef.current[t.month] = m;
            }}
          >
            <Popup>
              <b>{t.short}</b>
              <br />
              {t.dates} · {t.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="map-label">
        <Navigation size={14} aria-hidden /> Explore trip location
      </div>
    </div>
  );
}
