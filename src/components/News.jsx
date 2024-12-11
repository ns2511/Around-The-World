import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading, prePage, nextPage } from "../features/newsSlice";
import styles from "./News.module.css";
import Spinner from "./Spinner";

const News = () => {
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, newsMode, category, country, page } = useSelector(
    (state) => state.news
  );
  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/${newsMode}?${
        newsMode === "top-headlines" ? `country=${country}` : `q=${category}`
      }&apiKey=3739a4b697e34e53b470ec66c201298e&page=${page}&pageSize=${pageSize}`;

      try {
        dispatch(startLoading());
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const parseData = await response.json();
        setNews(parseData.articles);
        setTotalPage(parseData.totalResults / pageSize);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchData();
  }, [country, newsMode, category, page, dispatch]);

  return (
    <div className="container my-3">
      <h2 className="text-center">
        Around The World -{" "}
        {newsMode === "top-headlines"
          ? `Top headlines from ${country}`
          : `${category} News`}
      </h2>
          {isLoading&&<Spinner/>}
      <div className={styles.row}>
        {news.map((article) => {
          return (
            article.content !== "[Removed]" && (
              <div key={article.url}>
                {!isLoading&&<NewsItem article={article} />}
              </div>
            )
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark btn-sm"
          disabled={page <= 1}
          onClick={() => dispatch(prePage())}
        >
          &larr; Previous page
        </button>
        <button
          type="button"
          className="btn btn-dark btn-sm"
          disabled={page + 1 > Math.ceil(totalPage)}
          onClick={() => dispatch(nextPage())}
        >
          Next page &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
