import InteriorPage from "../../components/layout/InteriorPage";
import WorkshopMap from "../../components/shared/WorkshopMap";

export const metadata = {
  title: "Contact Us | Zama Zama Auto Fitment Center",
  description:
    "Contact Zama Zama Auto Fitment Center on 071 895 6445 or find our workshop at Pacific Business Park, Jakes Gerwel Drive, Mitchell's Plain.",
};

const details = [
  { title: "Phone: 071 895 6445" },
  { title: "Pacific Business Park" },
  { title: "Jakes Gerwel Drive" },
  { title: "Mitchell's Plain" },
  { title: "Tyre & Wheel Enquiries" },
  { title: "Vehicle Repair Enquiries" },
];

export default function ContactPage() {
  return (
    <>
      <InteriorPage
        eyebrow="CONTACT / WE'RE HERE TO HELP"
        title="LET'S TALK"
        highlight="ABOUT YOUR VEHICLE."
        description="Need tyre fitting, wheel services or help with a vehicle issue? Call our team to discuss your requirements and confirm service availability."
        details={details}
        primaryHref="tel:0718956445"
        primaryLabel="CALL 071 895 6445"
        secondaryHref="https://www.google.com/maps/search/?api=1&query=Pacific+Business+Park%2C+Jakes+Gerwel+Drive%2C+Mitchell%27s+Plain"
        secondaryLabel="GET DIRECTIONS"
      />
      <WorkshopMap />
    </>
  );
}
