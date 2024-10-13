import BlogItem from "./BlogItem";

import blogdata from "@/app/utilis/blogdata";

const BlogDetails = () => {
  return (
    <>
      <div className=" py-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {blogdata &&
          blogdata.map((blogItem) => {
            return <BlogItem key={blogItem?.id} blogItem={blogItem} />;
          })}
      </div>
    </>
  );
};

export default BlogDetails;
