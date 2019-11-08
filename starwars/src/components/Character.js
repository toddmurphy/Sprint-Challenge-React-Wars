import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2% 0;
  margin: 5% 0;
  border-radius: 5px;
`;

const Character = props => {
  return (
    //add character props data here
    <CharacterContainer>
      <p>{props.characters.name}</p>
      <p>{props.characters.birth_year}</p>
      <p>{props.characters.gender}</p>
      <p>{props.characters.height}</p>
      <p>{props.characters.mass}</p>
    </CharacterContainer>
  );
};

export default Character;
