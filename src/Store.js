import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducers from './reducers/Rootreducers';

export function configureStore() {
  const Store = createStore(
    RootReducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return Store;
}

