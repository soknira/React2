import React, { useState } from 'react';

const ProductInfo = () => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  return (
    <div className="p-r-50 p-t-5 p-lr-0-lg">
      <h4 className="mtext-105 cl2 js-name-detail p-b-14">Lightweight Jacket</h4>

      <span className="mtext-106 cl2">$58.79</span>

      <p className="stext-102 cl3 p-t-23">
        Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
      </p>

      {/* Size selection */}
      <div className="p-t-33">
        <div className="flex-w flex-r-m p-b-10">
          <div className="size-203 flex-c-m respon6">Size</div>
          <div className="size-204 respon6-next">
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option>Choose an option</option>
              <option value="S">Size S</option>
              <option value="M">Size M</option>
              <option value="L">Size L</option>
              <option value="XL">Size XL</option>
            </select>
          </div>
        </div>

        {/* Color selection */}
        <div className="flex-w flex-r-m p-b-10">
          <div className="size-203 flex-c-m respon6">Color</div>
          <div className="size-204 respon6-next">
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option>Choose an option</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
              <option value="Grey">Grey</option>
            </select>
          </div>
        </div>

        {/* Quantity selection */}
        <div className="flex-w flex-r-m p-b-10">
          <div className="wrap-num-product flex-w m-r-20 m-tb-10">
            <div
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
              onClick={() => handleQuantityChange('decrement')}
            >
              <i className="fs-16 zmdi zmdi-minus"></i>
            </div>
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="number"
              value={quantity}
              readOnly
            />
            <div
              className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
              onClick={() => handleQuantityChange('increment')}
            >
              <i className="fs-16 zmdi zmdi-plus"></i>
            </div>
          </div>

          <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
