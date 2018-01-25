import { ADD_DOG_FRIENDLY } from '../actions';

export default function article(state = [], action) {
  switch (action.type) {
    case ADD_DOG_FRIENDLY:
      return [action.payload, ...state];
    default:
      return state;
  }
}
