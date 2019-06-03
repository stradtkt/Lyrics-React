import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

function App() {
  return (
    <div className="App">
        <Router>
            <Fragment>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Index}/>
                    </Switch>
                </div>
            </Fragment>
        </Router>
    </div>
  );
}

export default App;
