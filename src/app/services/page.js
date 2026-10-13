import InteriorPage from "../../components/layout/InteriorPage";

export const metadata = {
  title: "Automotive Services | Zama Zama Auto Fitment Center",
  description:
    "Explore tyre fitting, wheel alignment, wheel balancing, puncture repairs and suspension services at Zama Zama Auto Fitment Center.",
};

const services = [
  { title: "Professional Tyre Fitting" },
  { title: "Wheel Alignment" },
  { title: "Wheel Balancing" },
  { title: "Puncture Repairs" },
  { title: "Suspension & Mechanical Repairs" },
  { title: "Brakes, Batteries & General Repairs" },
];

export default function ServicesPage() {
  return (
    <InteriorPage
      eyebrow="OUR SERVICES / AUTOMOTIVE CARE"
      title="RELIABLE SERVICE."
      highlight="BETTER DRIVING."
      description="From tyre fitting and wheel alignment to everyday vehicle repairs, we help you keep your vehicle ready for the road."
      details={services}
      primaryHref="/book-appointment"
      primaryLabel="BOOK AN APPOINTMENT"
      secondaryHref="tel:0718956445"
      secondaryLabel="CALL 071 895 6445"
    />
  );
}
