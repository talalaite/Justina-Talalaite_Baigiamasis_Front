import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import * as S from './Product.style';
import Button from '../Button/Button';

const Product = ({ image, title, description, price }) => (
  <>
    <S.ProductContainer>
      <S.ImageWrapper>
        <S.ProductImage src={image} />
      </S.ImageWrapper>
      <S.ProductTitle>{title}</S.ProductTitle>
      <S.ProductDescription>{description}</S.ProductDescription>
      <S.ProductPrice>
        &euro;
        {price}
      </S.ProductPrice>
      <S.ButtonContainer>
        <Button>
          <div>
            <span>add to cart</span>
            <RiShoppingCartLine />
          </div>
        </Button>
      </S.ButtonContainer>
    </S.ProductContainer>
  </>
);

export default Product;
