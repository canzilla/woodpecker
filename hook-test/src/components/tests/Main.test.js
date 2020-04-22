import React from "react";
import { shallow } from "enzyme";
import Main from "../Main";

const setup = () => {
    return shallow(<Main/>);
};

test('Component children size', () => {
    const wrapper = setup();
    expect(wrapper.children().length).toBe(8);
});
test('render grid item', () => {
    const wrapper = setup();
    expect(wrapper.find('MainGridItem').length).toBe(7); // or wrapper.find('[objectFromServer]').length
});
test('grid item first child', () => {
    const wrapper = setup();
    expect(wrapper.find('[userId=0]').length).toBe(1);
});
test('grid item second child', () => {
    const wrapper = setup();
    expect(wrapper.find('[userId=1]').length).toBe(1);
});
test('grid MessageBox child', () => {
    const wrapper = setup();
    expect(wrapper.find('MessageBox').length).toBe(1); // or wrapper.find('[openseverity="error"]').length
});