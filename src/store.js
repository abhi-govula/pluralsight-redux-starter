import { applyMiddleware, createStore, combineReducers } from "redux"

import thunk from "redux-thunk"

import TodosReducer from './reducers/TodosReducer';

const rootReducer = combineReducers({
    todos: TodosReducer
});

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
}

const middleware = applyMiddleware( logger, thunk);

export default createStore(rootReducer, middleware)
