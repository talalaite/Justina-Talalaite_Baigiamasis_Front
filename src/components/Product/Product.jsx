import React from 'react';
import * as S from './Product.style';

// import { Button } from '..';
import Button from '../Button/Button';

const Product = ({ image, title, price, description }) => (
  <S.ProductContainer>
    <S.ProductImage src={image} />
    <S.ProductTitle>{title}</S.ProductTitle>
    <S.ProductDescription>{description}</S.ProductDescription>
    <S.ProductPrice>
      &euro;
      {price}
    </S.ProductPrice>
    <Button background="#040C26">add to cart</Button>
  </S.ProductContainer>
);

export default Product;
