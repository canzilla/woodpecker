import React from 'react';
import { render, fireEvent, screen } from '../../../test/reactTestingLibraryTestUtils';
import MessageBox from '../MessageBox';
import { storeFactory } from '../../../test/testUtils';

describe('render', () => {
    let store;
    beforeEach(() => {
        const initialState = {
            statusOfSending: {
                status: 'error',
                open: true
            }
        };
        store = storeFactory(initialState);
    });

    test('render component message box', () => {
        const { queryByTestId } = render(<MessageBox />, { store, });
        expect(screen.queryByTestId('component-message-box')).not.toEqual(null);
    });

    test('render message box snackbar', () => {
        const { queryByTestId } = render(<MessageBox />, { store, });
        expect(screen.queryByTestId('message-box-snackbar')).not.toEqual(null);
    });

    test('render message box alert', () => {
        const { queryByTestId } = render(<MessageBox />, { store, });
        expect(screen.queryByTestId('message-box-alert')).not.toEqual(null);
    });
});