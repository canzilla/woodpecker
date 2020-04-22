import React from "react";
import { shallow } from "enzyme";


import MessageBox from "../MessageBox";


const setup = (props) => {
  const testProps = {...props};
  return shallow(<MessageBox {...testProps}/>);
};

test("render parent div", () => {
  const wrapper = setup();
  const messageBoxComponent = wrapper.find('[test-attr="message-box-div"]');
  expect(messageBoxComponent.length).toBe(1);
});
test("parent div children size", () => {
  const wrapper = setup();
  expect(wrapper.children().length).toBe(1);
});
test("render alert/message", () => {
  const wrapper = setup();
  expect(wrapper.find('[element-identifier="message-box-alert"]').length).toBe(1);
});

test("error alert/message", () => {
  const wrapper = setup({testSeverity: "error"});
  expect(wrapper.find('[element-identifier="message-box-alert"]').props().severity).toBe("error");
});
test("success alert/message", () => {
  const wrapper = setup({testSeverity: "success"});
  expect(wrapper.find('[element-identifier="message-box-alert"]').props().severity).toBe("success");
});

