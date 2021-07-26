import React from 'react';

import * as S from './Product.style';

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
    </S.ProductContainer>
  </>
);

export default Product;
