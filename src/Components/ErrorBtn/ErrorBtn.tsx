import './style.css';
import { useState } from 'react';

export const ErrorBtn = () => {
  const [state, setState] = useState({ hasError: false });

  const handleClick = () => {
    setState({ hasError: true });
  };

  if (state.hasError) {
    throw new Error('I crashed!');
  }

  return (
    <button className="btn-error" onClick={handleClick}>
      Error
    </button>
  );
};
