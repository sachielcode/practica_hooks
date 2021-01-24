import React, { useEffect, useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Content from './Content';
import './assets/App.css';

function App() {
  const themes = {
    light: {
      name: "Ligth Mode",
      background: "#eeeeee",
      color: "black"
    },
    dark: {
      name: "Dark Mode",
      background: "#121f3d",
      color: "white"
    }
  };
  
  const [theme, setTheme] = useState(themes.light);
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  
  useEffect(()=>{
    if(darkMode){
      setTheme(themes.dark);
    }else{
      setTheme(themes.light);
    }
  },[darkMode]);
  
  return (
    <ThemeContext.Provider value={theme}>
      <Content className="App" handleClick={handleClick} />
    </ThemeContext.Provider>
  );
}

export default App;
