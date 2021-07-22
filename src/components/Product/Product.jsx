import React from 'react';
import * as S from './Product.style';

import Button from '../Button/Button';

const Product = () => (
  <>
    <S.ProductContainer>
      <S.ProductImage />
      <S.ProductTitle />
      <S.ProductDescription />
      <S.ProductPrice />
      <Button />
    </S.ProductContainer>
  </>
);

export default Product;
