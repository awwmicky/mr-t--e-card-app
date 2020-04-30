// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./template/Header/";
import ErrorPage from "./views/ErrorPage/";
import HomePage from "./views/HomePage/";

/* ↓↓↓ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↓↓↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez";
import MarioAlvarez   from "./views/StudentPage/MarioAlvarez/MarioAlvarez";
import AdnanNiaz      from "./views/StudentPage/AdnanNiaz/AdnanNiaz";
import LarryNan       from "./views/StudentPage/LarryNan/LarryNan";
import MatthewRomano  from "./views/StudentPage/MatthewRomano/MatthewRomano";
import MartinNguyen   from "./views/StudentPage/MartinNguyen/MartinNguyen";
import SarahNaas      from "./views/StudentPage/SarahNaas/SarahNaas";
import MohamedHtout   from "./views/StudentPage/MohamedHtout/MohamedHtout";
import LauraBao       from "./views/StudentPage/LauraBao/LauraBao";
import HermanLiu      from "./views/StudentPage/HermanLiu/HermanLiu";

import Test from "./views/StudentPage/--COPY-PASTE-RENAME/___";
/* ↑↑↑ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↑↑↑ */

import "./assets/index.css";
import "./assets/reset.css";
// import "./assets/test.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* ↓↓↓ ADD YOUR ROUTE COMPONENT HERE ↓↓↓ */}
          <Route exact path="/michael-alvarez" component={MichaelAlvarez} />
          <Route exact path="/mario-alvarez"   component={MarioAlvarez} />
          <Route exact path="/adnan-niaz"      component={AdnanNiaz} />
          <Route exact path="/larry-nan"       component={LarryNan} />
          <Route exact path="/matthew-romano"  component={MatthewRomano} />
          <Route exact path="/martin-nguyen"   component={MartinNguyen} />
          <Route exact path="/sarah-naas"      component={SarahNaas} />
          <Route exact path="/mohamed-htout"   component={MohamedHtout} />
          <Route exact path="/laura-bao"       component={LauraBao} />
          <Route exact path="/herman-liu"      component={HermanLiu} />

          <Route exact path="/test" component={Test} />
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
