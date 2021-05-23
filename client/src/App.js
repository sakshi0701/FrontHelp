import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import Navbar from './components/navbar/Navbar';
import { Cards } from './components/PageStyles/Cards';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <Router>
         <Sidebar />
      </Router>
      <Cards style={{ margin:"5px", maxWidth:"95%" }}>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Cards>
    </>
  );
}

export default App;
