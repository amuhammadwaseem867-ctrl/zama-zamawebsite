import InteriorPage from "../../../components/layout/InteriorPage";

export const metadata = {
  title: "Suspension & Mechanical Repairs | Zama Zama Auto Fitment Center",
  description:
    "Enquire about suspension checks and general mechanical repairs at Zama Zama Auto Fitment Center in Mitchell's Plain.",
};

const details = [
  { title: "Suspension Inspection" },
  { title: "Steering Component Checks" },
  { title: "Brake System Enquiries" },
  { title: "Battery & Starting Issues" },
  { title: "Oil & Filter Service Enquiries" },
  { title: "General Mechanical Assessment" },
];

export default function SuspensionMechanicalPage() {
  return (
    <InteriorPage
      eyebrow="VEHICLE CARE / 05"
      title="BUILT FOR"
      highlight="THE ROAD AHEAD."
      description="From suspension concerns and steering issues to general mechanical enquiries, contact our team to discuss your vehicle's needs and available services."
      details={details}
      primaryHref="tel:0718956445"
      primaryLabel="CALL 071 895 6445"
      secondaryHref="/book-appointment"
      secondaryLabel="MAKE AN ENQUIRY"
    />
  );
}
