import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.js';
import Recipe from '../recipe/Recipe'
import {mount} from 'enzyme';
import {hom, rec} from '../../../testMockData.js';

//snapshot test for Home component
describe('Home component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home homePage={hom} recipeData={rec}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  // it('renders the inner Recipe component', () => {
  //   const wrapper = mount(<Home recipeClicked='true' homePage={hom} recipeData={rec} />);
  //   expect(wrapper.find(Recipe).length).toEqual(1);
  // });

  // it('passes all props to Recipe', () => {
  //   console.log('rec123',rec)
  //   const wrapper = mount(<Home recipeClicked = {true} homePage={hom} recipeData={rec}/>);
  //   const recipeWrapper = wrapper.find(<Recipe homePage={hom} recipeData={rec}/>);
  //   expect(recipeWrapper.find('.recipe')).to.have.lengthOf(1);
  // });
});
