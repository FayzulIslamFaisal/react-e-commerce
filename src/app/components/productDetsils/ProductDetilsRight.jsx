import PopularPost from "../shopComponent/PopularPost";
import PopularTags from "../shopComponent/PopularTags";

const ProductDetilsRight = () => {
  return (
    <>
      <div className="w-full lg:w-[30%]">
        <PopularPost />
        <PopularTags />
      </div>
    </>
  );
};

export default ProductDetilsRight;
