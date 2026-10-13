import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Gauge,
  Disc3,
  Wrench,
  CarFront,
  Settings,
} from "lucide-react";
import "./ServiceGrid.css";

const services = [
  {
    number: "01",
    title: "Tyre Fitting",
    description:
      "Professional tyre fitting to help keep your vehicle ready for the road.",
    icon: CircleDot,
    href: "/services/tyre-fitting",
  },
  {
    number: "02",
    title: "Wheel Balancing",
    description:
      "Help reduce vibration and support a smoother driving experience.",
    icon: Disc3,
    href: "/services/wheel-balancing",
  },
  {
    number: "03",
    title: "Wheel Alignment",
    description:
      "Alignment checks to support stable handling and even tyre wear.",
    icon: Gauge,
    href: "/services/wheel-alignment",
  },
  {
    number: "04",
    title: "Puncture Repairs",
    description:
      "Tyre inspections and repair options based on the damage and tyre condition.",
    icon: Wrench,
    href: "/services/puncture-repairs",
  },
  {
    number: "05",
    title: "Tyres & Alloy Wheels",
    description:
      "Explore tyre and wheel options to suit your vehicle and driving needs.",
    icon: CarFront,
    href: "/tyres-wheels",
  },
  {
    number: "06",
    title: "Suspension & Repairs",
    description:
      "Vehicle maintenance enquiries for suspension and other mechanical concerns.",
    icon: Settings,
    href: "/services/suspension-mechanical",
  },
];

export default function ServiceGrid() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading-row">
          <div className="services-heading-copy">
            <span className="services-eyebrow">
              <span />
              WHAT WE DO
            </span>

            <h2>
              THE RIGHT CARE.
              <br />
              <span>FOR EVERY DRIVE.</span>
            </h2>

            <p>
              From tyre and wheel services to vehicle maintenance,
              explore the services designed to keep you moving.
            </p>
          </div>

          <Link href="/services" className="services-view-all">
            VIEW ALL SERVICES
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-card-number">
                    {service.number}
                  </span>

                  <span className="service-card-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-bottom">
                  <span>EXPLORE SERVICE</span>
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="services-footer">
          <span className="services-footer-mark">ZZ.</span>
          <p>
            Not sure what your vehicle needs? Talk to our team to discuss
            the right next step.
          </p>
          <a href="tel:0718956445">
            CALL 071 895 6445
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
