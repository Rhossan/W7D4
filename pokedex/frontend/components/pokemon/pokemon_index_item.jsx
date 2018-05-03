import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  debugger
  // (<Link to={`/pokemon/${pokemon.id}`}>
  //   <li key={pokemon.id}>
  //     {pokemon.name}
  //     <img src={pokemon.image_url}/>
  //   </li>
  // </Link>);
  const listItem =
  (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
      <img src={pokemon.image_url}/>
    </li>
  );

  debugger
  return listItem;
};



export default PokemonIndexItem;
