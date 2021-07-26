import React from 'react';
import ProductsList from './ProductsList';

export default {
  title: 'Components/ProductsList',
  component: ProductsList,
};

const products = [
  {
    image:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    title: 'LTU',
    description: 'skanu gardu su rududu',
    price: '4',
  },
  {
    image:
      'https://images.unsplash.com/photo-1545246909-b4e087f05214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80.jpg',
    title: 'dark honey',
    description: 'skanu gardu su rududu',
    price: '4',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559532124-ceb46418da11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxjYW5kbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg',
    title: 'love',
    description: 'natural beewax candles couple',
    price: '4.5',
  },
  {
    image:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    title: 'LTU TEAM',
  },
  {
    image:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    title: 'LTU TEAM',
  },
];

export const ProductsListing = () => <ProductsList products={products} />;
