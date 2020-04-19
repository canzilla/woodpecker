import React from 'react';
import { shallow } from 'enzyme';
import Submit from '../Submit';
import { storeFactory, findComponentByAttribute } from '../../../test/testUtils';
import { isInformationTyped, objectForDisplay } from '../../actions/action';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Submit store={store} />).dive().dive();
}

describe('render', () => {
  describe('any information has not been type', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { isInformationTyped: false };
      wrapper = setup(initialState);
    });
    test('render submit component success', () => {
      const component = findComponentByAttribute(wrapper, 'component-submit');
      expect(component.length).toBe(1);
    });
    test('not render submit button', () => {
      const component = findComponentByAttribute(wrapper, 'submit-button');
      expect(component.length).toBe(0);
    });
  });
  describe('any information has been type', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { isInformationTyped: true };
      wrapper = setup(initialState);
    });
    test('render submit component success', () => {
      const component = findComponentByAttribute(wrapper, 'component-submit');
      expect(component.length).toBe(1);
    });
    test('render submmit button', () => {
      const component = findComponentByAttribute(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });
});

describe('getting data from global state', () => {
  let store;
  beforeEach(() => {
    store = storeFactory();
  });
  test('getting isInformationTyped', () => {
    store.dispatch(isInformationTyped(true));
    const newState = store.getState();
    const wrapper = setup(newState);
    const isInformationTypedProp = wrapper.instance().props.isInformationTyped;
    expect(isInformationTypedProp).toBe(true);
  });
  test('getting objectForDisplay', () => {
    store.dispatch(objectForDisplay({ name: 'Çağrı' }));
    const newState = store.getState();
    const wrapper = setup(newState);
    const objectForDisplayProp = wrapper.instance().props.objectForDisplay;
    expect(objectForDisplayProp).toStrictEqual({ name: 'Çağrı' });
  });
});

describe('click submit button', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      isInformationTyped: true,
      objectForDisplay: {
        name: 'Çağrı',
        surname: 'Yenice'
      }
    };
    wrapper = setup(initialState);
  });
  test('click', () => {
    const component = findComponentByAttribute(wrapper, 'submit-button');
    component.simulate('click');
    expect(wrapper.state().isClicked).toBe(true);
  });
});