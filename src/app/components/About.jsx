import CountryData from "@/app/data/CountryData";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-[30px] md:py-[60px]">
        <h1 className="text-2xl md:text-4xl text-center text-white">
          Here’s a interesting facts from <br /> different countries
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5  ">
          {CountryData?.map((items) => {
            const { countryName, id, capital, population, interestingFact } =
              items;
            return (
              <div
                key={id}
                className="  border-solid border-2 flex-1 bg-gradient-to-tr from-[#080509] via-[#1a171c] to-[#080509] text-slate-300 shadow-md shadow-gray-600 p-4 rounded-3xl  "
              >
                <h4 className="mb-3 text-2xl capitalize">
                  {" "}
                  <strong className="text-white">Country</strong>:{countryName}
                </h4>
                <p className="pb-2 text-xl">
                  <strong className="text-white"> Capital: </strong> {capital}
                </p>
                <p className="pb-2 text-xl">
                  {" "}
                  <strong className="text-white">Population: </strong>
                  {population}
                </p>
                <p className=" text-md">
                  <strong className="text-white">Interesting Fact:</strong>{" "}
                  {interestingFact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
