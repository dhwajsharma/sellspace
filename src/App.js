import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth, db } from './firebase';
import Home from './components/Home/Home';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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

  return (

    <Router>
      {!user ? (
        <div className="app">
          <Header />
          <Home />
        </div>
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Route path="/" exact>
              <Home />
            </Route>
          </div>
        </div>
      )}
    </Router>

  );
}

export default App;
