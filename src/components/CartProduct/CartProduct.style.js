import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      min-width: 750px;
      margin: 0 auto;
      padding-top: 5rem;
    }
  }
`;

export const ProductContainer = styled.div`
  background-color: #cccccce3;
  @media only screen and (min-width: 750px) {
    & {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  height: 8rem;
  width: 8rem;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  color: #05021b;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 1rem 0 1rem;
  outline: none;
  &:hover {
    color: #eac000;
  }
  &:active {
    color: #eac000;
  }
`;

export const Quantity = styled.div`
  font-weight: bold;
`;

export const Title = styled.h5`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0 auto;
  @media only screen and (min-width: 750px) {
    & {
      margin-left: 3rem;
    }
  }
`;

export const Price = styled.div`
  font-weight: bold;
  margin-left: 2rem;
  margin-right: 2rem;
`;
