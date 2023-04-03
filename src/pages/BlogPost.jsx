import React from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { blog } from "../data";

const BlogPost = () => {
  const { id } = useParams();
  const selectedBlog = blog.find((item) => item.id === parseInt(id));
  if (!selectedBlog) {
    return <div>Blog post not found</div>;
  }
  return (
    <div className="max-w-3xl text-center mb-40 mt-20 font-first mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <a href="/blog" className="flex items-center mb-8">
        <BiArrowBack className="mr-2" />
        Go back
      </a>
      <h1 className="text-3xl text-main font-bold mb-4">{selectedBlog.title}</h1>
      <img
        className="w-full mb-4"
        src={selectedBlog.img}
        alt={selectedBlog.title}
      />
      <p className="text-lg">{selectedBlog.description}</p>
    </div>
  );
};

export default BlogPost;
