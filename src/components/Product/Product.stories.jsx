import React from 'react';
import Product from './Product';

export default {
  title: 'Product',
  component: Product,
};

export const ProductStory = () => (
  <Product
    image="https://images.unsplash.com/photo-1559532124-ceb46418da11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxjYW5kbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg"
    title="love"
    description="natural beewax candles couple"
    price="4.5"
  />
);
