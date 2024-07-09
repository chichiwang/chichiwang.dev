import React from 'react';
import renderer from 'react-test-renderer';

import LogoBlock from '../LogoBlock';

describe('LogoBlock component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<LogoBlock />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
