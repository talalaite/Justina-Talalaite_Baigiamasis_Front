import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ color, children }) => (
  <S.Button color={color}>{children}</S.Button>
);

const colorParams = ['blue', 'red'];

Button.propTypes = {
  color: PropTypes.oneOf(colorParams).isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
