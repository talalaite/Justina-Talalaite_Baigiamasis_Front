import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button color="red">hi</Button>;
export const Secondary = () => <Button color="blue">hey</Button>;
