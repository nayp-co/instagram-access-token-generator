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
        <Router>
          <Generator path={PATHS.GENERATOR} />
          <Parser path={PATHS.PARSER} />
        </Router>
      </div>
    </div>
  );
}

export default App;
