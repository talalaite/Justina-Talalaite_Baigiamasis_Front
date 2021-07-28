import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #ffffffe3;
  box-shadow: rgb(0 0 0 / 22%) 0 0.625em 0.625em -0.5em;
  padding: 0.8rem;
  text-align: center;
  margin-bottom: 0.6rem;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }

  @media only screen and (min-width: 750px) {
    & {
      box-sizing: border-box;
      width: calc(100% / 3 - 0.8rem / 3 * 2);
    }
    &:not(:nth-of-type(3n)) {
      margin-right: 0.6rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 13rem;
  width: 13rem;
  margin: 0 auto;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.h5`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ProductPrice = styled.div`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 11rem;
  margin: auto;
`;
