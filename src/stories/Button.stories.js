import React from 'react';
import './button.css';

export default {
    title: 'Button',
    component: 'button',
  };
  
  const Template = (args) => <button {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Go to game start',
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    primary: false,
    label: 'Go to move #',
  };