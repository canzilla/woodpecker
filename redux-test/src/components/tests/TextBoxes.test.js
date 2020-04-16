import React from 'react';
import { shallow, mount } from 'enzyme';
import TextBoxes from '../TextBoxes';
import { storeFactory, findComponentByAttribute, findComponentChildrenByAttribute } from '../../../test/testUtils';

const defaultProps = { objectForDisplay:{} };

/**const setup = (props) => {
  const combinedProps = {...defaultProps, ...props};
  return shallow(<TextBoxes {...combinedProps}/>);
}*/

const setup = ( initialState = {} ) => {
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
    })
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
  describe('object for display has been fetch', () => {
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
  /**let store;
  const object = {
    objectForDisplay: {
      name: 'Çağrı',
      surname: 'Yenice'
    }
  };
  const initialState = { objectForDisplay: {} };
  beforeEach(() => {
    store = storeFactory(initialState);
  });*/
  test('text is equal state text', () => {
    /**const wrapper = setup();
    wrapper.setState(object);
    console.log(object);
    const newState = store.getState();
    const objectForDisplayProp = wrapper.instance().props.objectForDisplay;
    console.log(newState);
    console.log(objectForDisplayProp);
    expect(object.objectForDisplay).toStrictEqual(newState.objectForDisplay);*/
  });
});