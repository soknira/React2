import React from "react";
import Category from "./category";
import In1product from "./in1product";

// Importing all CSS and assets
import '../template/assets/css/main.css';
import '../template/assets/css/util.css';
import '../template/assets/images/icons/favicon.png';
import '../template/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../template/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../template/assets/fonts/iconic/css/material-design-iconic-font.min.css';
import '../template/assets/fonts/linearicons-v1.0.0/icon-font.min.css';
import '../template/assets/vendor/animate/animate.css';
import '../template/assets/vendor/css-hamburgers/hamburgers.min.css';
import '../template/assets/vendor/animsition/css/animsition.min.css';
import '../template/assets/vendor/select2/select2.min.css';
import '../template/assets/vendor/daterangepicker/daterangepicker.css';
import '../template/assets/vendor/slick/slick.css';
import '../template/assets/vendor/MagnificPopup/magnific-popup.css';
import '../template/assets/vendor/perfect-scrollbar/perfect-scrollbar.css';

function Product() {
    return (
        <section className="bg0 p-t-23 p-b-140 m-t-150">
            <div className="container">
                <div className="p-b-10">
                    <h3 className="ltext-103 cl5">
                        Product Overview
                    </h3>
                </div>
                
                {/* Category and Product Components */}
                <Category />
                {/* <In1product /> */}

                {/* Load More Button */}
                <div className="flex-c-m flex-w w-full p-t-45">
                    <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                        Load More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Product;
