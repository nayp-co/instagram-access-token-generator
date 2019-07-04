import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import style from  './App.module.css';
import Generator from './Generator';

function App() {
  return (
    <div className={style.app}>
      <Router>
      <div>
        <Route path="/" exact component={Generator} />
        
      </div>
    </Router>
    </div>
  );
}

export default App;
