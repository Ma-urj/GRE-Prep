import React, { useState } from 'react';
import './App.css';
import UserWordList from './components/UserWordList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ReDir from './components/ReDir';
import NewWordsList from './components/NewWordsList';
import NavBar from './components/NavBar';
import LearntWords from './components/LearntWords';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [loggedin, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/userlist"  element={<UserWordList />}/>
          <Route path="/knownlist"  element={<LearntWords />}/>
          <Route path="/newwords"  element={<NewWordsList />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/register"  element={<Register />}/>
          <Route path="/redir"  element={<ReDir />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
