import React from 'react';
import renderer from 'react-test-renderer';
import { ProfileCard } from './ProfileCard';

it('ProfileCard', () => {
  const tree = renderer
    .create(<ProfileCard uid={1} name="Alice X" email="alice@test.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
