import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth, db } from './firebase';
import Home from './components/Home/Home';
import OpenPost from './components/OpenPost/OpenPost';
import Team from './components/Team/Team';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        }))
      }
    })
  }, [dispatch])

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          timestamp: null
        }))
      )
    );
  }, []);

  return (

    <Router>
      {!user ? (
        <div className="app">
          <Header />
          <Home posts={posts} />
        </div>
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Switch>
              <Route path="/openpost">
                <OpenPost />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </Router>

  );
}

export default App;
