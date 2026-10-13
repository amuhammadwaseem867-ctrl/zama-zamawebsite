import InteriorPage from "../../../components/layout/InteriorPage";

export const metadata = {
  title: "Wheel Balancing | Zama Zama Auto Fitment Center",
  description:
    "Enquire about wheel balancing to help reduce vibration and support smoother driving in Mitchell's Plain.",
};

const details = [
  { title: "Wheel Balance Checks" },
  { title: "Steering Vibration Assessment" },
  { title: "Tyre & Wheel Inspection" },
  { title: "High-Speed Vibration Checks" },
  { title: "Tyre Wear Assessment" },
  { title: "Balancing After Tyre Replacement" },
];

export default function WheelBalancingPage() {
  return (
    <InteriorPage
      eyebrow="WHEEL SERVICES / 03"
      title="LESS VIBRATION."
      highlight="SMOOTHER RIDES."
      description="Feeling vibration through the steering wheel or vehicle? Ask our team about wheel balancing and have your tyres and wheels checked."
      details={details}
      primaryHref="/book-appointment"
      primaryLabel="ENQUIRE ABOUT BALANCING"
      secondaryHref="/services"
      secondaryLabel="EXPLORE ALL SERVICES"
    />
  );
}
