import React, { useEffect, useState } from 'react';

const ProductGrid = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch products from the API when the component is mounted
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set products in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products"); // Handle any errors
        setLoading(false); // Set loading to false after error occurs
      });
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there's a fetch error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row isotope-grid">
      {products.map((product) => (
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" key={product.id}>
          <div className="block2">
            <div className="block2-pic hov-img0">
              <img src={product.image} alt={product.title} />
              <a
                href="#"
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
  );
};

export default ProductGrid;
