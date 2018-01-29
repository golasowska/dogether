import { REMOVE_MESSAGE } from '../actions';

export default function removeMes(state = [], action) {
  console.log('stejt w delete message', state);
  switch (action.type) {
    case REMOVE_MESSAGE:
      return state;
    default:
      return state;
  }
}
