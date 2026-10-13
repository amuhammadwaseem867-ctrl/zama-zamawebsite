import InteriorPage from "../../components/layout/InteriorPage";

export const metadata = {
  title: "Book an Appointment | Zama Zama Auto Fitment Center",
  description:
    "Contact Zama Zama Auto Fitment Center to enquire about appointments for tyre fitting, wheel alignment, balancing and vehicle repairs.",
};

const details = [
  { title: "Tyre Fitting Enquiries" },
  { title: "Wheel Alignment & Balancing" },
  { title: "Puncture Repair Enquiries" },
  { title: "Suspension & Mechanical Repairs" },
  { title: "Tyres & Alloy Wheels" },
  { title: "Confirm Availability by Phone" },
];

export default function BookAppointmentPage() {
  return (
    <InteriorPage
      eyebrow="BOOK AN APPOINTMENT / GET STARTED"
      title="LET'S GET"
      highlight="YOU ROAD-READY."
      description="Tell our team which service you need and discuss availability before visiting. Call us directly to enquire about a suitable appointment."
      details={details}
      primaryHref="tel:0718956445"
      primaryLabel="CALL 071 895 6445"
      secondaryHref="https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain"
      secondaryLabel="GET DIRECTIONS"
    />
  );
}
