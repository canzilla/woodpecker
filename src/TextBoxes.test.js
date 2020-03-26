import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TextBoxes from './TextBoxes';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<TextBoxes />);
}

test('text box renders wo error', () => {
  const wrapper = setup();
  const textBoxesComponent = wrapper.find('[test-attr="text-boxes-div"]');
  expect(textBoxesComponent.length).toBe(1);
})