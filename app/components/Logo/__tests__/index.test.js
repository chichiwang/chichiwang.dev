import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../index';

describe('Logo component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
