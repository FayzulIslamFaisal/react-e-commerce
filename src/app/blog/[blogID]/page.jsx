import BlogDetailsWrapper from "@/app/components/blogComponent/BlogDetailsWrapper";
import React from "react";

const page = ({ params }) => {
  const blog_params_Id = params.blogID;
  return (
    <>
      <BlogDetailsWrapper blog_params_Id={blog_params_Id} />
    </>
  );
};

export default page;
