import React from 'react';
import { Link } from 'react-router-dom';

import ContentBlock from 'app/components/ContentBlock';
import Logo from 'app/components/Logo';

import styles from './styles.module.scss';

export default function NotFound(): React.ReactElement {
  return (
    <ContentBlock>
      <div className={styles.logoBlock}>
        <Logo height="250px" />
      </div>
      <h1 className={styles.notFoundHeading}>Page Not Found!</h1>
      <p className={styles.notFoundMessage}>
        This page does not exit!
      </p>
      <p className={styles.notFoundMessage}>
        <Link to="/">Return to Home</Link>
      </p>
    </ContentBlock>
  );
}
