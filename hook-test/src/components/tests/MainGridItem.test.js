import React from "react";
import {shallow } from 'enzyme';
import MainGridItem from "../MainGridItem";
import {init} from "../../reducer/userReducer";

const setup = () => {
    return shallow(<MainGridItem objectFromServer={init()['userData'][0]} userId={0}/>);
};

test('Component children size',()=>{
    const wrapper = setup();
    expect(wrapper.children().length).toBe(2);
});
test('render textBox',()=>{
   const wrapper = setup();
   expect(wrapper.childAt(0).children().length).toBe(1)
});
test('render submit',()=>{
    const wrapper = setup();
    expect(wrapper.find('Submit').length).toBe(1);
});
test('children component props',()=>{
    const wrapper = setup();
    expect(wrapper.find('[bridgeState]').length).toBe(2);
});
test('textBox props',()=>{
    const wrapper = setup();
    expect(wrapper.find('[objectToDisplay]').props().objectToDisplay.userName).toBe("Mehmet"); // or wrapper.find('TextBoxes')
});
test('submit props',()=>{
    const wrapper = setup();
    expect(wrapper.find('[userId]').props().userId).toBe(0);
});
