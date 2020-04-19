import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import Submit from './Submit.js';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    return shallow(<Submit />);
}

test('Submit button renders wo error', ()=> {
    const wrapper = setup();
    const componentToBeFound = wrapper.find('[test-attr="test-submit-button"]');
    expect(componentToBeFound.length).toBe(1);
});

describe('server mocking',() => {
    beforeEach(()=>{
        moxios.install
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    test('simulate submit button to make http request', () => {
        const wrapper = setup();
        const clickButton = wrapper.find('[test-attr="test-submit-button"]');
        clickButton.simulate('click');
    });
})
