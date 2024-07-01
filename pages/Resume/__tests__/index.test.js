import React from 'react';
import renderer from 'react-test-renderer';

import Resume from '../index';

describe('Resume page component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<Resume />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
