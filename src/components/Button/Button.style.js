import styled from 'styled-components';

const background = {
  primary: '#ffd91d',
  secondary: '#ffffff',
};

export const Button = styled.button`
  background: ${(props) => background[props.color]};
  border: none;
  border-radius: 2rem;
  color: #040c26;
  cursor: pointer;
  display: block;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  outline: none;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  &:hover {
    background: #eac000;
  }
  &:active {
    background: #eac000;
  }
`;
