import Image from "next/image";
import HeroSection from "./components/homeComponent/HeroSection";
import About from "./components/About";
import HomeProductSearch from "./components/homeComponent/HomeProductSearch";
import HomeCategory from "./components/homeComponent/HomeCategory";
import HomeCategoryShowCase from "./components/homeComponent/HomeCategoryShowCase";
import Register from "./components/homeComponent/Register";
import LocationSprade from "./components/homeComponent/LocationSprade";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeProductSearch />
      <HomeCategory />
      <HomeCategoryShowCase />
      <Register />
      {/* <LocationSprade /> */}
      {/* <About /> */}
    </>
  );
}
