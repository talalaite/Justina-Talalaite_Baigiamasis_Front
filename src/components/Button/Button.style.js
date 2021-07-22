import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.background};
  border: none;
  border-radius: 2rem;
  color: #f3f4f7;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    background: #010160;
  }
`;
