import React from 'react';

import ContentBlock from 'app/components/ContentBlock';
import Logo from 'app/components/Logo';

import styles from './styles.module.scss';

function Resume() {
  return (
    <ContentBlock>
      <Logo className={styles.logo} />
      <h1>Chi-chi Wang</h1>
      <p>Build resume page here</p>
    </ContentBlock>
  );
}

export default Resume;
