import Image from "next/image";
import dynamic from "next/dynamic";
import ProductImageSLider from "./ProductImageSLider";
import ProductDetilsRight from "./ProductDetilsRight";
const ProductDisplay = dynamic(() => import("./ProductDisplay"), {
  ssr: false,
});
const ProductReview = dynamic(() => import("./ProductReview"), {
  ssr: false,
});

const ProductDetilsWrapper = ({ filterProId }) => {
  return (
    <>
      <div className="pb-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row text-white gap-5">
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProductImageSLider filterProId={filterProId} />
              <ProductDisplay filterProId={filterProId} />
            </div>
            <ProductReview />
          </div>
          <ProductDetilsRight />
        </div>
      </div>
    </>
  );
};

export default ProductDetilsWrapper;
