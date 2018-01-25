import { BLOCK_VOTE } from '../actions';

export default function article(state = true, action) {
  switch (action.type) {
    case BLOCK_VOTE:
      return action.payload;
    default:
      return state;
  }
}
