import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  selectedDog: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedDog: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedDog: null
      };
    default:
      return state;
  }
}
