import Hero from "@/components/home/Hero";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BookingCTA from "@/components/home/BookingCTA";
import WorkshopMap from "@/components/shared/WorkshopMap";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceGrid />
      <WhyChooseUs />
      <BookingCTA />
      <WorkshopMap />
    </main>
  );
}
