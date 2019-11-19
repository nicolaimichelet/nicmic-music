import React, { useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact';

const App = () => {
  const [title, setTitle] = useState('Phoenix');

  return (
    <Router>
    <div className="App">
      <div className="tracks">
        <ul> 
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/music" >Music</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
        </ul>

        

      <img src="logo" />
      <p>Latest release!!</p>


      </div>
    </div>

    <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music}/>
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </div>

    </Router>
  );

}

export default App;