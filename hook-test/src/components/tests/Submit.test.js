import React from 'react';
import {shallow, mount} from 'enzyme';
import Submit from '../Submit.js';
import {createBridgeState} from "../../helper/UserHelper";


const setup = () => {
   // return mount(<UserContextProvider><Submit bridgeState={createBridgeState()}/></UserContextProvider>);
    //return shallow(<UserContextProvider><Submit bridgeState={createBridgeState()}/></UserContextProvider>);
    return shallow(<Submit bridgeState={createBridgeState()}/>);
};

test('Submit button render', ()=> {
    const wrapper = setup();
    const componentToBeFound = wrapper.find('[test-attr="test-submit-button"]');
    expect(componentToBeFound.length).toBe(0);
});
test('Submit button update state', ()=> {
    const wrapper = setup();
    wrapper.props().bridgestate.showSubmit(true);
    const componentToBeFound = wrapper.find('[test-attr="test-submit-button"]');
    expect(componentToBeFound.length).toBe(1);
});
test('Submit button props', ()=> {
    const wrapper = setup();
    expect( wrapper.props().bridgestate.userId).toBe(undefined);
});
test('Submit button click', () => {
     const wrapper = setup();
    //wrapper.props().children.props.bridgeState.showSubmit(true);  bu mounttaa direk çekiyoruz
    wrapper.props().bridgestate.showSubmit(true);
    const component = wrapper.find('[test-attr="test-submit-button"]');
    component.simulate('click');
    expect(wrapper.children().length).toBe(0);
});


