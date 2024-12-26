import React, { useState, useEffect } from 'react';

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemCount(totalCount);
  }, []);

  return (
    <header>
      <div className="container-menu-desktop">
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>

              <a href="/signup" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>

        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            <a href="/" className="logo">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO"/>
            </a>

            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li className="label1" data-label1="hot">
                  <a href="/shipping">Features</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/order-details/:orderId">My Order</a>
                </li>
              </ul>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>

              {/* Update cart icon with dynamic number of items */}
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={cartItemCount}>
                <a href="/shipping"><i className="zmdi zmdi-shopping-cart"></i></a>
              </div>

              <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                <i className="zmdi zmdi-favorite-outline"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="wrap-header-mobile">
        <div className="logo-mobile">
          <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search"></i>
          </div>

          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={cartItemCount}>
            <i className="zmdi zmdi-shopping-cart"></i>
          </div>

          <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
            <i className="zmdi zmdi-favorite-outline"></i>
          </a>
        </div>

        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
