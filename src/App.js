import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './assets/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  useEffect(()=>{
    console.log(darkMode);
    if(darkMode){
      document.body.style.backgroundColor = '#121f3d';
      document.body.style.color = 'white';
    }else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  },[darkMode]);

  return (
    <div className="App">
      <Header darkMode={darkMode} handleClick={handleClick}/>
      <h1>Hola Mundo!</h1>
      <Characters />
    </div>
  );
}

export default App;
