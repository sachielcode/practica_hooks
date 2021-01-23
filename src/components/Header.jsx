import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import '../assets/components/Header.css';

const Header = ({darkMode, handleClick}) => {

  const color = useContext(ThemeContext);

  return (
    <div className="Header">
      <h1 style={{ color }}>ReactHooks</h1>
      <button className="darkMode__button" type="button" onClick={handleClick}>{ darkMode ? 'Dark Mode' : 'Ligth Mode' }</button>
    </div>
  );
}

export default Header;