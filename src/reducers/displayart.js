import { DISPLAY_ARTICLES} from '../actions';

export default function displayart(state=[], action){
  switch(action.type) {
    case DISPLAY_ARTICLES:
    return action.payload;
    default: return state;
  }
}
