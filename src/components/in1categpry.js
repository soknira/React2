import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FilterButtons() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { name: "All Products", filter: "all" },
    { name: "Jewelery", filter: "jewelery" },
    { name: "Electronics", filter: "electronics" },
    { name: "Men's Clothing", filter: "men's clothing" },
    { name: "Women's Clothing", filter: "women's clothing" },
  ];

  const fetchProducts = (category) => {
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts("all");
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    fetchProducts(category);
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        {categories.map((category) => (
          <button
            key={category.filter}
            className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
              activeCategory === category.filter ? "how-active1" : ""
            }`}
            onClick={() => handleCategoryChange(category.filter)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row isotope-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item"
          >
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src={product.image} alt={product.title} />
                <Link
                  to={`/detail/${product.id}`}
                  className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                >
                  Quick View
                </Link>
              </div>
              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l">
                  <Link
                    to={`/detail/${product.id}`}
                    className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                    {product.title}
                  </Link>
                  <span className="stext-105 cl3">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterButtons;
