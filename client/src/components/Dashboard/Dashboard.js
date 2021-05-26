import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Cards } from '../PageStyles/Cards';

const Dashboard = () => {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Cards style={{ margin: "5px", maxWidth: "95%" }}>
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </Cards>
  )
}

export default Dashboard;