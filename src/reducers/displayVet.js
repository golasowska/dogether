import { DISPLAY_VETS} from '../actions';

export default function displayart(state=[], action){
  switch(action.type) {
    case DISPLAY_VETS:
    return action.payload;
    default: return state;
  }
}
