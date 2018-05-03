import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import {HashRouter, Route} from 'react-router-dom';
import PokemonDetail from "./pokemon/pokemon_detail";

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <main>
          <Route path="/" component={PokemonIndexContainer} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
        </main>
      </HashRouter>
    </Provider>
  );
}
export default Root;
