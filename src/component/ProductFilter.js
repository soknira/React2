
import React, { useState, useEffect } from 'react';

const ProductFilter = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); 
        setFilteredProducts(data); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products); // Show all products if "All Products" is selected
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const toggleFilter = () => setFilterVisible(!isFilterVisible);
  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  return (
    <div className="flex-w flex-sb-m p-b-52">
      {/* Filter Buttons */}
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onClick={() => handleCategorySelect('')}>
          All Products
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filter and Search Toggle */}
      <div className="flex-w flex-c-m m-tb-10">
        <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4" onClick={toggleFilter}>
          <i className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list ${isFilterVisible ? 'dis-none' : ''}`}></i>
          <i className={`icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${isFilterVisible ? '' : 'dis-none'}`}></i>
          Filter
        </div>

        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4" onClick={toggleSearch}>
          <i className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search ${isSearchVisible ? 'dis-none' : ''}`}></i>
          <i className={`icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${isSearchVisible ? '' : 'dis-none'}`}></i>
          Search
        </div>
      </div>
      

      {/* Search Panel (optional, based on `isSearchVisible` state) */}
      {isSearchVisible && (
        <div className="panel-search w-full p-t-10 p-b-15">
          <div className="bor8 dis-flex p-l-15">
            <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
              <i className="zmdi zmdi-search"></i>
            </button>
            <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="row isotope-grid">
        {filteredProducts.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" key={product.id}>
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src={product.image} alt={product.title} />
                <a
                  href={`/detail/${product.id}`}
                  className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                >
                  Quick View
                </a>
              </div>

              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l">
                  <a
                    href={`/detail/${product.id}`}
                    className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                    {product.title}
                  </a>

                  <span className="stext-105 cl3">${product.price}</span>
                </div>

                <div className="block2-txt-child2 flex-r p-t-3">
                  <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                    <img
                      className="icon-heart1 dis-block trans-04"
                      src="images/icons/icon-heart-01.png"
                      alt="ICON"
                    />
                    <img
                      className="icon-heart2 dis-block trans-04 ab-t-l"
                      src="images/icons/icon-heart-02.png"
                      alt="ICON"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
