import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import App from './app';
import Menu from '../../shared/Menu'

var data = [
  {
    body:"this is a body",
    field_images:"image section",
    field_ingredients:"1 2 3 4",
    field_summary:"summary section",
    title:"title section",
    node:"0"
  },
  {
    body:"this is a body",
    field_images:"image section",
    field_ingredients:"5 4 3 2",
    field_summary:"summary section",
    title:"title section",
    node:"2"
  }
]

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
