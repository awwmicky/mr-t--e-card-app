import React from "react";
// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./template/Header/";
import ErrorPage from "./views/ErrorPage/";
import HomePage from "./views/HomePage/";
import Adi from "./views/StudentPage/AdnanNiaz/AdnanNiaz";
import LarryNan from "./views/StudentPage/LarryNan/LarryNan";
import MarioAlvarez from "./views/StudentPage/MarioAlvarez/MarioAlvarez";
import MatthewRomano from "./views/StudentPage/MatthewRomano/MatthewRomano";
/* IMPORT & ROUTE YOUR COMPONENT */
// import FirstNameLastName from './views/StudentPage/FirstNameLastName/FirstNameLastName'
// <Route exact path="/first-name-last-name" component={FirstNameLastName} />

/* ↓↓↓ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↓↓↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez";
import MohamedHtout from "./views/StudentPage/MohamedHtout/MohamedHtout";

/* ↑↑↑ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↑↑↑ */

import "./assets/index.css";
import "./assets/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* ↓↓↓ ADD YOUR ROUTE COMPONENT HERE ↓↓↓ */}
          <Route exact path="/michael-alvarez" component={MichaelAlvarez} />
          <Route exact path="/mario-alvarez" component={MarioAlvarez} />
          <Route exact path="/adnan-niaz" component={Adi} />
          <Route exact path="/larry-nan" component={LarryNan} />
          <Route exact path="/matthew-romano" component={MatthewRomano} />
          <Route exact path="/mohamed-htout" component={MohamedHtout} />
          {/* ↑↑↑ ADD YOUR ROUTE COMPONENT HERE ↑↑↑ */}

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
// serviceWorker.unregister();
