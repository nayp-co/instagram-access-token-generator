import React from 'react';

import { Router } from "@reach/router"

import style from  './App.module.css';
import { Generator } from './Generator';

import { Parser } from './Parser';
import { PATHS } from '../utils/constants';

function App() {
  return (
    <div className={style.app}>
    <Router>
      <Generator path={PATHS.GENERATOR} />
      <Parser path={PATHS.PARSER} />
    </Router>
    </div>
  );
}

export default App;
