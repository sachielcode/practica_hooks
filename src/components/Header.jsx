import React from 'react';

import '../assets/components/Header.css';

const Header = ({themeName, handleClick}) => {

  return (
    <div className="Header" id="Header">
      <h1>Rick and Morty Characters</h1>
      <button className="darkMode__button" type="button" onClick={handleClick}>{ themeName == 'Dark' ? 'Ligth Mode' : 'Dark Mode' }</button>
    </div>
  );
}

export default Header;