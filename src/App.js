import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Front from "./components/Front";
import Settings from "./components/Settings";

function App() {
  return (
      <Router>
          <div className="App">

          </div>
          <Route path="/settings" component={Settings}/>
          <Route path="/home" component={Front}/>
      </Router>
  );
}

export default App;
