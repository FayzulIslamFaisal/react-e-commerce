"use client";
import Image from "next/image";
import PageHeader from "../PageHeader";
import { FaList, FaRegListAlt } from "react-icons/fa";
import { useState } from "react";
import data from "@/app/products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";

const ShopWrapper = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 9;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItem = ["All", ...new Set(data.map((val) => val.category))];

  const onFilterItem = (catItem) => {
    setCurrentPage(1); // Reset pagination when category changes

    if (catItem === "All") {
      setProducts(data);
    } else {
      const filteredItems = data.filter(
        (productCat) => productCat.category === catItem
      );
      setProducts(filteredItems);
    }
    setSelectedCategory(catItem);
  };

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <PageHeader pageTitle="Shop Page" currentPage="Shop" />
      <div className="flex gap-5 py-16">
        {/* Products Section */}
        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between bg-gray-600 px-4 py-4">
            <p>
              Showing: {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, products.length)} of{" "}
              {products.length} Results
            </p>
            <div className="flex gap-3">
              <button onClick={() => setGridList(true)}>
                <FaList
                  className={`cursor-pointer ${
                    gridList ? "text-yellow-400" : "text-white"
                  }`}
                />
              </button>
              <button onClick={() => setGridList(false)}>
                <FaRegListAlt
                  className={`cursor-pointer ${
                    !gridList ? "text-yellow-400" : "text-white"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Conditional Layout for Grid or List */}
          <div
            className={`${
              gridList
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                : "flex flex-col gap-4"
            } py-7 text-center`}
          >
            {currentProduct &&
              currentProduct.map((item, index) => (
                <ProductCards key={index} item={item} gridList={gridList} />
              ))}
          </div>
          <Pagination
            productPerPage={productPerPage}
            totalProducts={products.length}
            paginate={paginate}
            activePage={currentPage}
          />
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4">
          <div className="bg-gray-600 px-4 py-2">
            {/* Placeholder content for sidebar */}
            <Search products={products} gridList={gridList} />
            <ShopCategory
              menuItem={menuItem}
              handleFfilterItem={onFilterItem}
              selectedCategory={selectedCategory}
            />
            <PopularPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopWrapper;
