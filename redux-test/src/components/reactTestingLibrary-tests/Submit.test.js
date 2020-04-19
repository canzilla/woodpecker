import React from 'react';
import { render, fireEvent, screen } from '../../../test/reactTestingLibraryTestUtils';
import Submit from '../Submit';
import { storeFactory } from '../../../test/testUtils';

describe('render', () => {
    describe('any information has not been type', () => {
        let store;
        beforeEach(() => {
            const initialState = { isInformationTyped: false };
            store = storeFactory(initialState);
        });
        test('render submit component success', () => {
            const { queryByTestId } = render(<Submit />, { store, });
            expect(screen.queryByTestId('component-submit')).not.toEqual(null);
        });
        test('not render submit button', () => {
            const { queryByTestId } = render(<Submit />, { store, });
            expect(screen.queryByTestId('submit-button')).toEqual(null);
        });
    });
    describe('any information has been type', () => {
        let store;
        beforeEach(() => {
            const initialState = { isInformationTyped: true };
            store = storeFactory(initialState);
        });
        test('render submit component success', () => {
            const { queryByTestId } = render(<Submit />, { store, });
            expect(screen.queryByTestId('component-submit')).not.toEqual(null);
        });
        test('render submmit button', () => {
            const { queryByTestId } = render(<Submit />, { store, });
            expect(screen.queryByTestId('submit-button')).not.toEqual(null);
        });
    });
});