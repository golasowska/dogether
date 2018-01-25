import { SEND_ADOPTION_MESSAGE } from '../actions';

export default function adoptMessage(state = [], action) {
  switch (action.type) {
    case SEND_ADOPTION_MESSAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
