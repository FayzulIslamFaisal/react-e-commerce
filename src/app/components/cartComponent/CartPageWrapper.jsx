"use client";
import { useEffect, useState } from "react";
import PageHeader from "../PageHeader";
import Link from "next/link";
import Image from "next/image";
import CheckoutPage from "./ CheckoutPage";

const CartPageWrapper = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storeCartItms = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storeCartItms);
  }, []);

  //   function for calculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //   function for quantity increment
  const handleIncrement = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update localstorage with new cart item
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //   function for quantity Decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // update localstorage with new cart item
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //   function for remove cart item
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    updatedLocalstorage(updatedCart);
  };

  const updatedLocalstorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // function for cat subtotal

  const cartSubtotal = cartItems.reduce((total, curentItem) => {
    return total + calculateTotalPrice(curentItem);
  }, 0);

  // total price
  const orderTotalPrice = cartSubtotal;

  console.log("cartItems", cartItems);

  return (
    <>
      <PageHeader pageTitle={`Our Cart Page`} currentPage={`Cart-Page`} />

      <div className="py-12">
        <table className="table-fixed w-full text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-3 py-2 capitalize font-semibold">Image</th>
              <th className="px-3 py-2 capitalize font-semibold">Title</th>
              <th className="px-3 py-2 capitalize font-semibold">Price</th>
              <th className="px-3 py-2 capitalize font-semibold">Quantity</th>
              <th className="px-3 py-2 capitalize font-semibold">Total</th>
              <th className="px-3 py-2 capitalize font-semibold">Edit</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-gray-800 text-center border-b-2 last:border-b-0 "
                  >
                    <td className="px-3 py-2">
                      <Link href={`/shop`}>
                        <Image
                          src={item?.image}
                          width={70}
                          height={70}
                          alt={item?.id}
                        />
                      </Link>
                    </td>
                    <td className="px-3 py-2">
                      <Link href={`/shop`}> {item?.name}</Link>
                    </td>
                    <td className="px-3 py-2">$ {item?.price}</td>
                    <td className="px-3 py-2">
                      <div className="flex ">
                        <div
                          className=" bg-gray-600 px-4 py-1 cursor-pointer"
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </div>
                        <div className="">
                          <input
                            type="number"
                            className="bg-gray-700 text-center px-2 py-1 w-16"
                            value={item?.quantity}
                          />
                        </div>
                        <div
                          className="bg-gray-600 px-4 py-1 cursor-pointer"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2">$ {calculateTotalPrice(item)}</td>
                    <td className="px-3 py-2">
                      <button onClick={() => handleRemoveItem(item)}>
                        <Image
                          src={`/shop/del.png`}
                          alt="image"
                          width={15}
                          height={15}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/*  */}

      {/*  */}

      <div className="grid grid-cols-1 md:grid-cols-2 py-12 text-white gap-8">
        <div>
          <div className="pb-4">
            <form>
              <input
                className="bg-gray-700 px-4 py-2 rounded-md"
                type="text"
                placeholder="Enter Coupon code..."
              />
              <input
                className="bg-gray-600 cursor-pointer px-4 py-2 rounded-md"
                type="submit"
                value="Apply Coupon"
              />
            </form>
          </div>
          <h4>Calculate Shipping</h4>
          <div className="pt-3">
            <select className="bg-gray-700 py-3 px-3 w-full">
              <option value="bd">Bangladesh</option>
              <option value="pak">Pakistan</option>
              <option value="ind">India</option>
              <option value="srl">Sri Lanka</option>
              <option value="us">United States</option>
            </select>
          </div>
          <div className="pt-3 flex justify-between gap-4">
            <select className="bg-gray-700 py-3 px-3 flex-1">
              <option value="bd">Dhaka</option>
              <option value="pak">Karachi</option>
              <option value="ind">New Delhi</option>
              <option value="srl">Sri Lanka</option>
              <option value="us">New York</option>
            </select>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Post Code/Zip"
                className="bg-gray-700 py-3 px-3 w-full"
              />
            </div>
          </div>
          <div className="pt-3">
            <button type="submit" className="bg-gray-700 py-3 px-3 w-full">
              Update Address
            </button>
          </div>
        </div>

        <div>
          <div className="pb-4">
            <div className="flex items-center">
              <input
                className="bg-gray-600 cursor-pointer px-4 py-2 rounded-md"
                type="submit"
                value="Update Cart"
              />
              <div className="ml-4">
                <button className="bg-green-600 px-4 py-3">
                  <CheckoutPage />
                </button>
              </div>
            </div>
          </div>
          <h4 className="mb-4">Cart Total</h4>
          <div>
            <ul>
              <li className="pb-3 flex justify-between">
                <span>Subtotal</span>
                <span>$ {cartSubtotal}</span>
              </li>
              <li className="pb-3 flex justify-between">
                <span>Shipping Charge</span>
                <span>Free Shipping</span>
              </li>
              <li className="pb-3 flex justify-between">
                <span>Grand Total</span>
                <span>$ {orderTotalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPageWrapper;
