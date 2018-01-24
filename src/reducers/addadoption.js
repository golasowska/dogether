import { ADD_ADOPTION } from '../actions';

export default function adoption(state=[], action) {
  console.log('adoption payload', action.payload);
  switch (action.type) {
    case ADD_ADOPTION:
    return [action.payload,...state];
    default: return state;
  }
};
