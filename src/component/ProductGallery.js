import React from "react";

const ProductGallery = () => {
  return (
    <div className="wrap-slick3 flex-sb flex-w">
      <div className="wrap-slick3-dots"></div>
      <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
      <div className="slick3 gallery-lb">
        <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
          <div className="wrap-pic-w pos-relative">
            <img src="assets/images/product-detail-01.jpg" alt="IMG-PRODUCT" />
            <a
              className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
              href="assets/images/product-detail-01.jpg"
            >
              <i className="fa fa-expand"></i>
            </a>
          </div>
        </div>

        <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
          <div className="wrap-pic-w pos-relative">
            <img src="assets/images/product-detail-02.jpg" alt="IMG-PRODUCT" />
            <a
              className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
              href="assets/images/product-detail-02.jpg"
            >
              <i className="fa fa-expand"></i>
            </a>
          </div>
        </div>

        <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
          <div className="wrap-pic-w pos-relative">
            <img src="assets/images/product-detail-03.jpg" alt="IMG-PRODUCT" />
            <a
              className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
              href="assets/images/product-detail-03.jpg"
            >
              <i className="fa fa-expand"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
