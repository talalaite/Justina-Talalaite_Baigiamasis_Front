import styled from 'styled-components';

export const ProductsContainer = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      max-width: 750px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
