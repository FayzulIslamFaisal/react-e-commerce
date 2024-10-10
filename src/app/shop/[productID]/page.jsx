import PageHeader from "@/app/components/PageHeader";
import ProductDetilsWrapper from "@/app/components/productDetsils/ProductDetilsWrapper";
import productDetails from "@/app/products.json";

const page = ({ params }) => {
  const product_ID = params.productID;
  const filterProId = productDetails.find(
    (product) => product.id === product_ID
  );


  return (
    <>
      <div className="pt-10 pb-10 container mx-auto px-4">
        <PageHeader
          pageTitle="Our Shop PAge"
          currentPage="shop / Single Product"
        />
      </div>
      <ProductDetilsWrapper filterProId={filterProId} />
    </>
  );
};

export default page;
