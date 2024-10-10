import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "../homeComponent/Rating";

const ProductReviewInfo = ({ ReviewList, reviewTitle }) => {
  return (
    <div className="bg-gray-700 mt-4 p-5">
      <ul className="pb-5">
        {ReviewList &&
          ReviewList.map((item) => {
            return (
              <li className="flex gap-5 mb-3 bg-gray-800 p-4">
                <div className=" relative w-[100px] h-[100px] ">
                  <Image
                    src={item?.imgUrl}
                    alt={item?.imgAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <div className=" flex gap-3 text-gray-400 pb-2">
                    <Link href={`#`}>{item?.name}</Link>
                    <span>{item?.date}</span>
                  </div>
                  <p>{item?.desc}</p>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="pb-4">
        <h5 className=" border-b-2 inline-block">{reviewTitle}</h5>
      </div>
      <div className="">
        <form>
          <div className="pb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name..."
              className="w-full px-4 py-2 bg-gray-800 rounded-xl"
            />
          </div>
          <div className="pb-3">
            <input
              type="email"
              name="email"
              placeholder="Email..."
              className="w-full px-4 py-2 bg-gray-800 rounded-xl"
            />
          </div>
          <div className="pb-3">
            <div className="flex gap-2">
              <span>YourRating:- </span>
              <Rating />
            </div>
          </div>
          <div className="pb-3">
            <textarea
              name="message"
              className="w-full bg-gray-800 px-4 py-3"
              placeholder="Type Here Messge... "
            />
          </div>
          <div className="">
            <button
              type="submit "
              className="bg-white text-black p-2 capitalize font-semibold rounded-md "
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReviewInfo;
