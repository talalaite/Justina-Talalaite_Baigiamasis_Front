import React from 'react';

import * as S from './ProductsList.style';

import { Product } from '..';

const ProductsList = () => (
  <>
    <S.ListContainer>
      <Product />
    </S.ListContainer>
  </>
);

export default ProductsList;
