"use client";
import { useState } from "react";
import productData from "@/app/products.json";
import Link from "next/link";
import SelectedCategory from "./SelectedCategory";

const HomeProductSearch = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const handleProductSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchProduct(searchTerm);

    // Only trigger filtering if search term length is 3 or more
    if (searchTerm.length >= 3) {
      const filterData = productData.filter((product) =>
        product?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(filterData);
    } else {
      setFilterProducts([]); // Reset to empty if search is less than 3 characters
    }
  };

  return (
    <div>
      <div className="text-white container mx-auto px-4">
        <h2 className="text-center font-semibold text-4xl capitalize mb-3">
          Search Your One From Thousands of Products
        </h2>
        <div className="flex w-1/2 mx-auto pt-6">
          <SelectedCategory select={"all"} />
          <div className="flex-1">
            <input
              type="search"
              className="focus:bottom-0 w-full px-4 py-[3px] border-2 bg-gray-600 border-white rounded-xl"
              placeholder="Search Product...."
              value={searchProduct}
              onChange={handleProductSearch}
            />
          </div>
        </div>
        <ul className="mt-6">
          {searchProduct.length >= 3 && filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <li
                key={product.id}
                className="text-white px-4 mb-2 py-2 bg-slate-600"
              >
                <Link href={`/shop/${product?.id}`}>{product.name}</Link>
              </li>
            ))
          ) : searchProduct.length >= 3 && filterProducts.length === 0 ? (
            <p className="text-white">No products found</p>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default HomeProductSearch;
