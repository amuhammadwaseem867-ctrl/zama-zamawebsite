import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import "./InteriorPage.css";

export default function InteriorPage({
  eyebrow = "ZAMA ZAMA AUTO FITMENT CENTER",
  title,
  highlight,
  description,
  details = [],
  primaryHref = "/book-appointment",
  primaryLabel = "BOOK AN APPOINTMENT",
  secondaryHref = "/services",
  secondaryLabel = "EXPLORE SERVICES",
}) {
  return (
    <main className={`interior-page ${["TYRES & WHEELS", "ABOUT US", "CONTACT /", "OUR SERVICES", "SERVICES /"].some((label) => eyebrow?.includes(label)) ? "interior-page-tyres" : ""}`}>
      <section className="interior-hero">
        <div className="interior-hero-grid" aria-hidden="true" />

        <div className="interior-container">
          <div className="interior-eyebrow">
            <span />
            {eyebrow}
          </div>

          <div className="interior-hero-content">
            <div className="interior-heading-column">
              <h1>
                {title}
                {highlight && (
                  <>
                    <br />
                    <span>{highlight}</span>
                  </>
                )}
              </h1>

              <p className="interior-description">{description}</p>

              <div className="interior-actions">
                <Link href={primaryHref} className="interior-primary-button">
                  {primaryLabel}
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href={secondaryHref}
                  className="interior-secondary-button"
                >
                  {secondaryLabel}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="interior-visual" aria-hidden="true">
              <div className="interior-visual-ring interior-visual-ring-one" />
              <div className="interior-visual-ring interior-visual-ring-two" />

              {["TYRES & WHEELS", "ABOUT US", "CONTACT /", "OUR SERVICES", "SERVICES /"].some((label) => eyebrow?.includes(label)) ? (
                <div className="interior-tyre" role="img" aria-label="Rotating tyre with alloy wheel">
                  <div className="interior-tyre-tread">
                    <div className="interior-tyre-sidewall">
                      <div className="interior-alloy-rim">
                        {Array.from({ length: 10 }, (_, index) => (
                          <span className="interior-alloy-spoke" key={index} />
                        ))}
                        <div className="interior-alloy-hub">
                          <span>ZZ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="interior-visual-mark">
                  <span>ZZ<span>.</span></span>
                  <small>AUTO FITMENT CENTER</small>
                </div>
              )}

              <div className="interior-visual-caption">
                <span className="interior-caption-dot" />
                CARE FOR EVERY DRIVE
              </div>
            </div>
          </div>

          <div className="interior-bottom-line">
            <span>TYRE & WHEEL CARE</span>
            <span>VEHICLE MAINTENANCE</span>
            <a href="tel:0718956445">
              <Phone size={15} />
              071 895 6445
            </a>
          </div>
        </div>
      </section>

      <section className="interior-details">
        <div className="interior-container">
          <div className="interior-details-heading">
            <div>
              <span className="interior-section-eyebrow">HOW WE CAN HELP</span>
              <h2>
                THE RIGHT CARE.
                <br />
                <span>MADE STRAIGHTFORWARD.</span>
              </h2>
            </div>

            <p>
              Speak with our team about your vehicle and the service you need.
              We’ll help you understand the available next steps.
            </p>
          </div>

          {details.length > 0 && (
            <div className="interior-detail-grid">
              {details.map((detail, index) => (
                <article className="interior-detail-card" key={detail.title ?? detail}>
                  <span className="interior-detail-number">
                    0{index + 1}
                  </span>
                  <CheckCircle2 size={22} />
                  <h3>{detail.title ?? detail}</h3>
                </article>
              ))}
            </div>
          )}

          <div className="interior-location-strip">
            <div className="interior-location-icon">
              <MapPin size={21} />
            </div>

            <div className="interior-location-copy">
              <strong>VISIT ZAMA ZAMA</strong>
              <span>
                Pacific Business Park, Jakes Gerwel Drive, Mitchell&apos;s Plain
              </span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET DIRECTIONS
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}





