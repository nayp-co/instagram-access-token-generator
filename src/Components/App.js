import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import style from  './App.module.css';
import { Generator } from './Generator';
import { Parser } from './Parser';

function App() {
  return (
    <div className={style.app}>
        <Generator />
    </div>
  );
}

export default App;
