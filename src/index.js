// import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route , Switch
} from 'react-router-dom'
import React from 'react'

import './assets/reset.css'
import './assets/index.css'

// import ___ from './components/___/'
import Header from './components/Header/'
// import ___ from './views/StudentPage/___/___'
import ErrorPage from './views/ErrorPage/'
import HomePage from './views/HomePage/'

/* ↓ import your component page here ↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez";
// import MarioAlvarez from "./views/StudentPage/MarioAlvarez/MarioAlvarez";



function App () {

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={ HomePage } />

          {/* ↓ add your route component here ↓ */}
          <Route exact path="/michael-alvarez" component={ MichaelAlvarez } />
          {/* <Route exact path="/mario-alvarez" component={ MarioAlvarez } /> */}

          <Route path='*' component={ ErrorPage } />
        </Switch>
      </Router>
    </>
  );

}



const root = document.getElementById('root');
ReactDOM.render( <App /> , root )
// serviceWorker.unregister();