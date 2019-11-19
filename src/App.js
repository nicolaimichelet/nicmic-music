import React, { useState} from 'react';
import './App.css';
import { AST_PropAccess } from 'terser';


const App = () => {
  const [title, setTitle] = useState('Phoenix');

  return (
    <div className="App">
      <div className="tracks">
        <ul> 
          <li><a href="">About</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Contact</a></li>
        </ul>

      <img src="logo" />
      <p>Latest release!!</p>

      </div>
    </div>
  );

}

export default App;