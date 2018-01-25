import { DISPLAY_MESSAGES } from '../actions';

export default function displaymessages(state = [], action) {
  switch (action.type) {
    case DISPLAY_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
