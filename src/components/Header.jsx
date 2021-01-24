import React from 'react';

import '../assets/components/Header.css';

const Header = ({themeName, handleClick}) => {

  console.log(themeName)
  return (
    <div className="Header" id="Header">
      <h1>ReactHooks</h1>
      <button className="darkMode__button" type="button" onClick={handleClick}>{ themeName }</button>
    </div>
  );
}

export default Header;