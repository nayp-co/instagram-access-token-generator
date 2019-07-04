import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import style from  './App.module.css';
import Generator from './Generator';
import Parser from './Parser';

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Generator} />
          <Route path="/parser" exact component={Parser} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
