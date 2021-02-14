import React from 'react';
import PropTypes from 'prop-types';
import './primarybutton.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'PrimaryButton',
    component: 'primarybutton',
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  // eslint-disable-next-line react/jsx-no-undef
  const Template = (args) => <Button {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Button',
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Button',
  };