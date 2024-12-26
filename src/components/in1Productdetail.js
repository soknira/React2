import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { productId } = useParams(); // Get the product ID from the URL
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details
  useEffect(() => {
    if (!productId) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [productId]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      // Product already in the cart, update quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Product not in cart, add new product
      cart.push({ ...product, quantity: 1 });
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 col-lg-7">
          <div className="p-l-25 p-r-30 p-lr-0-lg">
            <div className="wrap-pic-w pos-relative">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                />
              ) : (
                <div>No image available</div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6 col-lg-5">
          <div className="p-r-50 p-t-5 p-lr-0-lg">
            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
              {product.title || "No Title Available"}
            </h4>
            <span className="mtext-106 cl2">${product.price || "N/A"}</span>
            <p className="stext-102 cl3 p-t-23">
              {product.description || "No description available."}
            </p>

            {/* Product Options */}
            <div className="p-t-33">
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-203 flex-c-m respon6">Category</div>
                <div className="size-204 respon6-next">
                  <span className="badge bg-primary text-light">
                    {product.category || "N/A"}
                  </span>
                </div>
              </div>
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-204 flex-w flex-m respon6-next">
                  <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                    <button className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                      <i className="fs-16 zmdi zmdi-minus"></i>
                    </button>
                    <input
                      className="mtext-104 cl3 txt-center num-product"
                      type="number"
                      name="num-product"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                      <i className="fs-16 zmdi zmdi-plus"></i>
                    </button>
                  </div>
                  <button
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex-w flex-m p-l-100 p-t-40 respon7">
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="#"
                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2"
              >
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
