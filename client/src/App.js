import React, {useEffect} from 'react';

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="Container">
      <h1>The Name</h1>
      <div>
        <div className="Container">
          <div>
            <div>
              <Posts/>
            </div>
            <div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
