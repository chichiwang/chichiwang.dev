import React from 'react';

import ContentBlock from 'app/components/ContentBlock';
import LogoBlock from 'app/components/Logo/LogoBlock';

import styles from './styles.module.scss';

export default function ErrorPage() {
  return (
    <ContentBlock>
      <LogoBlock />
      <h1 className={styles.errorHeading}>An Error Occurred!</h1>
      <p className={styles.errorMessage}>
        Unfortunately something has gone wrong, apologies for the inconvenience.
      </p>
    </ContentBlock>
  );
}
