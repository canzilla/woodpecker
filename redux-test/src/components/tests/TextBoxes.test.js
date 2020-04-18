import React from 'react';
import { shallow, mount } from 'enzyme';
import TextBoxes from '../TextBoxes';
import { storeFactory, findComponentByAttribute, findComponentChildrenByAttribute } from '../../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<TextBoxes store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('object for display has not been fetch', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { objectForDisplay: {} };
      wrapper = setup(initialState);
    });
    test('render text boxes component success', () => {
      const component = findComponentByAttribute(wrapper, 'component-text-boxes');
      expect(component.length).toBe(1);
    });
    test('there is no children while render text boxes component with inital props', () => {
      const componentChildren = findComponentChildrenByAttribute(wrapper, 'component-text-boxes');
      expect(componentChildren).toHaveLength(0);
    });
    test('render text box for object for display', () => {
      const component = findComponentByAttribute(wrapper, 'text-box-name');
      expect(component.length).toBe(0);
    });
  });

  describe('object for display has been fetched', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        objectForDisplay: {
          name: "",
          surname: ""
        }
      };
      wrapper = setup(initialState);
    });
    test('render text boxes component success', () => {
      const wrapper = setup();
      const component = findComponentByAttribute(wrapper, 'component-text-boxes');
      expect(component.length).toBe(1);
    });
    test('render text box for object for display', () => {
      const component = findComponentByAttribute(wrapper, 'text-box-name');
      expect(component.length).toBe(1);
    });
    test('rendered children number is equal to rendered text boxes component children number', () => {
      const componentChildren = findComponentChildrenByAttribute(wrapper, 'component-text-boxes');
      expect(componentChildren).toHaveLength(2);
    });
  });

});

describe('typing text', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      objectForDisplay: {
        name: '',
        surname: ''
      }
    };
    store = storeFactory(initialState);
    wrapper = shallow(<TextBoxes store={store} />).dive().dive();
  });

  test('render text box for object for display', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    expect(component.length).toBe(1);
  });

  test('text box prop value is equal initial value', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    expect(component.prop('value')).toEqual('');
  });

  test('text box on change method successfuly update local state', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    component.simulate('change', { target: { value: 'Çağrı' } });
    expect(wrapper.state('objectForDisplay').name).toEqual('Çağrı');
  });

  test('text box on change method successfuly update object for display value on global state with action dispatching', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    component.simulate('change', { target: { value: 'Çağrı' } });
    const newState = store.getState();
    expect(newState.objectForDisplay.name).toEqual('Çağrı');
  });

  test('text box on change method successfuly update is information typed value on global state with action dispatching', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    component.simulate('change', { target: { value: 'Çağrı' } });
    const newState = store.getState();
    expect(newState.isInformationTyped).toBe(true);
  });

  test('text boxes component props successfuly updated from global state', () => {
    const component = findComponentByAttribute(wrapper, 'text-box-name');
    component.simulate('change', { target: { value: 'Çağrı' } });
    const newState = store.getState();
    wrapper = setup(newState);
    const objectForDisplayProp = wrapper.instance().props.objectForDisplay;
    expect(objectForDisplayProp.name).toStrictEqual('Çağrı');
  });

  test('text box value is equal to typing value', () => {
    let component = findComponentByAttribute(wrapper, 'text-box-name');
    component.simulate('change', { target: { value: 'Çağrı' } });
    const newState = store.getState();
    wrapper = setup(newState);
    component = findComponentByAttribute(wrapper, 'text-box-name');
    expect(component.props().value).toEqual('Çağrı');
  });
});