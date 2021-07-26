import React from 'react';

import * as S from './ProductsList.style';

import Product from '../Product/Product';

const ProductsList = ({ products }) => (
  <>
    <S.ProductsContainer>
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
    </S.ProductsContainer>
  </>
);

export default ProductsList;
