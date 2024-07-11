import React from 'react';
import { Link } from 'react-router-dom';

import ContentBlock from 'app/components/ContentBlock';
import LogoBlock from 'app/components/Logo/LogoBlock';

import styles from './styles.module.scss';

export default function NotFound(): React.ReactElement {
  return (
    <ContentBlock>
      <LogoBlock />
      <h1 className={styles.notFoundHeading}>Page Not Found!</h1>
      <p className={styles.notFoundMessage}>
        This page does not exist!
      </p>
      <p className={styles.notFoundMessage}>
        <Link to="/">Return to Home</Link>
      </p>
    </ContentBlock>
  );
}
