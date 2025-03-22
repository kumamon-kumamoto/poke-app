import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createContext} from "react"


const pokeAPI_info={
  URL:"https://pokeapi.co/api/v2/pokemon/",
}

const pokeApiContext=createContext(pokeAPI_info);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <pokeApiContext.Provider value={pokeAPI_info}>
    <App />
  </pokeApiContext.Provider>
  // </React.StrictMode>
);

export default pokeApiContext;

