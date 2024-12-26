import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import CartTable from './CartTable';
import axios from 'axios';

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = 2; // Shared user ID for consistency

  // Fetch cart data when the page loads
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
        const cartData = response.data;

        if (cartData.length > 0) {
          const products = await Promise.all(
            cartData[0].products.map(async (product) => {
              const productResponse = await axios.get(
                `https://fakestoreapi.com/products/${product.productId}`
              );
              const productData = productResponse.data;
              return {
                id: product.productId,
                name: productData.title,
                price: productData.price,
                quantity: product.quantity,
                image: productData.image,
              };
            })
          );
          setCartItems(products);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Add a product to the cart
  const addToCart = async (productId, quantity) => {
    try {
      const cartData = {
        userId,
        date: new Date().toISOString().split('T')[0],
        products: [{ productId, quantity }],
      };

      await axios.post('https://fakestoreapi.com/carts', cartData);

      // Update cartItems state to reflect the added product
      const existingProduct = cartItems.find((item) => item.id === productId);
      if (existingProduct) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      } else {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const productData = response.data;

        setCartItems((prevItems) => [
          ...prevItems,
          {
            id: productId,
            name: productData.title,
            price: productData.price,
            quantity,
            image: productData.image,
          },
        ]);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      <h1>Shopping Page</h1>
      <ProductDetail productId={1} addToCart={addToCart} />
      <CartTable cartItems={cartItems} isLoading={isLoading} />
    </div>
  );
};

export default ShoppingPage;
