import  {
          KEY_PRESSED,
          KEY_RELEASED,
          GROUP_UPDATE
        } from '../actions/notes_actions';

import { NOTE_NAMES } from '../util/tones';

import union from 'lodash/union';

const notesReducer = (state = [], action) => {

  Object.freeze(state);

  const validNoteKey = NOTE_NAMES.includes(action.key);
  const checkPreviousState = state.indexOf(action.key);
  
  switch(action.type) {
    case KEY_PRESSED:
      if (validNoteKey && checkPreviousState === -1) {
        return [
          ...state,
          action.key
        ];
      }
      return state;
    case KEY_RELEASED:
      if (checkPreviousState !== -1) {
        return [
          ...state.slice(0, checkPreviousState),
          ...state.slice(checkPreviousState + 1)
        ];
      }
      return state;
    case GROUP_UPDATE:
      return [
        ...action.notes
      ];
    default:
      return state;
  }
};

export default notesReducer;
