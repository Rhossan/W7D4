import React from 'react';
import PokemonIndexItem from './pokemon_index_item';



export class PokemonIndex extends React.Component{
  componentDidMount(){
    this.props.requestAllPokemon();
  }
  render() {
    const pokeList = this.props.pokemon.map(pokemon => {
      return (<PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    });
    return (
      <ul>
        {pokeList}
      </ul>

    );
  }
}
