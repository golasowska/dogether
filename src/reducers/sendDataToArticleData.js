import { SEND_DATA_TO_ARTICLE_DATA } from '../actions';

export default function sendData(state = [], action) {
  switch (action.type) {
    case SEND_DATA_TO_ARTICLE_DATA:
      return action.payload;
    default:
      return state;
  }
}
