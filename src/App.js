import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React from 'react'

import { ConnectedActivity } from './pages/Activity';
import { ConnectedHome } from './pages/Home';
import { ConnectedNavigation } from './components/Navigation';
import { configureStore } from './redux/configureStore';
import { rootEpic } from './redux/rootEpic';
import { rootReducer } from './redux/rootReducer';
import styles from './App.module.css';

const initialState = localStorage.getItem('githubState')
  ? JSON.parse(localStorage.getItem('githubState'))
  : {}

const store = configureStore({
  rootReducer,
  rootEpic,
  initialState,
})

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Router>
          <ConnectedNavigation />

          <Switch>
            <Route
              path="/activity"
              component={ConnectedActivity}
            />

            <Route
              path="/"
              component={ConnectedHome}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
