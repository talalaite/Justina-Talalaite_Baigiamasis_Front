import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, type, color }) => (
  <>
    <S.Button type={type} color={color}>
      {children}
    </S.Button>
  </>
);

const typeParams = ['submit', 'button'];
const colorParams = ['primary', 'secondary'];

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  type: PropTypes.oneOf(typeParams),
  color: PropTypes.oneOf(colorParams),
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
};

export default Button;
