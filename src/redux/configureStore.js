import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createEpicMiddleware } from 'redux-observable'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'githubState',
  stateReconciler: autoMergeLevel2,
  storage,
}

export const configureStore = ({
  rootReducer,
  rootEpic,
  initialState,
  dependencies,
}) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const epicMiddleware = createEpicMiddleware({ dependencies });
  const middleWare = applyMiddleware( epicMiddleware );
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancer(middleWare)
  )
  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store)
  return { store, persistor }
}
