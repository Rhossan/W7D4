import { RECEIVE_ALL_ITEMS, RECEIVE_ONE_ITEM } from '../actions/pokemon_actions';

const ItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return Object.assign({}, state, action.items);
    case RECEIVE_ONE_ITEM:
      return Object.assign({}, state, action.items);
    default:
      return state;

  }
};

export default ItemsReducer;

//continue from here
