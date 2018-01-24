import { DISPLAY_ADOPTION} from '../actions';

export default function displayadoption(state=[], action){
  switch(action.type) {
    case DISPLAY_ADOPTION:
    return action.payload;
    default: return state;
  }
}
