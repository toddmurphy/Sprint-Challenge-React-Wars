import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {
  //Check response for Iniital data structure --> initial response is an 'object' --> set useState as an 'object'
  const [characterData, setCharacterData] = useState([]);

  //Use 'useEffect' to get data from star wars API using 'axios' get call
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log('No star wars data returned', error);
      });
  }, []); //add empty dependency array to avoid infinite loop

  return (
    <div>
      {characterData.map((characters, index) => {
        return <Character key={index} characters={characters} />;
      })}
    </div>
  );
};

export default CharacterList;
