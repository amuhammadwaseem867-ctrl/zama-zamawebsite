import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import "./Hero.css";

const services = [
  "TYRE FITTING",
  "WHEEL ALIGNMENT",
  "WHEEL BALANCING",
  "TYRES & ALLOY WHEELS",
  "PUNCTURE REPAIRS",
  "BRAKE SERVICE",
  "OIL & FILTER CHANGE",
  "BATTERY REPLACEMENT",
  "SUSPENSION REPAIRS",
  "ENGINE DIAGNOSTICS",
  "GENERAL AUTO REPAIRS",
  "VEHICLE INSPECTIONS",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            ZAMA ZAMA AUTO FITMENT CENTER
          </div>

          <h1 className="hero-title">
            BUILT FOR THE ROAD.
            <br />
            READY FOR <span>ANYTHING.</span>
          </h1>

          <p className="hero-description">
            From tyres and wheel alignment to everyday vehicle maintenance,
            get your car ready for the road with automotive care you can rely on.
          </p>

          <div className="hero-actions">
            <Link
              href="/book-appointment"
              className="hero-button hero-button-primary"
            >
              BOOK AN APPOINTMENT
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/services"
              className="hero-button hero-button-secondary"
            >
              EXPLORE OUR SERVICES
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="hero-trust-points">
            <span>
              <CheckCircle2 size={16} />
              TYRE & WHEEL CARE
            </span>

            <span>
              <CheckCircle2 size={16} />
              VEHICLE MAINTENANCE
            </span>
          </div>
        </div>

        <div className="hero-side-label" aria-hidden="true">
          <span>DRIVE WITH CONFIDENCE</span>
          <span className="hero-side-line" />
          <span>ZZ. / AUTO FITMENT</span>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-label">
          <span className="hero-live-dot" />
          <span>OUR SERVICES</span>
        </div>

        <div
          className="hero-services-window"
          aria-label="Automotive services"
        >
          <div className="hero-services-track">
            {[...services, ...services].map((service, index) => (
              <span
                className="hero-service-item"
                key={`${service}-${index}`}
                aria-hidden={index >= services.length ? "true" : undefined}
              >
                <span className="hero-service-marker" />
                {service}
              </span>
            ))}
          </div>
        </div>

        <a href="tel:0718956445" className="hero-call-link">
          <Phone size={16} />
          <span>071 895 6445</span>
        </a>
      </div>
    </section>
  );
}
