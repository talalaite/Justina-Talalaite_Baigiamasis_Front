import React from 'react';
import CartProduct from './CartProduct';

export default {
  title: 'CartProduct',
  component: CartProduct,
};

export const CartProductStory = () => (
  <CartProduct
    image="https://images.unsplash.com/photo-1559532124-ceb46418da11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxjYW5kbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg"
    title="love"
    quantity="2"
    price="8"
  />
);
