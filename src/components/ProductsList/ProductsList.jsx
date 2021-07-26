import React from 'react';

import Product from '../Product/Product';

const ProductsList = ({ data }) => (
  <>
    {data &&
      data.map((product) => (
        <Product
          key={product.title}
          image={product.img}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
  </>
);

export default ProductsList;
