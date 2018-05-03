import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon, fetchOnePokemon} from './util/api_util';
import * as apiUtilActions from './actions/pokemon_actions.js';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});

//
// window.fetchAllPokemon = fetchAllPokemon;
// window.apiUtilActions = apiUtilActions;
// window.selectAllPokemon = selectAllPokemon;
window.fetchOnePokemon = fetchOnePokemon;
window.requestAllPokemon = apiUtilActions.requestAllPokemon;
