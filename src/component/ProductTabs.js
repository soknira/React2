import React from "react";
import Reviews from "./Reviews";

const ProductTabs = () => {
  return (
    <div className="bor10 m-t-50 p-t-43 p-b-40">
      <div className="tab01">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item p-b-10">
            <a className="nav-link active" data-toggle="tab" href="#description" role="tab">
              Description
            </a>
          </li>
          <li className="nav-item p-b-10">
            <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">
              Reviews (1)
            </a>
          </li>
        </ul>

        <div className="tab-content p-t-43">
          <div className="tab-pane fade show active" id="description" role="tabpanel">
            <div className="how-pos2 p-lr-15-md">
              <p className="stext-102 cl6">
                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris
                consequat ornare feugiat.
              </p>
            </div>
          </div>

          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
