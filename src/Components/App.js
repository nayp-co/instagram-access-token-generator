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
          <Route path="/" component={Generator} />
          <Route path="/parser" component={Parser} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
