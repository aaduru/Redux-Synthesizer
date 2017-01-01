import  {
          KEY_PRESSED,
          KEY_RELEASED
        } from '../actions/notes_actions';


import { NOTE_NAMES } from '../util/tones';


const notesReducer = (state = [], action) => {
  Object.freeze(state);

  const validKeyNote = NOTE_NAMES.includes(action.key);
  const checkPreviousState = state.indexOf(action.key);

  switch(action.type) {
    case KEY_PRESSED:
      if (validKeyNote && checkPreviousState === -1){
        return [
          ...state,
          action.key
        ];
      }
      return state;
    case KEY_RELEASED:
      if (checkPreviousState !== -1){
        return [
          ...state.slice(0,checkPreviousState),
          ...state.slice(checkPreviousState + 1)
        ];
      }
      return state;
    default:
      return state;
  }
};

export default notesReducer;
