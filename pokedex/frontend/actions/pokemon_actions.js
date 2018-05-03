import {fetchAllPokemon} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ONE_ITEM = 'RECEIVE_ONE_ITEM';

export const receiveAllPokemon = (pokemon) => {
  return ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
  });
} ;


export const requestAllPokemon = () => {
  return (dispatch) => {
    fetchAllPokemon().then((pokemon) => {

      dispatch(receiveAllPokemon(pokemon));
    });
  };
};

export const receiveOnePokemon = (pokemonAndItems) => {
  return ({
    type: RECEIVE_ONE_POKEMON,
    pokemon,
    items
  });
};
