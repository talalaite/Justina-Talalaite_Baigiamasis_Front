import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, type }) => (
  <>
    <S.Button type={type}>{children}</S.Button>
  </>
);

const typeParams = ['submit', 'button'];

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  type: PropTypes.oneOf(typeParams),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
