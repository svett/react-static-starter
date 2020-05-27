import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders learn react link', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});
