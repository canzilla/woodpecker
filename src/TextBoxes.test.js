import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TextBoxes from './TextBoxes';

Enzyme.configure({ adapter: new Adapter() });
const defaultProps = {
  "thizz" : "this",
  "shall" : "shall",
  "pass" : "pass",
  "too" : "too"
}
const setup = (props) => {
  const testProps = {...defaultProps, ...props};
  return shallow(<TextBoxes objectToDisplay={testProps}/>);
}

test('text box renders wo error', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-boxes-div"]');
  expect(textBoxesComponent.length).toBe(1);
});

test('number of text fields equal to number of attributes in the prop', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-fields"]');
  expect(textBoxesComponent.length).toBe(4);
})