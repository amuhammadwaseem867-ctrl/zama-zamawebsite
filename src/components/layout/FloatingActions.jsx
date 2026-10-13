"use client";

import { MapPin, Phone } from "lucide-react";
import "./FloatingActions.css";

const locationUrl =
  "https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain";

export default function FloatingActions() {
  return (
    <aside className="zz-floating-actions" aria-label="Quick contact actions">
      <a
        className="zz-floating-action"
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find our workshop on Google Maps"
      >
        <span className="zz-floating-action__icon">
          <MapPin size={20} />
        </span>
        <span className="zz-floating-action__label">OUR LOCATION</span>
      </a>

      <a
        className="zz-floating-action zz-floating-action--contact"
        href="tel:0718956445"
        aria-label="Call Zama Zama Auto Fitment Center"
      >
        <span className="zz-floating-action__icon">
          <Phone size={19} />
        </span>
        <span className="zz-floating-action__label">CONTACT US</span>
      </a>
    </aside>
  );
}
