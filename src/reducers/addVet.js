import { ADD_VET } from '../actions';

export default function article(state=[], action) {
  switch (action.type) {
    case ADD_VET:
    return [action.payload,...state];
    default: return state;
  }
};
