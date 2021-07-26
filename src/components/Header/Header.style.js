import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWraper = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      min-width: 750px;
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.img`
  height: 3.2rem;
`;

export const NavigationBlock = styled.header`
  text-align: center;
  padding: 1rem 0 0 0;
  @media only screen and (min-width: 750px) {
    & {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const LinksBlock = styled.nav`
  margin-top: 0.5rem;
  @media only screen and (min-width: 750px) {
    & {
      margin-top: 1rem;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  &:hover {
    color: #eac000;
  }
  &.active {
    color: #eac000;
  }
  @media only screen and (min-width: 750px) {
    & {
      display: inline;
      padding: 0 0 0 1rem;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  &:hover {
    color: #eac000;
  }
  @media only screen and (min-width: 750px) {
    & {
      display: inline;
      padding: 0 0 0 1rem;
    }
  }
`;
