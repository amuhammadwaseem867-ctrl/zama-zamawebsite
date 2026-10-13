import InteriorPage from "../../components/layout/InteriorPage";

export const metadata = {
  title: "Tyres & Alloy Wheels | Zama Zama Auto Fitment Center",
  description:
    "Enquire about tyres, alloy wheels, tyre replacement and fitment at Zama Zama Auto Fitment Center in Mitchell's Plain.",
};

const details = [
  { title: "Tyre Replacement Enquiries" },
  { title: "Alloy Wheel Options" },
  { title: "Tyre Size Assistance" },
  { title: "Tyre Condition & Safety Checks" },
  { title: "Tyre Fitting Services" },
  { title: "Wheel Balancing Enquiries" },
];

export default function TyresWheelsPage() {
  return (
    <InteriorPage
      eyebrow="TYRES & WHEELS / FIND YOUR FIT"
      title="THE RIGHT TYRES."
      highlight="THE RIGHT FIT."
      description="Explore tyre and alloy wheel options for your vehicle. Contact our team to discuss tyre sizes, replacement options, fitment and availability."
      details={details}
      primaryHref="tel:0718956445"
      primaryLabel="ENQUIRE ABOUT AVAILABILITY"
      secondaryHref="/services/tyre-fitting"
      secondaryLabel="EXPLORE TYRE FITTING"
    />
  );
}
