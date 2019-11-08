import React from 'react';

const Character = props => {
  return (
    //add character props data here
    <div>
      <p>test character props</p>
      <p>{props.characters.name}</p>
      <p>{props.characters.birth_year}</p>
      <p>{props.characters.gender}</p>
      <p>{props.characters.height}</p>
      <p>{props.characters.mass}</p>
      <p>{props.characters.homeworld}</p>
    </div>
  );
};

export default Character;
