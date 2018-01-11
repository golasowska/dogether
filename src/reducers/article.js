import { NEW_ARTICLE } from '../actions';

export default function article(state=[], action) {
  switch (action.type) {
    case NEW_ARTICLE:
    return [action.payload,...state];
    default: return state;
  }
};
