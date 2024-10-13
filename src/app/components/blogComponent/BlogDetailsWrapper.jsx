import blogdata from "@/app/utilis/blogdata";
import PageHeader from "../PageHeader";
import PopularTags from "../shopComponent/PopularTags";
import PopularPost from "../shopComponent/PopularPost";
import Image from "next/image";

const BlogDetailsWrapper = ({ blog_params_Id }) => {
  const blogDetailsInfo = blogdata.find(
    (blog) => blog.id === Number(blog_params_Id)
  );
  console.log("blogDetailsInfo", { blogDetailsInfo });

  return (
    <div className=" container mx-auto px-4 py-12 text-white">
      <PageHeader
        pageTitle="Blog Single Page"
        currentPage={`Blog / Blog Details`}
      />

      <div className="pt-10 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[70%] md:pt-8 pb-0">
          <div className="w-full h-[500px] relative">
            <Image
              fill
              src={blogDetailsInfo?.imgUrl}
              alt={blogDetailsInfo?.imgAlt}
            />
          </div>
          <div className="pt-4 pb-4">
            <h1 className="mb-6 text-2xl uppercase font-bold">
              {blogDetailsInfo?.title}
            </h1>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              incidunt maiores culpa animi eligendi assumenda fuga vitae sunt
              quasi fugit voluptate saepe! Suscipit maiores sint accusantium
              dolorum mollitia fuga cum? Doloremque nesciunt culpa ad expedita
              at obcaecati veniam minus quibusdam, tenetur animi fugit sint
              rerum voluptas delectus repellendus pariatur nobis assumenda.
              Earum, ipsum veritatis. Eligendi sint cumque nemo quisquam porro.
            </p>
            <div className="w-full h-[300px] relative">
              <Image
                fill
                src="/blog/single/02.jpg"
                alt={blogDetailsInfo?.imgAlt}
              />
            </div>
            <blockquote className="bg-gray-700 px-4 py-6 mt-5 ">
              {""} {blogDetailsInfo?.desc} {""}
            </blockquote>
          </div>
          <p className="pt-5">
            Sit, incidunt maiores culpa animi eligendi assumenda fuga vitae sunt
            quasi fugit voluptate saepe! Suscipit maiores sint accusantium
            dolorum mollitia fuga cum? Doloremque nesciunt culpa ad expedita at
            obcaecati veniam minus quibusdam, tenetur animi fugit sint rerum
            voluptas delectus repellendus pariatur nobis assumenda. Earum, ipsum
            veritatis. Eligendi sint cumque nemo quisquam porro.
          </p>
          <div className="w-full h-[300px] relative mt-5">
            <Image
              fill
              src="/blog/single/03.jpg"
              alt={blogDetailsInfo?.imgAlt}
            />
          </div>
        </div>
        <div className=" w-full md:w-[30%]">
          <PopularTags />
          <PopularPost />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsWrapper;
