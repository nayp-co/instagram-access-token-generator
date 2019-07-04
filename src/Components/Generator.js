import React, { useState } from 'react';

import style from  './Generator.module.css';
import { requestTokenUrl } from '../utils/rest';
import { HASH } from '../utils/constants';

function Generator() {
  
  const [input, setInput] = useState('');

  const submit = e => {
    e.preventDefault();

    requestTokenUrl(input)
      .then(resp => {
        window.location = `${resp.url}${HASH.ACCESS_TOKEN}`;
      });
  }

  return (
    <div className={style.Generator}>
      <header className={style.header}>
        Generate your
        <br />
        Instagram Access Token
      </header>

      <section className={style.body}>
        <form onSubmit={submit}>
          <div className={style.formBox}>
            <label className={style.label}>Client id</label>
            <input
              className={style.input}
              name="client_id"
              placeholder="enter with your client_id"
              onChange={e => {
                e.preventDefault();
                setInput(e.target.value);
              }} />
          </div>
          <button className={style.button} type="submit">
            submit
          </button>
        </form>
      </section>

      <footer className={style.footer}>
        What is{' '}
        <a
          target="blank"
          href="https://weblizar.com/get-instagram-client-id/">
          Client Id
        </a>

        <span className={style.version}>
          1.0.0
        </span>
      </footer>
    </div>
  );
}

export { Generator };
