import styled from 'styled-components';

export const NotificationBlock = styled.div`
  background: #e6f4f1;
  border-radius: 0.4rem;
  color: #000;
  padding: 1rem;
  position: relative;
`;

export const CloseButton = styled.button`
  background-color: #95b0b4;
  border: 0;
  border-radius: 50%;
  color: #eefcfe;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  text-align: center;
  line-height: 1rem;
  padding: 0;
  &:hover {
    background-color: #00709d;
    outline: none;
  }
`;
