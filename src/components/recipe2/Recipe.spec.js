import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe.js';
import {mount} from 'enzyme';

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

//snapshot test for Recipe component
describe('Recipe component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Recipe recipeID={0} recipeData={data}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  //next button test
  it('increment value for next button', () => {
    const wrapper = mount(<Recipe recipeID={0} recipeData={data}/>);
    wrapper.find('.next').simulate('click');
    expect(wrapper.update().state().recipeID).toEqual(1);
  });

  //prev button text
  it('decrement value for prev button', () => {
    const wrapper = mount(<Recipe recipeID={0} recipeData={data}/>);
    wrapper.find('.prev').simulate('click');
    expect(wrapper.update().state().recipeID).toEqual(1);
  });
});
