import React from 'react';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <h3>Error</h3>
      <p>{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;