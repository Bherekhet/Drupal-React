import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe.js';
import {mount} from 'enzyme';
import {hom, rec} from '../../../testMockData.js';

//snapshot test for Recipe component
describe('Recipe component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Recipe recipeID={0} recipeData={rec}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  //next button test
  it('increment value for next button', () => {
    const wrapper = mount(<Recipe recipeID={0} recipeData={rec}/>);
    wrapper.find('.next').simulate('click');
    expect(wrapper.update().state().recipeID).toEqual(1);
  });

  //prev button text
  it('decrement value for prev button', () => {
    const wrapper = mount(<Recipe recipeID={0} recipeData={rec}/>);
    wrapper.find('.prev').simulate('click');
    expect(wrapper.update().state().recipeID).toEqual(1);
  });
});
