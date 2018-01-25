import { DISPLAY_GALLERY } from '../actions';

export default function displayart(state = [], action) {
  switch (action.type) {
    case DISPLAY_GALLERY:
      return action.payload;
    default:
      return state;
  }
}
