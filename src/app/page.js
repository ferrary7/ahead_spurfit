import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Scroll />
      <AboutCard />
      <Footer />
    </>
  );
}
