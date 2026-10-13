import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Gauge,
  Wrench,
  Users,
} from "lucide-react";
import "./WhyChooseUs.css";

const advantages = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Care That Comes First",
    description:
      "We put vehicle safety, clear communication and the customer's needs at the centre of every visit.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Attention to Detail",
    description:
      "From tyre fitment to wheel balancing, every service deserves a careful and considered approach.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Practical Vehicle Care",
    description:
      "Discuss your vehicle's needs with our team and understand the available service options before proceeding.",
  },
  {
    number: "04",
    icon: Users,
    title: "A Personal Approach",
    description:
      "Straightforward conversations and helpful guidance to make your next workshop visit easier.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-topline">
          <span className="why-eyebrow">
            <span className="why-eyebrow-line" />
            THE ZAMA ZAMA APPROACH
          </span>
          <span className="why-index">BUILT AROUND YOUR DRIVE / 01—04</span>
        </div>

        <div className="why-layout">
          <div className="why-intro">
            <h2>
              MORE THAN
              <br />
              A WORKSHOP.
              <br />
              <span>YOUR ROAD PARTNER.</span>
            </h2>

            <p className="why-description">
              Looking after your vehicle should feel straightforward.
              We focus on attentive service, practical guidance and helping
              you make informed decisions about your vehicle.
            </p>

            <Link href="/about" className="why-link">
              GET TO KNOW US
              <span className="why-link-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <div className="why-brand-signature" aria-hidden="true">
              <span className="why-brand-zz">ZZ<span>.</span></span>
              <span className="why-brand-caption">
                ZAMA ZAMA
                <br />
                AUTO FITMENT CENTER
              </span>
            </div>
          </div>

          <div className="why-features">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article className="why-feature" key={item.number}>
                  <div className="why-feature-number">{item.number}</div>

                  <div className="why-feature-icon">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <div className="why-feature-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="why-feature-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
