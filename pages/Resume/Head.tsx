/* global PROJECT_URL */
import React from 'react';

function Head() {
  const url = `${PROJECT_URL}`;

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Resume of Chi-chi Wang" />
      <meta property="og:description" content="Software engineer, UI specialist, JavaScript expert, team leader, mentor." />
      <meta property="og:url" content={url} />
      <link href={url} rel="canonical" />
    </>
  );
}

export default Head;
