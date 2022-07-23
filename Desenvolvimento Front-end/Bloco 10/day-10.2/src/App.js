import React, { Component } from "react";
import Pokedex from "./components-exercicios/Pokedex";
import pokemons from "./data"

class App extends Component {
  render() {
    return (
    <Pokedex pokemon={pokemons}/>
  )
  }
}

export default App;