import React from 'react';
import { shallow } from 'enzyme';
//import renderer from 'react-test-renderer';
import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<App store={store} />);
  }

  test('snapshot testi', () => {
    /*const store = storeFactory({});
    const tree = renderer.create(<App store={store}/>).toJSON();
    expect(tree).toMatchSnapshot();*/
  })