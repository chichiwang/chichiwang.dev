import React from 'react';

import ContentBlock from 'app/components/ContentBlock';
import Logo from 'app/components/Logo';

import styles from './styles.module.scss';

export default function ErrorPage() {
  return (
    <ContentBlock>
      <div className={styles.logoBlock}>
        <Logo className={styles.logo} height="250px" />
      </div>
      <h1 className={styles.errorHeading}>An Error Occurred!</h1>
      <p className={styles.errorMessage}>
        Unfortunately something has gone wrong, apologies for the inconvenience.
      </p>
    </ContentBlock>
  );
}
