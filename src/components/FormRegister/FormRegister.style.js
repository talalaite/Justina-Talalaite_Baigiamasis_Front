import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  color: #eac000;
  text-transform: uppercase;
`;

export const RegisterWrapper = styled.div`
  padding: 1rem;
  @media only screen and (min-width: 750px) {
    & {
      min-width: 750px;
      margin: 0 auto;
      padding-top: 5rem;
    }
  }
`;

export const FormRegister = styled.form`
  padding: 0.5rem 0 1rem 0;
`;

export const Message = styled.h2`
  color: rgb(0, 128, 0);
  text-align: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  color: rgb(78, 78, 78);
  border: 1px solid rgb(215, 215, 215);
  border-radius: 5px;
  padding: 0.8rem;
  width: 100%;
  margin-top: 1rem;
`;
