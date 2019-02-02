
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './../rootReducer';

const logger = createLogger({
  timestamp: true,
  collapsed: true
});

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(logger, thunk)),
  );
};

export default configureStore;
