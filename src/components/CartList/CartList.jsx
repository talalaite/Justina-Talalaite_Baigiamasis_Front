import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CartList.style';
import CartProduct from '../CartProduct/CartProduct';

const CartList = ({ products }) => (
  <>
    {/* {console.log(products)} */}
    <S.Container>
      {products &&
        products.map((product) => (
          <CartProduct
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
    </S.Container>
  </>
);

CartList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CartList;
