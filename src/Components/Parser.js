import React from 'react';

import style from  './Parser.module.css';

function Parser() {

  const token = window.location.hash;

  return (
    <div className={style.Parser}>
      <header className={style.header}>
        parseando o #token
      </header>
      <section className={style.body}>
        {token.slice(14)}
      </section>
    </div>
  );
}

export { Parser };
