import InteriorPage from "../../../components/layout/InteriorPage";

export const metadata = {
  title: "Tyre Fitting | Zama Zama Auto Fitment Center",
  description:
    "Get professional tyre fitting for your vehicle at Zama Zama Auto Fitment Center in Mitchell's Plain.",
};

const details = [
  { title: "Professional Tyre Installation" },
  { title: "Tyre Condition Checks" },
  { title: "Tyre Replacement Assistance" },
  { title: "Wheel Balancing Support" },
  { title: "Tyre Safety Guidance" },
  { title: "Everyday Vehicle Tyre Care" },
];

export default function TyreFittingPage() {
  return (
    <InteriorPage
      eyebrow="TYRE SERVICES / 01"
      title="PROPER FITMENT."
      highlight="CONFIDENT DRIVING."
      description="Get help with tyre installation and replacement for your vehicle. Our team can assist you in choosing the right option for your driving needs."
      details={details}
      primaryHref="/book-appointment"
      primaryLabel="ENQUIRE ABOUT TYRE FITTING"
      secondaryHref="/services"
      secondaryLabel="EXPLORE ALL SERVICES"
    />
  );
}
