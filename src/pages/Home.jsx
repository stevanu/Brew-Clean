import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import BusinessInfoBar from "../components/organisms/BusinessInfoBar";
import AboutSection from "../components/organisms/AboutSection";
import { GallerySection } from "../components/organisms/GallerySection";
import LocationSection from "../components/organisms/LocationSection";
import Footer from "../components/organisms/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <BusinessInfoBar />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <Footer />
      </main>
    </>
  );
}

export default Home;
