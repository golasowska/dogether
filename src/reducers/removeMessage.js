import { REMOVE_MESSAGE } from '../actions';

export default function removeMes(state = [], action) {
  switch (action.type) {
    case REMOVE_MESSAGE:
      return state;
    default:
      return state;
  }
}
