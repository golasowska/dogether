import { ADD_VOTE } from '../actions';

export default function article(state = [], action) {
  switch (action.type) {
    case ADD_VOTE:
      return action.payload;
    default:
      return state;
  }
}
