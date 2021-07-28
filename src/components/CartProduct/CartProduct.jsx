import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiMinusCircle } from 'react-icons/fi';
import { BsPlusCircleFill } from 'react-icons/bs';
import * as S from './CartProduct.style';

const CartProduct = ({ image, title, price, amount }) => (
  <>
    <S.Container>
      <S.ProductContainer>
        <S.Wrapper>
          <S.ImageWrapper>
            <S.Image src={image} />
          </S.ImageWrapper>
          <S.Title>{title}</S.Title>
        </S.Wrapper>

        <S.Wrapper>
          <S.Button>
            <FiMinusCircle />
          </S.Button>
          <S.Quantity>{amount}</S.Quantity>
          <S.Button>
            <BsPlusCircleFill />
          </S.Button>
          <S.Price>
            &euro;
            {price}
          </S.Price>
          <S.Button>
            <RiDeleteBin6Line />
          </S.Button>
        </S.Wrapper>
      </S.ProductContainer>
    </S.Container>
  </>
);

CartProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CartProduct;
