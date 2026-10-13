import InteriorPage from "../../../components/layout/InteriorPage";

export const metadata = {
  title: "Wheel Alignment | Zama Zama Auto Fitment Center",
  description:
    "Enquire about wheel alignment services at Zama Zama Auto Fitment Center in Mitchell's Plain.",
};

const details = [
  { title: "Wheel Alignment Checks" },
  { title: "Steering Pull Assessment" },
  { title: "Uneven Tyre Wear Inspection" },
  { title: "Steering & Handling Checks" },
  { title: "Tyre Wear Prevention Guidance" },
  { title: "General Vehicle Inspection" },
];

export default function WheelAlignmentPage() {
  return (
    <InteriorPage
      eyebrow="WHEEL SERVICES / 02"
      title="STRAIGHTER TRACKING."
      highlight="SMOOTHER DRIVING."
      description="If your vehicle pulls to one side or your tyres show uneven wear, enquire about a wheel alignment check to help improve handling and tyre life."
      details={details}
      primaryHref="/book-appointment"
      primaryLabel="ENQUIRE ABOUT ALIGNMENT"
      secondaryHref="/services"
      secondaryLabel="EXPLORE ALL SERVICES"
    />
  );
}
