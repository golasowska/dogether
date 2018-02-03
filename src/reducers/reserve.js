import { RESERVE } from '../actions';

export default function reserve(state = [], action) {
  switch (action.type) {
    case RESERVE:
      return action.payload;
    default:
      return state;
  }
}
