import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MessageBox from "./MessageBox";

Enzyme.configure({ adapter: new Adapter() });
const defaultProps = { open: false};

const setup = (props) => {
  const testProps = {...defaultProps, ...props};
  return shallow(<MessageBox {...testProps}/>);
};

test("renders wo error", () => {
  const wrapper = setup();
  console.log(wrapper.debug());
  const messageBoxComponent = wrapper.find('[test-attr="message-box-div"]');
  expect(messageBoxComponent.length).toBe(1);
});

test("does not render", () => {
  const wrapper = setup({open: false});
  const messageBoxComponent = wrapper.find('[test-attr="snackbar-component"]');
  expect(messageBoxComponent.length).toBe(1);
});

test("shows error message on failure", () => {
  const wrapper = setup({severity: "error"});
  const messageBoxComponent = wrapper.find('[test-attr="snackbar-component"]').dive().find('[severity="error"]');
  console.log(messageBoxComponent.debug());
  expect(messageBoxComponent.length).toBe(1);
});

test("shows success message on success", () => {
  const wrapper = setup({severity: "success"});
  const messageBoxComponent = wrapper.find('[test-attr="snackbar-component"]').dive().find('[severity="success"]');
  expect(messageBoxComponent.length).toBe(1);
});

test("does not show success message on failure", () => {
  const wrapper = setup({severity: "error"});
  const messageBoxComponent = wrapper.find('[test-attr="snackbar-component"]').dive().find('[severity="success"]');
  expect(messageBoxComponent.length).toBe(0);
});
