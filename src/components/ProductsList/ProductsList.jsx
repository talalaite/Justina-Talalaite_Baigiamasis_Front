import React from 'react';
import PropTypes from 'prop-types';
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

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ProductsList;
