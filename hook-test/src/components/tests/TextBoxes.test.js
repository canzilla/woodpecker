import React from 'react';
import { shallow } from 'enzyme';

import TextBoxes from '../TextBoxes';
import {init} from "../../reducer/userReducer";
import {createBridgeState} from "../../helper/UserHelper";

const setup = () => {
  return shallow(<TextBoxes objectToDisplay={init()['userData'][0]} bridgeState = {createBridgeState()}/>);
};

test('render base div', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-boxes-div"]');
  expect(textBoxesComponent.length).toBe(1);
});

test('base div child', () => {
  const wrapper = setup();
  const divChildSize = wrapper.find('[test-attr="text-boxes-div"]').children().length;
  expect(divChildSize).toEqual(3);
});

test('render userName textBox', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userName"]');
  expect(textBoxesComponent.length).toBe(1);
});
test('render userSurName textBox', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userSurName"]');
  expect(textBoxesComponent.length).toBe(1);
});
test('render userCountry textBox', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userCountry"]');
  expect(textBoxesComponent.length).toBe(1);
});
test('userName textBox value', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userName"]');
  expect(textBoxesComponent.prop('defaultValue')).toBe("Mehmet");
});
test('userSurName textBox value', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userSurName"]');
  expect(textBoxesComponent.prop('defaultValue')).toBe("Katı");
});
test('userCountry textBox value', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields-userCountry"]');
  expect(textBoxesComponent.prop('defaultValue')).toBe("Turkey");
});

test('userName textBox change value props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userName"]');
  component.simulate('change', { target: { value: 'Ali' } });
  expect(wrapper.props().bridgeState.userObject.userName).toEqual("Ali");
});

test('userSurName textBox change value props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userSurName"]');
  component.simulate('change', { target: { value: 'Yesil' } });
  expect(wrapper.props().bridgeState.userObject.userSurName).toEqual("Yesil");
});
test('userCountry textBox change value set props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userCountry"]');
  component.simulate('change', { target: { value: 'Turkiyee' } });
  expect(wrapper.props().bridgeState.userObject.userCountry).toEqual("Turkiyee");
});
test('userCountry textBox change value set props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userCountry"]');
  component.simulate('change', { target: { value: 'Turkiyee' } });
  expect(wrapper.props().bridgeState.userObject.userSurName).toEqual(undefined);
});
test('userCountry textBox change value set props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userCountry"]');
  component.simulate('change', { target: { value: 'Turkiyee' } });
  expect(wrapper.props().bridgeState.userObject.userName).toEqual(undefined);
});
test('userCountry textBox change value set props', () => {
  const wrapper = setup();
  let component = wrapper.find('[test-attr="text-fields-userCountry"]');
  component.simulate('change', { target: { value: 'Turkiyee' } });
  expect(Object.keys(wrapper.props().bridgeState.userObject).length).toEqual(1);
});
test('bridgeState props', () => {
  const wrapper = setup();
  expect(Object.keys(wrapper.props().bridgeState.userObject).length).toEqual(0);
});

