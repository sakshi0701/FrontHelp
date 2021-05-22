import React, { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="Container">
      <h1>The Name</h1>
      <div>
        <div className="Container">
          <div>
            <div>
              <Posts setCurrentId={setCurrentId} />
            </div>
            <div>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
