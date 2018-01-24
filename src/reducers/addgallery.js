import { ADD_GALLERY } from '../actions';

export default function gallery(state=[], action) {
  switch (action.type) {
    case ADD_GALLERY:
    return [action.payload,...state];
    default: return state;
  }
};
