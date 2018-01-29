import { DISPLAY_MY_ARTICLES } from '../actions';

export default function displayMyArticles(state = [], action) {
  switch (action.type) {
    case DISPLAY_MY_ARTICLES:
      return action.payload;
    default:
      return state;
  }
}
