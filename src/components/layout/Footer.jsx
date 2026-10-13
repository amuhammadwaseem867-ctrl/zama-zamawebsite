import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Clock3,
  Navigation,
} from "lucide-react";
import "./Footer.css";

const services = [
  { label: "Tyre Fitting", href: "/services/tyre-fitting" },
  { label: "Wheel Alignment", href: "/services/wheel-alignment" },
  { label: "Wheel Balancing", href: "/services/wheel-balancing" },
  { label: "Puncture Repairs", href: "/services/puncture-repairs" },
  { label: "Tyres & Alloy Wheels", href: "/tyres-wheels" },
  { label: "Suspension & Repairs", href: "/services/suspension-mechanical" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book an Appointment", href: "/book-appointment" },
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand-column">
            <Link
              href="/"
              className="footer-brand"
              aria-label="Zama Zama Auto Fitment Center home"
            >
              <span className="footer-brand-mark">
                ZZ<span>.</span>
              </span>

              <span className="footer-brand-copy">
                <strong>ZAMA ZAMA</strong>
                <span>AUTO FITMENT CENTER</span>
              </span>
            </Link>

            <p className="footer-brand-description">
              Your local destination for tyre and wheel care, fitment services
              and everyday vehicle maintenance.
            </p>

            <a href="tel:0718956445" className="footer-call-button">
              <span className="footer-call-icon">
                <Phone size={18} />
              </span>
              <span className="footer-call-copy">
                <small>CALL OUR TEAM</small>
                <strong>071 895 6445</strong>
              </span>
              <ArrowUpRight size={18} className="footer-call-arrow" />
            </a>
          </div>

          <div className="footer-link-column">
            <h2 className="footer-heading">EXPLORE</h2>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-column">
            <h2 className="footer-heading">OUR SERVICES</h2>
            <ul className="footer-link-list">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    <span>{service.label}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-column">
            <h2 className="footer-heading">FIND OUR WORKSHOP</h2>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <MapPin size={19} />
              </span>
              <div>
                <strong>OUR LOCATION</strong>
                <p>
                  Pacific Business Park,
                  <br />
                  Jakes Gerwel Drive,
                  <br />
                  Mitchell&apos;s Plain
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <Phone size={18} />
              </span>
              <div>
                <strong>PHONE</strong>
                <a href="tel:0718956445">071 895 6445</a>
              </div>
            </div>

            <a
              href={mapsUrl}
              className="footer-directions-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} />
              GET DIRECTIONS
              <ArrowUpRight size={16} />
            </a>

            <div className="footer-hours-note">
              <Clock3 size={15} />
              <span>Contact us to enquire about workshop hours.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-brand-banner" aria-hidden="true">
        <span>ZAMA ZAMA</span>
        <span className="footer-banner-dot">.</span>
        <span>AUTO FITMENT CENTER</span>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © 2026 Zama Zama Auto Fitment Center.
            All rights reserved.
          </p>

          <span className="footer-bottom-tagline">
            CARE FOR THE DRIVE. CONFIDENCE FOR THE ROAD.
          </span>

          <Link href="/" className="footer-back-top">
            BACK TO TOP <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

