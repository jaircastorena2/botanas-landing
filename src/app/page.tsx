import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import CategoriesSection from "@/components/CategoriesSection";
import SalesFormatsSection from "@/components/SalesFormatsSection";
import IngredientsSection from "@/components/IngredientsSection";
import NutritionalTable from "@/components/NutritionalTable";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CategoriesSection />
        <SalesFormatsSection />
        <IngredientsSection />
        <NutritionalTable />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

