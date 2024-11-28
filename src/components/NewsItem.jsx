// NewsItem.jsx
import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card my-2">
      <img src={urlToImage} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title"}</h5>
        <p className="card-text">{description || "No Description Available"}</p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
