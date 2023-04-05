import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { blog } from "../data";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Update the current page based on the URL
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBlog = blog.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    navigate(`/blog?page=${pageNumber}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex font-first text-center flex-col mt-10 lg:mt-40 items-center">
      {paginatedBlog.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-2/3 lg:w-1/2 bg-main shadow-md p-4 rounded-md my-4">
          <Link
            to={`/blog/${item.id}`}
            className="text-black font-first text text-4xl lg:text-6xl mb-2">
            {item.title}
          </Link>
          <p className="text-gray-900 leading-6 line-clamp-4 mt-2 ">
            {item.description}
          </p>
          <img src={item.img} alt={item.title} className="w-full my-2" />
        </div>
      ))}

      <div className="flex mt-4">
        {currentPage > 1 && (
          <button
            className="border-2 border-main bg-green-900 hover:text-green-500 mr-4 rounded-xl p-2 text-white"
            onClick={() => goToPage(currentPage - 1)}>
            Previous
          </button>
        )}

        {endIndex < blog.length && (
          <button
            className="border-2 border-main bg-green-900 hover:text-green-500 rounded-xl p-2 text-white"
            onClick={() => goToPage(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
