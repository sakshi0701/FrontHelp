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
import Signup from "./components/Save/authentication/Signup";
import { AuthProvider } from "./components/Save/contexts/AuthContext";
import Login from "./components/Save/authentication/Login";
import PrivateRoute from "./components/Save/authentication/PrivateRoute";
import ForgotPassword from "./components/Save/authentication/ForgotPassword";
import SaveMain from "./components/Save/google-drive/Dashboard";
import Code from './components/Code/Code';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
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
            <PrivateRoute exact path="/save" component={SaveMain} />
            <PrivateRoute exact path="/folder/:folderId" component={SaveMain} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/code" exact component={Code} />

          </Switch>
        </div>
        <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;