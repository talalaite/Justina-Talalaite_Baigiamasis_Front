import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWraper = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      max-width: 900px;
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const NavigationBlock = styled.header`
  text-align: center;
  padding: 1rem;
  @media only screen and (min-width: 750px) {
    & {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const LinksBlock = styled.nav`
  margin-top: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  padding: 0.5rem;
  &:hover {
    color: black;
  }
  @media only screen and (min-width: 750px) {
    & {
      display: inline;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(0, 0, 0);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
