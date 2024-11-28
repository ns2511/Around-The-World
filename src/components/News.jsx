import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/newsSlice";
import NewsItem from "./NewsItem";

const News = () => {
  const dispatch = useDispatch();
  const { articles, isLoading, country, category } = useSelector((state) => state.news);
  const [page, setPage] = useState(1);

  // Fetch news when component mounts or when `page`, `country`, or `category` changes
  useEffect(() => {
    dispatch(fetchNews({ country, category, page }));
  }, [dispatch, country, category, page]);

  // Handle pagination
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">Around The Earth - Top Headlines</h2>

      {isLoading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </div>
          ))}
        </div>
      )}

      <div className="container d-flex justify-content-between my-3">
        <button
          type="button"
          className="btn btn-dark btn-sm"
          disabled={page <= 1}
          onClick={handlePrevious}
        >
          &larr; Previous page
        </button>
        <button
          type="button"
          className="btn btn-dark btn-sm"
          onClick={handleNext}
        >
          Next page &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
