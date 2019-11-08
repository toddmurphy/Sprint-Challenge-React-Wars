import React from 'react';
import './App.css';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';

const AppContainer = styled.div`
  border: 2px solid red;
`;

const AppTitle = styled.div`
  font-size: 3rem;
  text-align: center;
`;

// const MovieImage = styled.img`

// `
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppContainer>
      <AppTitle>React Wars: Ready for Battle </AppTitle>
      <div>
        <img src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </div>

      <CharacterList />
    </AppContainer>
  );
};

export default App;
