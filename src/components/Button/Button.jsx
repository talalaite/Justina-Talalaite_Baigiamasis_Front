import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ background, children }) => (
  <S.Button background={background}>{children}</S.Button>
);

const colorParams = ['#040C26', 'red'];

Button.propTypes = {
  background: PropTypes.oneOf(colorParams).isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
