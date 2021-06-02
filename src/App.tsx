import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToList from './component/AddToList';
import styled from 'styled-components';
import List from './component/List';

export interface IState{
    people:{
        name:string
        age:number
        img:string
        note?:string
    }[]
}

function App() {
    const [people, setPeople] = useState<IState['people']>([
        {
            name: "LeBron James",
            age: 35,
            img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            note: "Allegeric to staying on the same team",
          },
          {
            name: "Kobe Bryant",
            age: 42,
            img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
          }

    ])
    
    return (
        <AppContainer>
            <h1>My connections</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    text-align: center;
`
