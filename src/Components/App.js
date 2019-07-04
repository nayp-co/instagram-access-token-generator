import React from 'react';

import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import style from  './App.module.css';
import Generator from './Generator';
import Parser from './Parser';

const history = createBrowserHistory()

function App() {
  return (
    <div className={style.app}>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Generator} />
          <Route path="/parser" exact component={Parser} />
        </div>
      </Router>
    </div>
  );
}

export default App;
