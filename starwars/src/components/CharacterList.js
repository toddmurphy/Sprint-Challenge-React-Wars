import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {
  //Check response for Iniital data structure --> initial response is an 'object' --> set useState as an 'object'
  const [characterData, setCharacterData] = useState([]);
  //Add second slice of state to do the search query --> set as empty string because text we input is string and will be in 'value'
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        // console.log(response.data.results);
        // setCharacterData(response.data.results);
        const dataArray = response.data.results;
        console.log(dataArray);
        //Filter the dataArray by 'firstname'
        const result = dataArray.filter(data => data.name.toLowerCase().includes(query.toLowerCase()));
        setCharacterData(result);
      })
      .catch(error => {
        console.log('No star wars data returned', error);
      });
    //'query' gets set in the dependency array because we're watching it change every character.
  }, [query]); //add empty dependency array to avoid infinite loop

  //Setup a onChange Handler using 'setQuery' to watch for any change in event.target.value, which will be 'query' and what we type in the input value
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="firstname" placeholder="search by first name" onChange={handleInputChange} value={query} />
      </form>
      <div>
        {characterData.map((characters, index) => {
          return <Character key={index} characters={characters} />;
        })}
      </div>
    </div>
  );
};

export default CharacterList;
