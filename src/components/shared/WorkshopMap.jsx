import { MapPin, Navigation } from "lucide-react";
import "./WorkshopMap.css";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain";

const embedUrl =
  "https://maps.google.com/maps?q=Pacific%20Business%20Park%2C%20Jakes%20Gerwel%20Drive%2C%20Mitchell%27s%20Plain&z=14&output=embed";

export default function WorkshopMap() {
  return (
    <section className="workshop-map-section" aria-labelledby="workshop-map-title">
      <div className="workshop-map-container">
        <div className="workshop-map-heading">
          <div className="workshop-map-copy">
            <span className="workshop-map-eyebrow">
              <MapPin size={15} aria-hidden="true" />
              VISIT OUR WORKSHOP
            </span>

            <h2 id="workshop-map-title">
              FIND <span>OUR LOCATION.</span>
            </h2>

            <p>
              Visit Zama Zama Auto Fitment Center for tyre fitting,
              wheel services and vehicle repairs.
            </p>

            <div className="workshop-map-address">
              <MapPin size={19} aria-hidden="true" />
              <span>
                Pacific Business Park,
                <br />
                Jakes Gerwel Drive, Mitchell&apos;s Plain
              </span>
            </div>

            <a
              className="workshop-map-directions"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={17} aria-hidden="true" />
              GET DIRECTIONS
            </a>
          </div>

          <div className="workshop-map-frame">
            <iframe
              src={embedUrl}
              title="Google Maps location for Zama Zama Auto Fitment Center near Pacific Business Park, Mitchell's Plain"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
