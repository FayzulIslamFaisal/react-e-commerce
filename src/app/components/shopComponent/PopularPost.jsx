import Image from "next/image";
import Link from "next/link";

const postList = [
  {
    id: 1,
    imgUrl: "/blog/10.jpg",
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: "/blog/11.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: "/blog/12.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: "/blog/09.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];

const PopularPost = () => {
  const title = "Most Popular Post";
  return (
    <div className="bg-gray-700 mt-8 px-4 py-3">
      <h4>{title}</h4>
      <div className="">
        {postList &&
          postList?.map((blog) => {
            return (
              <div key={blog.id} className="my-3 bg-gray-500">
                <Link
                  href={`/blog/${blog?.id}`}
                  className="flex gap-3 items-center"
                >
                  <Image
                    src={blog?.imgUrl}
                    width={60}
                    height={60}
                    alt={blog?.imgAlt}
                  />
                  <p>{blog?.title}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularPost;
