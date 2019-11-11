import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../components/home/Home.js';
var data = [
  {
    body:"this is a",
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home recipeData={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

