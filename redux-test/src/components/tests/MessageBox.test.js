import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findComponentByAttribute } from '../../../test/testUtils';
import MessageBox from '../MessageBox';
import { statusOfSending } from '../../actions/action';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<MessageBox store={store} />).dive().dive();
}

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('render component message box', () => {
    const component = findComponentByAttribute(wrapper, 'component-message-box');
    expect(component.length).toBe(1);
  });

  test('render message box snackbar', () => {
    const component = findComponentByAttribute(wrapper, 'message-box-snackbar');
    expect(component.length).toBe(1);
  });

  test('render message box alert', () => {
    const component = findComponentByAttribute(wrapper, 'message-box-alert');
    expect(component.length).toBe(1);
  });
});

describe('getting data from global state', () => {
  let store;
  beforeEach(() => {
    store = storeFactory();
  });
  test('getting statusOfSending', () => {
    store.dispatch(statusOfSending({ status: '', open: false }));
    const newState = store.getState();
    const wrapper = setup(newState);
    const isInformationTypedProp = wrapper.instance().props.statusOfSending;
    expect(isInformationTypedProp).toStrictEqual({ status: '', open: false });
  });
});

describe('on close fired', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    const initialState = {
      statusOfSending: {
        status: 'error',
        open: true
      }
    };
    store = storeFactory(initialState);
    wrapper = shallow(<MessageBox store={store} />).dive().dive();
  });

  test('close', () => {
    const component = findComponentByAttribute(wrapper, 'message-box-snackbar');
    component.simulate('close');
    const newState = store.getState();
    wrapper = setup(newState);
    const statusOfSending = wrapper.instance().props.statusOfSending;
    expect(statusOfSending).toStrictEqual({ status: 'error', open: false });
  });
});