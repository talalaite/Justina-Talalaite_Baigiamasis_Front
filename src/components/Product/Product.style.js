import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #d9d9d93b;
  box-shadow: rgb(0 0 0 / 22%) 0 0.625em 0.625em -0.5em;
  padding: 0.8rem;
  text-align: center;
  width: 15rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;

export const ImageWrapper = styled.div`
  background-color: #ffffff;
  height: 14rem;
  width: 15rem;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.h5`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
`;
