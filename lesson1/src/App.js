import './App.css';
import React from 'react';
import Item from './components/item/Item-component';

function App() {
  let characters = [
    {
      id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      id: 3, name: 'Summer Smith', status: 'Alive', species: 'Human', gender:"Female",image:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      id: 4, name: 'Beth Smith', status: 'Alive', species: 'Human', gender:"Female",image:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      id: 5, name: 'Jerry Smith', status: 'Alive', species: 'Human', gender:"Male",image:"https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }

  ]
  const getData = fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {

      console.log(data.results);
    })
  return (
    <div className='wrapper'>
      <Item charId={characters[0]} />
      <Item charId={characters[1]} />
      <Item charId={characters[2]} />
      <Item charId={characters[3]} />
      <Item charId={characters[4]} />
      <Item charId={characters[0]} />
      <Item charId={characters[1]} />
      <Item charId={characters[2]} />
      <Item charId={characters[3]} />
      <Item charId={characters[4]} />
    </div>

  );
}

export default App;
