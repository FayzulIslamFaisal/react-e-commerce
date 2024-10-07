import dynamic from "next/dynamic";
const ShopWrapper = dynamic(
  () => import("@/app/components/shopComponent/ShopWrapper"),
  {
    ssr: false,
  }
);
const ShopPage = () => {
  return (
    <>
      <ShopWrapper />
    </>
  );
};

export default ShopPage;
