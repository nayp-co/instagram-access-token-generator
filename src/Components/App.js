import React from 'react';

import { HashRouter as Router, Route } from "react-router-dom";

import style from  './App.module.css';
import { Generator } from './Generator';

import { Parser } from './Parser';
import { checkPath } from '../utils/host';

function App() {

  const PATH = checkPath();

  return (
    <div className={style.app}>
      <div className={style.dialog}>
        <Router>
          <Route
            exact
            component={Generator}
            path={PATH.GENERATOR}
          />
          <Route
            component={Parser}
            path={PATH.PARSER}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
