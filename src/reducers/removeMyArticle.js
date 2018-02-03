import { REMOVE_MY_ARTICLE } from '../actions';

export default function removeMyArt(state = [], action) {
  switch (action.type) {
    case REMOVE_MY_ARTICLE:
      return state;
    default:
      return state;
  }
}
