// import React, { useState, useEffect } from 'react';

// const CartTable = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPayPalReady, setIsPayPalReady] = useState(false);

//   useEffect(() => {
//     const fetchCartDetails = () => {
//       try {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCartItems(cart);
//       } catch (error) {
//         console.error('Error fetching cart details:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCartDetails();
//   }, []); 

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://www.paypal.com/sdk/js?client-id=AU4HuuzbEzvh8SfOfcwB6R8wxgZY6ol5X7CnGADvUg4w8q0IiPsdxv-y0aFMAqIZyMFvrS623YuR9gl-&currency=USD`;
//     script.addEventListener('load', () => setIsPayPalReady(true));
//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const updateQuantity = (id, delta) => {
//     setCartItems((prevCartItems) => {
//       const updatedCartItems = prevCartItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
//           : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//       return updatedCartItems;
//     });
//   };

//   const deleteProduct = (id) => {
//     setCartItems((prevCartItems) => {
//       const updatedCartItems = prevCartItems.filter(item => item.id !== id);
//       localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//       return updatedCartItems;
//     });
//   };

//   const calculateTotal = () => {
//     return cartItems
//       .reduce((acc, item) => acc + item.price * item.quantity, 0)
//       .toFixed(2);
//   };
// const PayPalButton = () => {
// 	window.paypal.Buttons({
// 	  createOrder: (data, actions) => {
// 		return actions.order.create({
// 		  purchase_units: [
// 			{
// 			  amount: {
// 				value: calculateTotal(),  // Cart total amount
// 			  },
// 			},
// 		  ],
// 		});
// 	  },
// 	  onApprove: (data, actions) => {
// 		return actions.order.capture().then((details) => {
// 		  alert("Payment successful! Thank you, " + details.payer.name.given_name);
  
// 		  const orderDetails = {
// 			orderId: details.id,
// 			totalAmount: calculateTotal(),
// 			items: cartItems, 
// 		  };
// 		  localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
// 		  localStorage.removeItem('cart');
// 		  setCartItems([]);
  
// 		  window.location.href = `/order-details/${details.id}`; // Redirect to the order details page
// 		});
// 	  },
// 	  onError: (err) => {
// 		console.error("PayPal error: ", err);
// 		alert("Payment failed! Please try again.");
// 	  },
// 	}).render('#paypal-button');
//   };
  

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
//         <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
//           Home
//           <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
//         </a>
//         <span className="stext-109 cl4">Shopping Cart</span>
//       </div>

//       <form className="bg0 p-t-75 p-b-85">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
//               <div className="m-l-25 m-r--38 m-lr-0-xl">
//                 <div className="wrap-table-shopping-cart">
//                   <table className="table-shopping-cart">
//                     <thead>
//                       <tr className="table_head">
//                         <th className="column-1">Product</th>
//                         <th className="column-2"></th>
//                         <th className="column-3">Price</th>
//                         <th className="column-4">Quantity</th>
//                         <th className="column-5">Total</th>
//                         <th className="column-6">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartItems.map((item) => (
//                         <tr className="table_row" key={item.id}>
//                           <td className="column-1">
//                             <div className="how-itemcart1">
//                               <img src={item.image} alt={item.name} />
//                             </div>
//                           </td>
//                           <td className="column-2">{item.name}</td>
//                           <td className="column-3">${item.price.toFixed(2)}</td>
//                           <td className="column-4">
//                             <div className="wrap-num-product flex-w m-l-auto m-r-0">
//                               <button
//                                 type="button"
//                                 className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
//                                 onClick={() => updateQuantity(item.id, -1)}
//                               >
//                                 <i className="fs-16 zmdi zmdi-minus"></i>
//                               </button>
//                               <input
//                                 className="mtext-104 cl3 txt-center num-product"
//                                 type="number"
//                                 value={item.quantity}
//                                 readOnly
//                               />
//                               <button
//                                 type="button"
//                                 className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
//                                 onClick={() => updateQuantity(item.id, 1)}
//                               >
//                                 <i className="fs-16 zmdi zmdi-plus"></i>
//                               </button>
//                             </div>
//                           </td>
//                           <td className="column-5">
//                             ${(item.price * item.quantity).toFixed(2)}
//                           </td>
//                           <td className="column-6">
//                             <button 
//                               onClick={() => deleteProduct(item.id)}
//                               className="btn btn-danger">
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
//                   <input
//                     className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
//                     type="text"
//                     placeholder="Coupon Code"
//                   />
//                   <button className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
//                     Apply Coupon
//                   </button>
//                   <button className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
//                     Update Cart
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
//               <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
//                 <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
//                 <div className="flex-w flex-t bor12 p-b-13">
//                   <span className="stext-110 cl2">Subtotal:</span>
//                   <div className="size-209">
//                     <span className="mtext-110 cl2">${calculateTotal()}</span>
//                   </div>
//                 </div>

//                 <div className="flex-w flex-t bor12 p-t-15 p-b-30">
//                   <span className="stext-110 cl2">Shipping:</span>
//                   <div className="size-209 p-r-18 p-t-1">
//                     <p className="stext-111 cl6 p-t-2">
//                       There are no shipping methods available. Please double-check your
//                       address or contact us if you need help.
//                     </p>
//                   </div>
//                 </div>

//                 {/* <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
//                   <a href='/checkout'>Proceed to Checkout</a>
//                 </button> */}

//                 {/* PayPal Button */}
//                 <div id="paypal-button" className="m-t-20"></div>
//                 {isPayPalReady && <PayPalButton />} {/* Render PayPal button */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CartTable;


import React, { useState, useEffect } from 'react';

const CartTable = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPayPalReady, setIsPayPalReady] = useState(false);

  useEffect(() => {
    const fetchCartDetails = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
      } catch (error) {
        console.error('Error fetching cart details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartDetails();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AU4HuuzbEzvh8SfOfcwB6R8wxgZY6ol5X7CnGADvUg4w8q0IiPsdxv-y0aFMAqIZyMFvrS623YuR9gl-&currency=USD`;
    script.addEventListener('load', () => setIsPayPalReady(true));
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (isPayPalReady) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: calculateTotal(), // Cart total amount
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Payment successful! Thank you, " + details.payer.name.given_name);

            const orderDetails = {
              orderId: details.id,
              totalAmount: calculateTotal(),
              items: cartItems,
            };
            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

            localStorage.removeItem('cart');
            setCartItems([]);

            window.location.href = `/order-details/${details.id}`; // Redirect to the order details page
          });
        },
        onError: (err) => {
          console.error("PayPal error: ", err);
          alert("Payment failed! Please try again.");
        },
      }).render('#paypal-button');
    }
  }, [isPayPalReady, cartItems]);


  const updateQuantity = (id, delta) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const deleteProduct = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
        <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
          Home
          <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
        </a>
        <span className="stext-109 cl4">Shopping Cart</span>
      </div>

      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead>
                      <tr className="table_head">
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                        <th className="column-6">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr className="table_row" key={item.id}>
                          <td className="column-1">
                            <div className="how-itemcart1">
                              <img src={item.image} alt={item.name} />
                            </div>
                          </td>
                          <td className="column-2">{item.name}</td>
                          <td className="column-3">${item.price.toFixed(2)}</td>
                          <td className="column-4">
                            <div className="wrap-num-product flex-w m-l-auto m-r-0">
                              <button
                                type="button"
                                className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <i className="fs-16 zmdi zmdi-minus"></i>
                              </button>
                              <input
                                className="mtext-104 cl3 txt-center num-product"
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <i className="fs-16 zmdi zmdi-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="column-5">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="column-6">
                            <button
                              onClick={() => deleteProduct(item.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                  <input
                    className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <button className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                    Apply Coupon
                  </button>
                  <button className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
                <div className="flex-w flex-t bor12 p-b-13">
                  <span className="stext-110 cl2">Subtotal:</span>
                  <div className="size-209">
                    <span className="mtext-110 cl2">${calculateTotal()}</span>
                  </div>
                </div>

                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                  <span className="stext-110 cl2">Shipping:</span>
                  <div className="size-209 p-r-18 p-t-1">
                    <p className="stext-111 cl6 p-t-2">
                      There are no shipping methods available. Please double-check your
                      address or contact us if you need help.
                    </p>
                  </div>
                </div>

                {/* PayPal Button */}
                <div id="paypal-button" className="m-t-20"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartTable;
