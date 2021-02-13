import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'primarybutton' : 'gohstbutton';
    return (
      <button
        type="button"
        className={['primary-button', `primary-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  };