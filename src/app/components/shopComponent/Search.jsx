"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Search = ({ gridList, products }) => {
  const [searcTerms, setSearcTerms] = useState("");
  const filteredProducts = products.filter((product) =>
    product?.name.toLowerCase().includes(searcTerms.toLowerCase())
  );

  console.log("products", products);

  return (
    <>
      <div>
        <form>
          <div className="">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-700 px-4 py-2 border-1 border-gray-700 outline-none rounded-md"
              value={searcTerms}
              onChange={(e) => setSearcTerms(e.target.value)}
            />
          </div>
        </form>
      </div>
      {searcTerms &&
        filteredProducts?.map((item) => {
          return (
            <div key={item?.id} className="my-3 bg-gray-700">
              <Link
                href={`/shop/${item?.id}`}
                className="flex gap-3 items-center"
              >
                <Image src={item?.img} width={60} height={60} alt={item?.id} />
                <p>
                  {item?.name} || ( {item?.price})
                </p>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Search;
