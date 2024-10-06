"use client";
import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../services/getCountriesData";
import CountryCart from "../components/CountryCart";
import SearchComponent from "../components/SearchComponent";

const CountryPage = () => {
  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      startTransition(async () => {
        try {
          const data = await getCountriesData();
          setCountriesData(data);
        } catch (err) {
          console.error(err);
        }
      });
    };

    fetchData();
  }, []);

  const filteredData = countriesData.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" || country.name.common.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="py-[50px] md:py-[80px]">
      <div className="container mx-auto px-4">
        {isPending ? (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-white text-center text-2xl">Loading....</h1>
          </div>
        ) : (
          <>
            <SearchComponent
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
              countriesData={countriesData}
              setCountriesData={setCountriesData}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {search && filteredData.length === 0 ? (
                <h1 className="text-center text-xl">No data available...</h1>
              ) : filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <CountryCart key={index} countryItem={item} />
                ))
              ) : (
                <h1 className="text-center text-xl">
                  Start searching to see results...
                </h1>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
