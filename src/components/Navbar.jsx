import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountry, changeCategory, toggelNewsMode } from "../features/newsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { country, category, newsMode } = useSelector((state) => state.news); // Make sure `newsMode` is also selected

  const handleCountryChange = (selectedCountry) => {
    dispatch(changeCountry({ country: selectedCountry }));
  };

  const handleCategoryChange = (selectedCategory) => {
    dispatch(changeCategory({ category: selectedCategory }));
  };

  const handleNewsMode = (mode) => {
    dispatch(toggelNewsMode(mode)); // Passing the mode (either "top-headlines" or "everything")
  };

  const categories = [
    "General",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const countries = [
    { label: "India", value: "in" },
    { label: "USA", value: "us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Around The World
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${newsMode === "top-headlines" ? "active" : ""}`}
                onClick={() => handleNewsMode("top-headlines")}
                href="#"
              >
                Top Headlines
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${newsMode === "everything" ? "active" : ""}`}
                onClick={() => handleNewsMode("everything")}
                href="#"
              >
                All News
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      className={`dropdown-item ${cat.toLowerCase() === category ? "active" : ""}`}
                      onClick={() => handleCategoryChange(cat.toLowerCase())}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
              </a>
              <ul className="dropdown-menu">
                {countries.map(({ label, value }) => (
                  <li key={value}>
                    <a
                      className={`dropdown-item ${country === value ? "active" : ""}`}
                      onClick={() => handleCountryChange(value)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About us
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
