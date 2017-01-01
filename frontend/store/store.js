import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';


const preloadedState = {
  notes: [],
  tracks: {},
  isRecording:false

};


const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state
  )
);

export default configureStore;
