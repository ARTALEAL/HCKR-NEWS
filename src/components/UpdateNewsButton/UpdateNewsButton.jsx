import './UpdateNewsButton.css';

import React from 'react';

export const UpdateNewsButton = ({ text, isLoading, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading === 'loading' || isLoading === true}
      className="refresh-button"
    >
      {isLoading === 'loading' ? 'Loading...' : text}
    </button>
  );
};
