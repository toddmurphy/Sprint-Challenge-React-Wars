import React from 'react';
import styled from 'styled-components';

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2% 0;
  margin: 5% 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px -2px;
  background: lightgray;
  width: 80%;
`;

const CharacterText = styled.p`
  font-size: 1.4rem;
`;

const LikeButton = styled.button`
  font-size: 1.4rem;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: #03a1fc;
  color: #fff;
`;

const Character = props => {
  return (
    //add character props data here
    <CharacterWrapper>
      <CharacterContainer>
        <CharacterText>{props.characters.name}</CharacterText>
        <CharacterText>{props.characters.birth_year}</CharacterText>
        <CharacterText>{props.characters.gender}</CharacterText>
        <CharacterText>{props.characters.height}</CharacterText>
        <CharacterText>{props.characters.mass}</CharacterText>
        <LikeButton>Like</LikeButton>
      </CharacterContainer>
    </CharacterWrapper>
  );
};

export default Character;
