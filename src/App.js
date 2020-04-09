import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

import { Activity } from './pages/Activity';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { configureStore } from './redux/configureStore';
import { rootEpic } from './redux/rootEpic';
import { rootReducer } from './redux/rootReducer';
import styles from './App.module.css';

const { store, persistor } = configureStore({
  rootReducer,
  rootEpic,
})

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.app}>
        <Router>
          <Navigation />

          <Switch>
            <Route path="/activity" component={Activity} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </PersistGate>
  </Provider>
)

export default App
