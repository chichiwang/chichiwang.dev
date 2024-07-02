import React from 'react';
import { Outlet } from 'react-router-dom';

import useResetScroll from 'app/hooks/useResetScroll';

import HTMLBody from 'app/HTMLBody';

import styles from './styles.module.scss';

function Panda() {
  useResetScroll();

  return (
    <HTMLBody>
      <section className={styles.page}>
        <main className={styles.content}>
          <Outlet />
        </main>
      </section>
    </HTMLBody>
  );
}

export default Panda;
