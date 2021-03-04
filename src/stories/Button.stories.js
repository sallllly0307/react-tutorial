import React from 'react';
import './button.css';

export default {
    title: 'react-tutorial/Button',
    component: 'Main/button',
  };
  
  const Template = (args) => <button {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Go to game start',
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Go to move #',
  };