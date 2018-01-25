import { RESERVE } from '../actions';

export default function reserve(state = [], action) {
  console.log('reducer reserve', action.payload);
  switch (action.type) {
    case RESERVE:
      return action.payload;
    default:
      return state;
  }
}
