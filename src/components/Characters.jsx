import React, { useState, useEffect } from 'react';

import Character from './Character'
import '../assets/components/Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));  
  },[]);

  return (
    <div className="Characters">
      {characters.map(character => (
        <Character key={character.id} character={character}/>        
      ))}
    </div>
  );
}

export default Characters;