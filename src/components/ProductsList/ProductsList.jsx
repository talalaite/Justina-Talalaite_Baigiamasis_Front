import React from 'react';

import * as S from './ProductsList.style';

import { Product } from '..';
// import Product from '../Product/Product';

const ProductsList = () => (
  <>
    <S.ListContainer>
      <Product />
    </S.ListContainer>
  </>
);

export default ProductsList;
