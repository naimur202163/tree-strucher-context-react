import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const RingContext =  createContext('ring')

function App() {
  const[house,setHouse]=useState(5);
  const oraments='gold Ring';
  return (

    <RingContext.Provider value={[oraments,house]}>
         <div className="App">
      <h2>Naimur </h2>
      <button onClick={()=>setHouse(house+1)}>Bye House</button>

      <GrandFather house={house} oraments={oraments}></GrandFather>
    </div>
    </RingContext.Provider>
   
  );
}

export default App;
