import Link from "next/link";

const title = "Our Popular Tags";

const tagsList = [
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
  {
    link: "#",
    text: "videohive",
  },
  {
    link: "#",
    text: "audiojungle",
  },
  {
    link: "#",
    text: "3docean",
  },
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
];

const PopularTags = () => {
  return (
    <div className="bg-gray-700 mt-8 px-4 py-3">
      <h4>{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {tagsList &&
          tagsList?.map((blog, index) => {
            return (
              <div key={index} className=" text-center bg-gray-500 ">
                <p>
                  <Link href={`/${blog?.link}`}>{blog?.text}</Link>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularTags;
