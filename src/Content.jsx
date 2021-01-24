import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Characters from './components/Characters';

import './assets/Content.css';

const Content = ({handleClick}) => {
  const theme = useContext(ThemeContext);

  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.color;

  return ( 
    <div className="Content">
      <Header themeName={theme.name} handleClick={handleClick}/>
      <Characters />
      <Footer />
    </div>
   );
}
 
export default Content;