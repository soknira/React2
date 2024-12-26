import React, { useState } from "react";

const Modal = ({ onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleColorChange = (e) => setSelectedColor(e.target.value);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
      <div className="overlay-modal1 js-hide-modal1" onClick={onClose}></div>
      <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={onClose}>
            <img src="images/icons/icon-close.png" alt="CLOSE" />
          </button>
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots"></div>
                  <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                  <div className="slick3 gallery-lb">
                    {["01", "02", "03"].map((id) => (
                      <div className="item-slick3" key={id} data-thumb={`images/product-detail-${id}.jpg`}>
                        <div className="wrap-pic-w pos-relative">
                          <img src={`images/product-detail-${id}.jpg`} alt={`IMG-PRODUCT-${id}`} />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href={`images/product-detail-${id}.jpg`}
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">Lightweight Jacket</h4>
                <span className="mtext-106 cl2">$58.79</span>
                <p className="stext-102 cl3 p-t-23">
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                </p>

                {/* Options */}
                <div className="p-t-33">
                  {/* Size Selector */}
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Size</div>
                    <div className="size-204 respon6-next">
                      <select
                        className="js-select2 bor8 bg0"
                        value={selectedSize}
                        onChange={handleSizeChange}
                      >
                        <option value="">Choose an option</option>
                        <option value="S">Size S</option>
                        <option value="M">Size M</option>
                        <option value="L">Size L</option>
                        <option value="XL">Size XL</option>
                      </select>
                    </div>
                  </div>

                  {/* Color Selector */}
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Color</div>
                    <div className="size-204 respon6-next">
                      <select
                        className="js-select2 bor8 bg0"
                        value={selectedColor}
                        onChange={handleColorChange}
                      >
                        <option value="">Choose an option</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="White">White</option>
                        <option value="Grey">Grey</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                        <button className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={decreaseQuantity}>
                          <i className="fs-16 zmdi zmdi-minus"></i>
                        </button>
                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          value={quantity}
                          readOnly
                        />
                        <button className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={increaseQuantity}>
                          <i className="fs-16 zmdi zmdi-plus"></i>
                        </button>
                      </div>
                      <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                    <button className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100">
                      <i className="zmdi zmdi-favorite"></i>
                    </button>
                  </div>
                  {["facebook", "twitter", "google-plus"].map((network) => (
                    <a
                      key={network}
                      href="#"
                      className={`fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100`}
                      data-tooltip={network.charAt(0).toUpperCase() + network.slice(1)}
                    >
                      <i className={`fa fa-${network}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
