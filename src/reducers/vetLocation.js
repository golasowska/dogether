import { VET_LOCATION } from '../actions';

export default function vetLocation(state = [], action) {
  switch (action.type) {
    case VET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
