import { DISPLAY_DOG_FRIENDLY} from '../actions';

export default function displayart(state=[], action){
  switch(action.type) {
    case DISPLAY_DOG_FRIENDLY:
    return action.payload;
    default: return state;
  }
}
