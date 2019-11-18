import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Front from "./components/Front";
import Settings from "./components/Settings";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Route path="/settings" component={Settings}/>
          <Route path="/home" component={Front}/>
          <Route path="/" component={Home}/>
      </Router>
  );
}

export default App;
