import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const CountryCart = ({ countryItem }) => {
  const { flags, name, population, capital, region } = countryItem;
  const fallbackImage =
    "/images/top-10-tourist-places-to-visit-in-bangladesh.webp";
  const imageSrc = flags?.png || fallbackImage;
  return (
    <div className=" border-solid border-2 flex-1 bg-gradient-to-tr from-[#080509] via-[#1a171c] to-[#080509] text-slate-300 shadow-md shadow-gray-700 px-4 py-7 rounded-3xl">
      <div className="image w-full h-[140px] relative mb-4">
        <Image
          fill={true}
          sizes="100vw"
          src={imageSrc}
          alt={flags?.alt || `${name?.common} flag`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="">
        <h3>
          <strong className="text-white">Name:-- </strong>{" "}
          {name?.common.length > 20
            ? name?.common.slice(0, 20) + "..."
            : name?.common}
        </h3>
        {/* <p>{population}</p> */}
        <p>
          {" "}
          <strong className="text-white">Capital:-- </strong> {capital[0]}
        </p>
        <p>
          <strong className="text-white">Region:-- </strong> {region}
        </p>
        <p className="pb-4">
          {" "}
          <strong className="text-white">Population:-- </strong>{" "}
          {population.toLocaleString()}
        </p>
        <Link
          href={`/country-detail/${name?.common}`}
          className="flex max-w-max gap-2 items-center border-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black "
        >
          Read More <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default CountryCart;
