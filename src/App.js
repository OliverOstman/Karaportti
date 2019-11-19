import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import Front from "./components/Front";
import Settings from "./components/Settings";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Route path="/" component={Home}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/home" component={Front}/>
          <Redirect to="/home"/>
      </Router>
  );
}

export default App;
