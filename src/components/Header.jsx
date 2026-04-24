import React from 'react';

function Header({ title, onRefresh, darkMode, onToggleDarkMode }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="header-controls">
        <button className="header-btn refresh-btn" onClick={onRefresh}>
          Refresh
        </button>
        <button className="header-btn dark-mode-btn" onClick={onToggleDarkMode}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}

export default Header;