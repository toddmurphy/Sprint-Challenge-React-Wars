import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ResultsList = styled.div`
  border: 2px solid blue;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MovieIn = props => {
  //Objective: list films that characters are in.
  console.log(props);
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    // props.movie.forEach(url => {
    //   axios
    //     .get(url)
    //     .then(response => {
    //       //   console.log(response.data);
    //       const listData = response.data.title;
    //       // console.log(listData);
    //       setMovieTitles([listData]);
    //     })
    //     .catch(error => {
    //       console.log('no movie list returned', error);
    //     });
    // });
    props.movie.map(item => {
      axios
        .get(item)
        .then(response => {
          //   console.log(response.data);
          const listData = response.data.title;
          console.log(typeof listData);
          setMovieTitles([listData]);
        })
        .catch(error => {
          console.log('no movie list returned', error);
        });
    });
  }, [props.movie]);

  return (
    // <ResultsList>
    <div>
      {movieTitles.map(item => {
        // console.log(item);
        return item;
      })}
    </div>
    // </ResultsList>
  );
};

export default MovieIn;
