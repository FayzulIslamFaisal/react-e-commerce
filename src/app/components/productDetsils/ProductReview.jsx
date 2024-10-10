"use client";
import { useState } from "react";
import ProductDescriptionInfo from "./ProductDescriptionInfo";
import ProductReviewInfo from "./ProductReviewInfo";

const reviewTitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 15, 2024 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 18, 2024 at 10:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 30, 2024 at 7:57 pm",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jul 10, 2024 at 8:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const ProductReview = () => {
  const [showingReview, setShowingReview] = useState(true);

  return (
    <div>
      <ul className="flex gap-4 bg-gray-700 px-4 py-2">
        <li
          className={`px-4 py-2 cursor-pointer ${
            showingReview ? "bg-gray-800" : "bg-gray-600"
          }`}
          onClick={() => setShowingReview(true)}
        >
          Description
        </li>
        <li
          className={`px-4 py-2 cursor-pointer ${
            !showingReview ? "bg-gray-800" : "bg-gray-600"
          }`}
          onClick={() => setShowingReview(false)}
        >
          Review ({ReviewList.length})
        </li>
      </ul>
      {showingReview ? (
        <ProductDescriptionInfo />
      ) : (
        <ProductReviewInfo ReviewList={ReviewList} reviewTitle={reviewTitle} />
      )}
    </div>
  );
};

export default ProductReview;
