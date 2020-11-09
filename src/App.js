import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Overview from './Components/Discover/Overview';


function App() {
  return (
    <HashRouter>
      <div className="main-container">
        <Switch>
          <Route exact path="/"><Home /> </Route>
          <Route path="/Voyager/overview/:country"><Overview /> </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App;
