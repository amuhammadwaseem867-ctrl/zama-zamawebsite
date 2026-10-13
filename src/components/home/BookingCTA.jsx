import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  CalendarDays,
} from "lucide-react";
import "./BookingCTA.css";

export default function BookingCTA() {
  return (
    <section className="booking-cta">
      <div className="booking-cta-inner">
        <div className="booking-cta-topline">
          <span className="booking-cta-eyebrow">
            <span className="booking-cta-dot" />
            YOUR NEXT DRIVE STARTS HERE
          </span>
          <span className="booking-cta-index">ZAMA ZAMA / AUTO CARE</span>
        </div>

        <div className="booking-cta-main">
          <div className="booking-cta-copy">
            <h2>
              LET'S GET
              <br />
              YOU <span>ROAD READY.</span>
            </h2>

            <p>
              Need new tyres, wheel alignment or help with vehicle maintenance?
              Get in touch with our team to discuss your next visit.
            </p>

            <div className="booking-cta-actions">
              <Link
                href="/book-appointment"
                className="booking-cta-primary"
              >
                <CalendarDays size={18} />
                BOOK AN APPOINTMENT
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="tel:0718956445"
                className="booking-cta-secondary"
              >
                <Phone size={17} />
                <span>
                  <small>GIVE OUR TEAM A CALL</small>
                  <strong>071 895 6445</strong>
                </span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="booking-cta-visual" aria-hidden="true">
            <div className="booking-cta-ring booking-cta-ring-one" />
            <div className="booking-cta-ring booking-cta-ring-two" />
            <div className="booking-cta-wheel">
              <div className="booking-cta-wheel-inner">
                <div className="booking-cta-wheel-hub">
                  <span>ZZ</span>
                </div>
              </div>
            </div>
            <span className="booking-cta-visual-label">
              READY FOR THE ROAD
            </span>
            <span className="booking-cta-visual-number">ZZ.01</span>
          </div>
        </div>

        <div className="booking-cta-bottom">
          <span>TYRES</span>
          <i />
          <span>WHEEL CARE</span>
          <i />
          <span>VEHICLE MAINTENANCE</span>
          <span className="booking-cta-bottom-mark">
            DRIVE WITH CONFIDENCE <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </section>
  );
}
