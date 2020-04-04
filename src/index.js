// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom"
import React from "react"
import { 
  BrowserRouter as Router, 
  Route , Switch 
} from "react-router-dom"

import Header from "./template/Header/"
import ErrorPage from "./views/ErrorPage/"
import HomePage from "./views/HomePage/"
// import FirstNameLastName from './views/StudentPage/FirstNameLastName/FirstNameLastName'

/* ↓ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez"
import MarioAlvarez from "./views/StudentPage/MarioAlvarez/MarioAlvarez"
import Adi from "./views/StudentPage/Adi/Adi"
/* ↑ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↑ */



import "./assets/index.css"
import "./assets/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"



/* <Route exact path="/first-name-last-name" component={FirstNameLastName} /> */
function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} /> 

          {/* ↓ ADD YOUR ROUTE COMPONENT HERE ↓ */}
          <Route exact path="/michael-alvarez" component={MichaelAlvarez} />
          <Route exact path="/mario-alvarez" component={MarioAlvarez} />
          <Route exact path="/adi" component={Adi} />
          {/* ↑ ADD YOUR ROUTE COMPONENT HERE ↑ */}

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  )
}



const root = document.getElementById("root")
ReactDOM.render(<App />, root)
// serviceWorker.unregister();