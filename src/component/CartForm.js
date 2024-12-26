import React, { useState } from 'react';

const CartForm = () => {
  const [coupon, setCoupon] = useState('');

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    // Add your coupon application logic here
    console.log('Coupon applied:', coupon);
  };

  return (
    <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
      <div className="flex-w flex-m m-r-20 m-tb-5">
        <input
          className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
          type="text"
          name="coupon"
          placeholder="Coupon Code"
          value={coupon}
          onChange={handleCouponChange}
        />
        <div
          className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5"
          onClick={applyCoupon}
        >
          Apply coupon
        </div>
      </div>
      <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
        Update Cart
      </div>
    </div>
  );
};

export default CartForm;
