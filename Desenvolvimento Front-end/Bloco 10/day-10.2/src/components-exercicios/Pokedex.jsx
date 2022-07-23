import React, { Component } from 'react';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    const pokemonsInfos = this.props.pokemon.map((e) => (
      <Pokemon key={e.id}pokemon={e}/>
    ))
    return (
      <div className='container'>
        <h1 className="Title">Pokedex</h1>
        { pokemonsInfos }
      </div>
    )
  }
}

export default Pokedex;