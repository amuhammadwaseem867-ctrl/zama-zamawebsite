import InteriorPage from "../../components/layout/InteriorPage";

export const metadata = {
  title: "About Us | Zama Zama Auto Fitment Center",
  description:
    "Learn about Zama Zama Auto Fitment Center, serving drivers from Pacific Business Park, Jakes Gerwel Drive, Mitchell's Plain.",
};

const details = [
  { title: "Tyre & Wheel Services" },
  { title: "Vehicle Fitment Support" },
  { title: "Practical Repair Enquiries" },
  { title: "Customer-Focused Assistance" },
  { title: "Convenient Mitchell's Plain Location" },
  { title: "One Place for Everyday Vehicle Care" },
];

export default function AboutPage() {
  return (
    <InteriorPage
      eyebrow="ABOUT US / ZAMA ZAMA AUTO FITMENT CENTER"
      title="YOUR VEHICLE."
      highlight="OUR PRIORITY."
      description="Zama Zama Auto Fitment Center helps drivers with tyre fitting, wheel services and vehicle-care enquiries. Our focus is straightforward: understand what your vehicle needs and help you explore the right service."
      details={details}
      primaryHref="/services"
      primaryLabel="EXPLORE OUR SERVICES"
      secondaryHref="/contact"
      secondaryLabel="CONTACT OUR TEAM"
    />
  );
}
