import React from 'react';

import { Router } from "@reach/router"

import style from  './App.module.css';
import { Generator } from './Generator';

import { Parser } from './Parser';
import { PATHS } from '../utils/constants';

function App() {
  return (
    <div className={style.app}>
      <div className={style.dialog}>
        paths
        <Router>
          <Generator path={`${process.env.PUBLIC_URL}${PATHS.GENERATOR}`} />
          <Parser path={`${process.env.PUBLIC_URL}${PATHS.PARSER}`} />
        </Router>
      </div>
    </div>
  );
}

export default App;
