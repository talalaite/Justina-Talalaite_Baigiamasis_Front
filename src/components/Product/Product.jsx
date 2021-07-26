import React from 'react';
import * as S from './Product.style';

import Button from '../Button/Button';

const Product = ({ data }) => (
  <S.ProductContainer>
    <S.ProductImage src={data.image} />
    <S.ProductTitle>{data.title}</S.ProductTitle>
    <S.ProductDescription>{data.description}</S.ProductDescription>
    <S.ProductPrice>
      &euro;
      {data.price}
    </S.ProductPrice>
    <Button background="#040C26">add to cart</Button>
  </S.ProductContainer>
);

export default Product;
