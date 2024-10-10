import Image from "next/image";

const ProductImageSLider = ({ filterProId }) => {
  return (
    <>
      <div className="">
        <div className=" relative w-full h-[300px]">
          <Image fill src={filterProId?.img} alt={filterProId?.id} />
        </div>
      </div>
    </>
  );
};

export default ProductImageSLider;
