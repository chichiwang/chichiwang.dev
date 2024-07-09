import React from 'react';

import Logo from 'app/components/Logo';

import styles from './styles.module.scss';

function LogoBlock() {
  return (
    <div className={styles.logoBlock}>
      <Logo height="250px" />
    </div>
  );
}

export default LogoBlock;
