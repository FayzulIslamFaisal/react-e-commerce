import { FaWindows } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeCategory = () => {
  const subTitle = "Choose Any Products";
  const title = "Buy Everything with Us";
  const btnText = "Get Started Now";

  const categoryList = [
    {
      imgUrl: "/category/01.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "DSLR Camera",
    },
    {
      imgUrl: "/category/02.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Shoes",
    },
    {
      imgUrl: "/category/03.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Photography",
    },
    {
      imgUrl: "/category/04.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Formal Dress",
    },
    {
      imgUrl: "/category/05.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Colorful Bags",
    },
    {
      imgUrl: "/category/06.jpg",
      imgAlt: "category rajibraj91 rajibraj",
      iconName: "icofont-brand-windows",
      title: "Home Decor",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 text-white pt-10">
        <div className="text-center">
          <h2 className="text-2xl mb-5">{subTitle}</h2>
          <h1 className="text-4xl capitalize mb-7">{title}</h1>
        </div>
        <div className="mb-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {categoryList && categoryList?.length > 0 ? (
              categoryList?.map((item, index) => {
                return (
                  <div key={index} className="relative">
                    <div className="w-full h-[220px] relative ">
                      <Image
                        fill
                        src={item?.imgUrl}
                        alt={item?.imgAlt}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className=" absolute left-4 bottom-3 ">
                      <Link className="flex gap-3 items-center" href="/shop">
                        <span>
                          <FaWindows className=" text-yellow-600" />
                        </span>{" "}
                        <strong className=" text-yellow-600">
                          {item?.title}
                        </strong>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>No Data Found</h3>
            )}
          </div>
        </div>
        <div className=" flex justify-center mb-7">
          <Link
            href="/shop"
            className="flex gap-2 items-center border-white border px-4 py-2 rounded-lg hover:bg-white hover:text-black "
          >
            {btnText} <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
