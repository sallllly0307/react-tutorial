import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'primary-button' : 'gohst-button';
    return (
      <button
        type="button"
        className={['primary-button', mode].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  };