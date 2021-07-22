import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const AddButton = () => (
  <Button background="#061031">add to cart</Button>
);
export const Secondary = () => <Button background="red">hey</Button>;
