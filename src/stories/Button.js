import React from 'react';
import './button.css';


export const Button = ({ primary,label, ...props }) => {
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