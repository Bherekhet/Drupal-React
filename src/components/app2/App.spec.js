import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import App from './App.js';
import Menu from '../../shared/Menu.js'
/*eslint import/no-unresolved: [2, { caseSensitive: true (default) | false }]*/

describe('App component', () => {
  
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Nav component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });
});
