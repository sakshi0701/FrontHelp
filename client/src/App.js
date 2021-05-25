import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
// import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Sidebar /> */}
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;