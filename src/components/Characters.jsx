import React, { useState, useEffect } from 'react';

import Character from './Character'
import '../assets/components/Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [pagina, setPagina] = useState(0);
  const [load, setLoad] = useState(false);

  const fetchCharacters = (pagina) => {
    fetch('https://rickandmortyapi.com/api/character/?page=' + pagina)
    .then(response => response.json())
    .then(data => {
      setCharacters(characters.concat(data.results));
      setPages(data.info.pages)
    });
  }

  useEffect(() => {
    console.log({pages})
    if(pagina <= pages){
      fetchCharacters(pagina);
    }
  },[load, pagina]);
  
  
  const handler = (entries) => {
    const entry = entries[0];
    const isVisible = entry.isIntersecting;
    if(isVisible){
      setLoad(!load);
      setPagina(pagina => pagina + 1);
    }
  };

  useEffect(() => {
    const footer = document.getElementById('Footer');
    
    const observer = new IntersectionObserver(handler , {
      threshold: 0.95
    });
    
    observer.observe(footer);
  }, []);




  return (
    <div className="Characters">
      {characters.map(character => (
        <Character key={character.id} character={character}/>        
      ))}
    </div>
  );
}

export default Characters;