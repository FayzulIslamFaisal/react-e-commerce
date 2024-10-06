import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import HomeProductSearch from "./components/HomeProductSearch";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeProductSearch />
      <About />
    </>
  );
}
