import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/header/NavTabs";
import Home from "./components/Home";
import Game from "./components/Game";


const App = () => (
  
  <Router>
    <div>


      <NavTabs />

      <Route exact path="/" component={Home} />
      <Route exact path="/Game" component={Game} />
      
      
    </div>
    
  </Router>
);

export default App;
