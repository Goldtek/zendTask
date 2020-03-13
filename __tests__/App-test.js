/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { sum } from '../src/lib/util';


// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});

jest('test sum to ', () => {
  const result = sum(4, 5);
  expect(result).toBe(9);
});
