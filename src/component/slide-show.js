// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderComponent = () => {
//   const settings = {
//     dots: true, 
//     infinite: true, 
//     speed: 1000, 
//     slidesToShow: 1, 
//     slidesToScroll: 1, 
//     autoplay: true, 
//     autoplaySpeed: 700, 
//     fade: true, 
//   };

//   return ( 

//     <section className="section-slide">
//       <Slider {...settings}>
//         <div className="item-slick1" style={{ backgroundImage: 'url(/images/slide-03.jpg)' }}>
//           <div className="container h-full">
//             <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//               <span className="ltext-101 cl2 respon2">Women Collection 2018</span>
//               <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">NEW SEASON</h2>
//               <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="item-slick1" style={{ backgroundImage: 'url(/images/slide-01.jpg)' }}>
//           <div className="container h-full">
//             <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//               <span className="ltext-101 cl2 respon2">Men New-Season</span>
//               <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">Jackets & Coats</h2>
//               <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="item-slick1" style={{ backgroundImage: 'url(/images/slide-02.jpg)' }}>
//           <div className="container h-full">
//             <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
//               <span className="ltext-101 cl2 respon2">Men Collection 2018</span>
//               <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">New arrivals</h2>
//               <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </section>
//   );
// };

// export default SliderComponent;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    fade: true,
  };

  return (
    <section className="section-slide">
      <Slider {...settings}>
        <div className="item-slick1" id='slide1' style={{ backgroundImage: 'url(../assets/images/slide-03.jpg)' }}>
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
              <span className="ltext-101 cl2 respon2">Women Collection 2018</span>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">NEW SEASON</h2>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="item-slick1" id='slide2' style={{ backgroundImage: 'url(../assets/images/slide-01.jpg)' }}>
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
              <span className="ltext-101 cl2 respon2">Men New-Season</span>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">Jackets & Coats</h2>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="item-slick1" id='slide3' style={{ backgroundImage: 'url(../assets/images/slide-02.jpg)' }}>
          <div className="container h-full">
            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
              <span className="ltext-101 cl2 respon2">Men Collection 2018</span>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">New arrivals</h2>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SliderComponent;
