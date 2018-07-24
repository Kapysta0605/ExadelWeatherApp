import { ADD_CITY, DELETE_CITY } from '../actions/actions'
import {Map} from 'immutable';

function city(action) {
  return {
    id: action.id,
    city: action.city,
  }
}
function cities(state = new Map(), action) {
  switch (action.type) {
    case ADD_CITY:
      return state.set(action.id, city(action));
    case DELETE_CITY:
      console.log(action.id)
      console.log(state.delete(action.id));
      return state.delete(action.id);
    default:
      return state;
  }
}

export default cities