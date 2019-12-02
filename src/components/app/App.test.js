import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../components/home/Home.js';
// import {shallow} from 'enzyme';
import {hom, rec} from '../../../testMockData.js';
// import App from './App';

// import { JestEnvironment } from '@jest/environment';
// import { wrap } from 'module';

//renders app component without crashing 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home homePage={hom} recipeData={rec}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('App Component', () => {
//   it ('fetches data from server', done => {
//     const mockSuccessResponse = {};
//     const mockJsonPromise = Promise.resolve(mockSuccessResponse);
//     const mockFetchPromise = Promise.resolve({
//       json: () => mockJsonPromise,
//     });
//     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

//     const wrapper = shallow(<App/>);
//     expect(global.fetch).toHaveBeenCalledTimes(2);
//     expect(global.fetch).toHaveBeenCalledWith(process.env.REACT_APP_API_BASE+process.env.REACT_APP_API_RECIPE_ENDPOINT);

//     process.nextTick(() => {
//       expect(wrapper.state()).toEqual({

//       });

//       global.fetch.mockClear();
//       done();
//     })
//   })
// })

