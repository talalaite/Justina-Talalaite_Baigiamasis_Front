import styled from 'styled-components';

export const Footer = styled.div`
  color: #ffffff;
  margin-top: auto;
`;

export const Container = styled.div`
  @media only screen and (min-width: 750px) {
    & {
      width: 750px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FooterWrapper = styled.div`
  text-align: center;

  &:last-child {
    padding-bottom: 2rem;
  }

  @media only screen and (min-width: 750px) {
    & {
      padding-bottom: 1rem;
      text-align: left;
    }
  }
`;

export const Title = styled.h3`
  color: #eac000;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const Ul = styled.div`
  margin-bottom: 1rem;
`;

export const ListItems = styled.li`
  list-style: none;
  padding-top: 0.6rem;
  font-size: 0.7rem;
`;

export const CopyRight = styled.span`
  color: #eac000;
  text-transform: uppercase;
  font-size: 0.7rem;
`;

export const Icon = styled.span`
  padding: 0.5rem 0.5rem 0 0;
  font-size: 1rem;
`;
