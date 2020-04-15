// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import React from "react";
import {
  BrowserRouter as Router
  , Route , Switch
} from "react-router-dom";

import Header from "./template/Header/";
import ErrorPage from "./views/ErrorPage/";
import HomePage from "./views/HomePage/";

/* ↓↓↓ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↓↓↓ */
import MichaelAlvarez from "./views/StudentPage/MichaelAlvarez/MichaelAlvarez";
import MarioAlvarez from "./views/StudentPage/MarioAlvarez/MarioAlvarez";
import AdnanNiaz from "./views/StudentPage/AdnanNiaz/AdnanNiaz";
import LarryNan from "./views/StudentPage/LarryNan/LarryNan";
import MatthewRomano from "./views/StudentPage/MatthewRomano/MatthewRomano";
import PatricioAguilar from "./views/StudentPage/PatricioAguilar/PatricioAguilar";
import JenniferNi from "./views/StudentPage/JenniferNi/JenniferNi";
import MartinNguyen from "./views/StudentPage/MartinNguyen/MartinNguyen";
import JimmyNguyen from "./views/StudentPage/JimmyNguyen/JimmyNguyen";
import SarahJo from "./views/StudentPage/SarahJo/SarahJo";
import MohamedHtout from "./views/StudentPage/MohamedHtout/MohamedHtout";
import EnkhtaivanSainEr from "./views/StudentPage/EnkhtaivanSainEr/EnkhtaivanSainEr";
import HermanLiu from "./views/StudentPage/HermanLiu/HermanLiu";
import HuanNguyen from "./views/StudentPage/HuanNguyen/HuanNguyen";
import LauraBao from "./views/StudentPage/LauraBao/LauraBao";
import WilsonWong from "./views/StudentPage/WilsonWong/WilsonWong";
import WanJingZhou from "./views/StudentPage/WanJingZhou/WanJingZhou";

import Test from "./views/StudentPage/--COPY-PASTE-RENAME/___";
/* ↑↑↑ IMPORT YOUR STUDENT PAGE COMPONENT HERE ↑↑↑ */

import "./assets/index.css";
import "./assets/reset.css";
import "./assets/test.css";
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
          <Route exact path="/adnan-niaz" component={AdnanNiaz} />
          <Route exact path="/larry-nan" component={LarryNan} />
          <Route exact path="/matthew-romano" component={MatthewRomano} />
          <Route exact path="/patricio-aguilar" component={PatricioAguilar} />
          <Route exact path="/jennifer-ni" component={JenniferNi} />
          <Route exact path="/martin-nguyen" component={MartinNguyen} />
          <Route exact path="/jimmy-nguyen" component={JimmyNguyen} />
          <Route exact path="/sarah-jo" component={SarahJo} />
          <Route exact path="/mohamed-htout" component={MohamedHtout} />
          <Route exact path="/enkhtaivan-sainer" component={EnkhtaivanSainEr} />
          <Route exact path="/herman-liu" component={HermanLiu} />
          <Route exact path="/huan-nguyen" component={HuanNguyen} />
          <Route exact path="/laura-bao" component={LauraBao} />
          <Route exact path="/wilson-wong" component={WilsonWong} />
          <Route exact path="/wanjing-zhou" component={WanJingZhou} />

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
