import React from "react"
// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Adi from "./components/Adi/Adi"
// import ___ from './components/___/'
import Header from "./components/Header/"
// import ___ from './views/StudentPage/___/___'
import ErrorPage from "./views/ErrorPage/"
import HomePage from "./views/HomePage/"
import MarioAlvarez from "./views/StudentPage/MarioAlvarez/MarioAlvarez"
/* ↓ import your component page here ↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez"

import "./assets/index.css"
import "./assets/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} /> {/* <Adi /> */}{" "}
          {/* ↓ add your route component here ↓ */}{" "}
          <Route exact path="/michael-alvarez" component={MichaelAlvarez} />{" "}
          <Route exact path="/mario-alvarez" component={MarioAlvarez} />
          <Route path="*" component={ErrorPage} />{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  )
}

const root = document.getElementById("root")
ReactDOM.render(<App />, root)
// serviceWorker.unregister();
