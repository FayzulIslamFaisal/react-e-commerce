import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex items-center col-span-1 md:col-span-2 gap-2 md:gap-5 container mx-auto text-white py-[50px] md:pt-[100px] px-4  ">
      <div className="flex-1">
        <h1 className="capitalize text-3xl md:text-5xl mb-4 ">
          Explore the world, one country at a time.
        </h1>
        <p className="text-lg pb-4">
          Exploring the world one country at a time is an amazing way to immerse
          yourself in diverse cultures, landscapes, and histories.
        </p>
        <button className="flex gap-2 items-center border-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black ">
          Start Exploring <FaLongArrowAltRight />
        </button>
      </div>
      <div className="w-full md:h-[400px] h-[300px] relative flex-1">
        <Image
          fill
          sizes="100vw"
          src={`/images/top-10-tourist-places-to-visit-in-bangladesh.webp`}
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
