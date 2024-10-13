import React from "react";
import PageHeader from "../PageHeader";
import BlogDetails from "./BlogDetails";

const BlogWrapper = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <PageHeader pageTitle={`Blog Page`} currentPage="Blog" />
      <BlogDetails />
    </div>
  );
};

export default BlogWrapper;
