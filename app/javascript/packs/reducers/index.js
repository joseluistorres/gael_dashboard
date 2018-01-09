import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import time_blocks from './time_blocks'

const timeBlocksReducer = combineReducers({
  time_blocks
})

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function timeBlocksApp(initialState) {
  return createStoreWithMiddleware(timeBlocksReducer, initialState);
}
