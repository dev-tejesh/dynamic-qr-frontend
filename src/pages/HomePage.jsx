import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import PricingPlans from "../components/home/PricingPlans";
import Testimonials from "../components/home/Testimonials";
import Cta from "../components/home/Cta";

const HomePage = () => {
  // Update document title
  React.useEffect(() => {
    document.title = "QRforge | Create Static & Dynamic QR Codes";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PricingPlans />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
