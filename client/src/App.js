import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Subnav from './components/navbar/Subnav';
import BtnMain from './components/Pages/ButtonsPg/BtnMain';
import CardsMain from './components/Pages/CardsPg/CardsMain';
import SpinMain from './components/Pages/Spinners/SpinMain';
import BadgeMain from './components/Pages/Badges/BadgeMain';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Subnav />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/components/buttons" exact component={BtnMain} />
            <Route path="/components/cards" exact component={CardsMain} />
            <Route path="/components/spinners" exact component={SpinMain} />
            <Route path="/components/badges" exact component={BadgeMain} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;