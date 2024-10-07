import { FaEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Rating from "../homeComponent/Rating";
import Image from "next/image";
const ProductCards = ({ item, gridList }) => {
  return (
    <>
      <div
        className={`bg-gray-700 px-3 py-4 rounded-xl ${
          !gridList ? "flex" : ""
        }`}
      >
        <div
          className={`relative w-full h-[160px] mb-4 ${
            !gridList ? "flex-1" : ""
          }`}
        >
          <Image
            src={item?.img || "/banner/01.png"}
            alt={item?.id}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={`${!gridList ? "flex-1" : ""}`}>
          <div className="flex gap-2 justify-center items-center pb-3">
            <Link href={`/shop/${item?.id}`}>
              <FaEye />
            </Link>
            <button>
              <FaHeart />
            </button>
            <Link href="/cart-page">
              <FaShoppingCart />
            </Link>
          </div>
          <h4 className="mb-3">
            <Link href={`/shop/${item?.id}`}>{item?.name}</Link>
          </h4>
          <div className="flex justify-center pb-3">
            <Rating />
          </div>
          <strong>Price: {item?.price}</strong>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
