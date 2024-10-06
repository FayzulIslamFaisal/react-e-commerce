"use client";
import Image from "next/image";
import { useState } from "react";
import Rating from "./Rating";
import Link from "next/link";

const ProductData = [
  {
    imgUrl: "/categoryTab/01.jpg",
    cate: "Shoes",
    title: "Nike Premier X",
    author: "/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "/categoryTab/02.jpg",
    cate: "Bags",
    title: "Asthetic Bags",
    author: "/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 12",
    author: "/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "/categoryTab/04.jpg",
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "/categoryTab/05.jpg",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "/categoryTab/06.jpg",
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "/categoryTab/07.jpg",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "/categoryTab/08.jpg",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

function HomeCategoryShowCase() {
  const [items, setItems] = useState(ProductData);
  const [activeCategory, setActiveCategory] = useState("All");
  const title = "Our Products";

  const filterItem = (catItem) => {
    setActiveCategory(catItem);
    if (catItem === "All") {
      setItems(ProductData);
    } else {
      const updateItem = ProductData.filter(
        (catProduct) => catProduct.cate === catItem
      );
      setItems(updateItem);
    }
  };
  // Get unique categories
  const uniqueCategories = [
    "All",
    ...new Set(ProductData.map((item) => item.cate)),
  ];

  return (
    <div className="container mx-auto px-4 text-white py-7">
      <div className="flex justify-between items-center bg-gray-700 shadow-xl px-4 py-4 rounded-2xl">
        <h1 className="text-2xl capitalize font-semibold">{title}</h1>
        <ul className="flex items-center gap-1 md:gap-4">
          {uniqueCategories &&
            uniqueCategories.map((category, index) => (
              <li
                key={index}
                className={`${
                  activeCategory === category
                    ? "bg-red-500 text-white"
                    : "bg-gray-800"
                } hover:bg-gray-800 hover:text-white px-1 md:px-3 py-1 cursor-pointer rounded`}
                onClick={() => filterItem(category)}
              >
                {category}
              </li>
            ))}
        </ul>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {items && items.length > 0 ? (
            items.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-gray-700 px-3 py-4 rounded-lg"
                >
                  <div className="relative w-full h-[220px] mb-5">
                    <Image
                      fill
                      src={product.imgUrl}
                      alt={product.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>{product.cate}</span>
                    <Rating />
                  </div>
                  <h4 className="pb-3 capitalize font-semibold">
                    <Link href={`/shop/${product.id}`}>{product.title}</Link>
                  </h4>
                  <div className="flex justify-between">
                    <span>{product.brand}</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Product Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeCategoryShowCase;
