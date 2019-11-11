import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.js';

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

//snapshot test for Home component
describe('Home component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home recipeData={data}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  // it('renders the inner Recipe component', () => {
  //   const wrapper = mount(<Home recipeData={data} />);
  //   expect(wrapper.find(Recipe).length).toEqual(1);
  // });

  // it('passes all props to Recipe', () => {
  //   const wrapper = mount(<Home recipeData={data}/>);
  //   const recipeWrapper = wrapper.find(Recipe);
  //   expect(recipeWrapper.find('div.recipe')).to.have.lengthOf(1);
  // });
});
