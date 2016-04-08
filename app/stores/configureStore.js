import { createStore } from 'redux';
import middleware from './middleware';
import rootReducer from '../reducers/rootReducer';


export default function configureStore(initialState) {
  const store = createStore(rootReducer, middleware)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
