"use client";
import { getCountriesDetailData } from "@/app/services/getCountriesData";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";

const CountryDetailPage = ({ params }) => {
  const countryName = params.name;
  console.log(countryName);
  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      startTransition(async () => {
        try {
          const data = await getCountriesDetailData(countryName);
          setCountriesData(data?.[0]);
        } catch (err) {
          console.error(err);
        }
      });
    };

    fetchData();
  }, []);
  console.log(countriesData);
  return (
    <div className="text-white py-[50px] md:py-[80px]">
      {isPending && (
        <div className=" flex justify-center items-center h-screen ">
          <h1 className="text-white text-center text-2xl ">Loading....</h1>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" relative w-full h-80 ">
            <Image
              src={countriesData?.flags?.png}
              alt={countriesData?.flags?.alt}
              fill
              sizes="100vw"
            />
          </div>
          <div className="text-white">
            <p>Country Name::-{countriesData?.name?.common}</p>
            <p>population::-{countriesData?.population}</p>

            <p>region::-{countriesData?.region}</p>

            <p>
              capital::- {countriesData?.capital?.map((item) => item + ",")}
            </p>

            <p></p>
            <p></p>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
