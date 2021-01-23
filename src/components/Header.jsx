import React, { useState } from 'react';

const Header = ({darkMode, handleClick}) => {

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{ darkMode ? 'Dark Mode' : 'Ligth Mode' }</button>
    </div>
  );
}

export default Header;