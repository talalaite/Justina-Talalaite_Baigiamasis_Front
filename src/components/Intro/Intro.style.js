import styled from 'styled-components';

export const IntroWrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1599734699886-ca08e4cb445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  @media only screen and (min-width: 750px) {
    & {
      max-width: 100vw;
      margin-top: 5rem;
    }
  }
`;

export const Background = styled.div`
  background-color: rgba(29, 36, 58, 0.699);
  padding: 1rem;
  @media only screen and (min-width: 750px) {
    & {
      padding: 2rem 0 6rem 0;
    }
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      max-width: 750px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export const Title = styled.h1`
  color: #ffffff;

  text-transform: uppercase;
`;

export const IntroText = styled.p`
  color: #ffffff;
  padding-top: 1rem;
`;

export const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  opacity: 80%;
`;
