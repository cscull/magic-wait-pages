import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParkCards from "@/components/ParkCards";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import WatchSection from "@/components/WatchSection";
import FreeCallout from "@/components/FreeCallout";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import FadeObserver from "@/components/FadeObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParkCards />
        <Features />
        <Screenshots />
        <WatchSection />
        <FreeCallout />
        <DownloadCTA />
      </main>
      <Footer />
      <FadeObserver />
    </>
  );
}
