import React from 'react';
import {connect} from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import {PokemonIndex} from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => {
  const pokemon = selectAllPokemon(state);
  return {
    pokemon: pokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  requestAllPokemon: () => dispatch(requestAllPokemon())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PokemonIndex);
