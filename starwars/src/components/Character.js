import React from 'react';

const Character = props => {
  return (
    //add character props data here
    <div>
      <p>test character props</p>
      <p>{props.character.name}</p>
      <p>{props.character.birth_year}</p>
      <p>{props.character.gender}</p>
      <p>{props.character.height}</p>
      <p>{props.character.mass}</p>
      <p>{props.character.homeworld}</p>
    </div>
  );
};

export default Character;
