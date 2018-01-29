import { REMOVE_MY_ARTICLE } from '../actions';

export default function removeMyArt(state = [], action) {
  console.log('stejt w delete message', state);
  switch (action.type) {
    case REMOVE_MY_ARTICLE:
      return state;
    default:
      return state;
  }
}
