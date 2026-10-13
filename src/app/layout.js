import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import FloatingActions from "@/components/layout/FloatingActions";

export const metadata = {
  title: "Zama Zama Auto Fitment Center | Tyres, Wheels & Vehicle Care",
  description:
    "Get your vehicle road-ready with Zama Zama Auto Fitment Center. Explore tyre fitting, wheel balancing, wheel alignment, puncture repairs and vehicle care.",
  applicationName: "Zama Zama Auto Fitment Center",
  openGraph: {
    title: "Zama Zama Auto Fitment Center",
    description:
      "Your destination for tyre fitting, wheel alignment, balancing and vehicle care.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
