import { DISPLAY_DOG_FRIENDLY, DISPLAY_DF_TAGS} from '../actions';

export default function displayart(state=[], action){
  switch(action.type) {
    case DISPLAY_DOG_FRIENDLY:
    return action.payload;
    case DISPLAY_DF_TAGS:
    return action.payload
    default: return state;
  }
}
