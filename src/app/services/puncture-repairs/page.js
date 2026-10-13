import InteriorPage from "../../../components/layout/InteriorPage";

export const metadata = {
  title: "Puncture Repairs | Zama Zama Auto Fitment Center",
  description:
    "Contact Zama Zama Auto Fitment Center in Mitchell's Plain to enquire about tyre puncture inspection and repair.",
};

const details = [
  { title: "Tyre Puncture Inspection" },
  { title: "Repair Suitability Assessment" },
  { title: "Tyre Condition Checks" },
  { title: "Tyre Pressure Checks" },
  { title: "Tyre Damage Assessment" },
  { title: "Replacement Advice When Needed" },
];

export default function PunctureRepairsPage() {
  return (
    <InteriorPage
      eyebrow="TYRE SERVICES / 04"
      title="FLAT TYRE?"
      highlight="LET'S CHECK IT."
      description="Have a tyre puncture or suspect a slow leak? Contact our team to check whether your tyre can be repaired safely or needs replacement."
      details={details}
      primaryHref="tel:0718956445"
      primaryLabel="CALL 071 895 6445"
      secondaryHref="/book-appointment"
      secondaryLabel="MAKE AN ENQUIRY"
    />
  );
}
