import React from 'react';

import '../assets/components/Character.css'

const Character = ({character}) => {
  let statusEmoji = '👍';

  switch (character.status) {
    case 'Dead':
      statusEmoji = '☠'
      
      break;
    case 'unknown':
      statusEmoji = '🤷‍♀️🤷‍♂️'
      
      break;
  
    default: 
      statusEmoji = '👍'
      break;
  }

  return (
    <div className="Character">
      <div className="card">
        <div className="card__info">
          <img className="card__img" src={character.image} alt="" />
          <h2>{character.name}</h2>
          <div className="Character__info">
            <span><strong>Status: </strong>{character.status} {statusEmoji}</span>
            <span><strong>Species: </strong>{character.species}</span>
            <span><strong>Origin: </strong>{character.origin.name}</span>
            <span><strong>Location: </strong>{character.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;