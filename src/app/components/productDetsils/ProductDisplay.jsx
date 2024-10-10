"use client";

import { useState } from "react";
import Rating from "../homeComponent/Rating";
import Link from "next/link";

const ProductDisplay = ({ filterProId }) => {
  const [preQuantity, setQuantity] = useState(filterProId?.quantity || 1);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleDecrement = () => {
    if (preQuantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      id: filterProId?.id,
      image: filterProId?.img,
      name: filterProId?.name,
      price: filterProId?.price,
      quantity: preQuantity,
      size,
      color,
      coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === filterProId?.id
    );

    if (existingProductIndex !== -1) {
      // Update all fields of the existing product
      existingCart[existingProductIndex] = {
        ...existingCart[existingProductIndex], // keep any existing properties not explicitly updated
        quantity: existingCart[existingProductIndex].quantity + preQuantity, // update quantity
        size, // update size
        color, // update color
        coupon, // update coupon
      };
    } else {
      // Otherwise, add the new product to the cart
      existingCart.push(product);
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset form
    setQuantity(1);
    setColor("Select Color");
    setSize("Select Size");
    setCoupon("");
  };

  return (
    <div className="p-4">
      <h1 className="capitalize font-bold mb-4">{filterProId?.name}</h1>
      <p className="flex gap-3 pb-4">
        <Rating /> <span>{filterProId?.ratingsCount} Reviews</span>
      </p>
      <strong className="pb-3">$ {filterProId?.price}</strong>
      <p className="pb-3">Brand: {filterProId?.seller}</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 pb-3">
          <div>
            <select
              value={size}
              onChange={handleSize}
              className="w-full bg-gray-600 py-2 px-3"
            >
              <option disabled>Select Size</option>
              <option>sm</option>
              <option>lg</option>
              <option>xl</option>
              <option>2xl</option>
            </select>
          </div>
          <div>
            <select
              value={color}
              onChange={handleColor}
              className="w-full bg-gray-600 py-2 px-3"
            >
              <option disabled>Select Color</option>
              <option>Red</option>
              <option>Black</option>
              <option>White</option>
              <option>Green</option>
            </select>
          </div>
        </div>
        <div className="pb-3 gap-4">
          <div className="flex items-center h-full gap-1 pb-3">
            <button
              type="button"
              onClick={handleDecrement}
              className="border-2 border-white bg-gray-800 px-4 py-2 text-white"
            >
              -
            </button>
            <input
              type="number"
              className="w-full bg-gray-800 text-center text-white px-4 py-2"
              value={preQuantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              type="button"
              onClick={handleIncrement}
              className="border-2 border-white bg-gray-800 px-4 py-2 text-white"
            >
              +
            </button>
          </div>
          <div className="pb-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter Your Coupon..."
              className="w-full bg-gray-800 text-center text-white px-4 py-2"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="border-2 border-white bg-gray-800 px-4 py-2 text-white"
            >
              Add Cart
            </button>
            <Link
              href={`/cart-page`}
              className="border-2 border-white bg-gray-800 px-4 py-2 text-white"
            >
              Cart Page
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDisplay;
