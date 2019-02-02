import { combineReducers } from 'redux';
import chatLogReducer from './model/messages/reducer';

export default function createReducer() {
  return combineReducers({
    chatLogReducer
  });
}
