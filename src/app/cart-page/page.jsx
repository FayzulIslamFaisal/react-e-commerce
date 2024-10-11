import dynamic from "next/dynamic";

const CartPageWrapper = dynamic(
  () => import("../components/cartComponent/CartPageWrapper"),
  { ssr: false }
);
const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <CartPageWrapper />
    </div>
  );
};

export default CartPage;
