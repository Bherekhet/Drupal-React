import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import App from './App.js';
import Menu from '../../shared/Menu.js'
import ReactDOM from 'react-dom';
import { JestEnvironment } from '@jest/environment';

jest.mock("react-dom", () => ({render: jest.fn()}))

describe('App component', () => {
  
  test('snapshot renders App.js', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Nav component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });

  //snapshot test index.js
  it('renders index.js without crashing', () => {
    const div = document.createElement('div');
    div.id = "root";
    document.body.appendChild(div);
    require("../../../src/index.js");
    expect (ReactDOM.render).toHaveBeenCalledWith(<App/>, div);
  });
})