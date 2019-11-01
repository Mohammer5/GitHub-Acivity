import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

export const configureStore = ({
  rootReducer,
  rootEpic,
  initialState,
  dependencies,
}) => {
  const epicMiddleware = createEpicMiddleware({ dependencies });
  const middleWare = applyMiddleware( epicMiddleware );
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(middleWare)
  )

  epicMiddleware.run(rootEpic);
  return store
}
