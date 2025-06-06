import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/components/layout/MainLayout";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Experience />
      <WhyUs />
      <Footer />
    </MainLayout>
  );
}
