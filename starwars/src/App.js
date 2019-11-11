import React from 'react';
import './App.css';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import Logo from '../src/images/logo.png';

const TitleContainer = styled.div`
  padding: 5% 0;
  border: 1px sold red;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5% 0;
`;

const HeaderTitle = styled.div`
  width: 30%;
  font-size: 3rem;
  margin: 0 2%;
  display: flex;
  align-items: center;
  line-height: 1.3;
  font-weight: bold;
`;

const MovieImage = styled.img`
  width: 50%;
  border-radius: 7px;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
      <TitleContainer>
        <img src={Logo} alt="star wars logo" />
      </TitleContainer>

      <HeaderContainer>
        <HeaderTitle>May the Lambda Force be with you...Always!</HeaderTitle>
        <MovieImage src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </HeaderContainer>
      <CharacterList />
    </div>
  );
};

export default App;
