import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: 0.1rem solid #888;
  color: ${(props) => props.color};
  padding: 1rem 2rem;
`;
