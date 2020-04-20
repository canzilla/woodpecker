import React from 'react';
import { render, fireEvent, screen } from '../../../test/reactTestingLibraryTestUtils';
import TextBoxes from '../TextBoxes';
import { storeFactory } from '../../../test/testUtils';

describe('render', () => {
    describe('object for display has not been fetch', () => {
        let store;
        beforeEach(() => {
            const initialState = { objectForDisplay: {} };
            store = storeFactory(initialState);
        });
        test('render text boxes component success', () => {
            const { queryByTestId } = render(<TextBoxes />, { store, });
            expect(screen.queryByTestId('component-text-boxes')).not.toEqual(null);
        });
        test('there is no children while render text boxes component with inital props', () => {
            const { container } = render(<TextBoxes />, { store, });
            expect(container.firstChild.firstChild).toEqual(null);
        });
        test('render text box for object for display', () => {
            const { queryByTestId } = render(<TextBoxes />, { store, });
            expect(screen.queryByTestId('text-box-name')).toEqual(null);
        });
    });
    describe('object for display has been fetched', () => {
        let store;
        beforeEach(() => {
          const initialState = {
            objectForDisplay: {
              name: "",
              surname: ""
            }
          };
          store = storeFactory(initialState);
        });
        test('render text boxes component success', () => {
            const { queryByTestId } = render(<TextBoxes />, { store, });
            expect(screen.queryByTestId('component-text-boxes')).not.toEqual(null);
        });
        test('render text box for object for display', () => {
            const { queryByTestId } = render(<TextBoxes />, { store, });
            expect(screen.queryByTestId('text-box-name')).not.toEqual(null);
        });
        test('endered children number is equal to rendered text boxes component children number', () => {
            const { queryByTestId } = render(<TextBoxes />, { store, });
            expect(screen.queryByTestId('component-text-boxes').childNodes.length).toBe(2);
        });
      });
});

describe('typing text', () => {
    let store;
    let spy;
  
    beforeEach(() => {
      const initialState = {
        objectForDisplay: {
          name: '',
          surname: ''
        }
      };
      store = storeFactory(initialState);
    });
  
    test('render text box for object for display', () => {
        const { queryByTestId } = render(<TextBoxes />, { store, });
        expect(screen.queryByTestId('text-box-name')).not.toEqual(null);
    });
  
    test('text box prop value is equal initial value', () => {
        const { getByTestId } = render(<TextBoxes />, { store, });
        expect(screen.getByTestId('text-box-name').value).toEqual("");
    });
  
    test('text box on change method successfuly update local state', () => {
      const { getByTestId } = render(<TextBoxes />, { store, });
      fireEvent.change(screen.getByTestId('text-box-name'), { target: { value: 'Çağrı' } });
      expect(screen.getByTestId('text-box-name').value).toEqual("Çağrı");
    });
  
    test('text box on change method successfuly update object for display value on global state with action dispatching', () => {
        const { getByTestId } = render(<TextBoxes />, { store, });
        fireEvent.change(screen.getByTestId('text-box-name'), { target: { value: 'Çağrı' } });
        const newState = store.getState();
        expect(newState.objectForDisplay.name).toEqual('Çağrı');
    });
  
    test('text box on change method successfuly update is information typed value on global state with action dispatching', () => {
        const { getByTestId } = render(<TextBoxes />, { store, });
        fireEvent.change(screen.getByTestId('text-box-name'), { target: { value: 'Çağrı' } });
        const newState = store.getState();
        expect(newState.isInformationTyped).toBe(true);
    });
  
    test('text box value is equal to typing value', () => {
        let getByTestId = render(<TextBoxes />, { store, });
        fireEvent.change(screen.getByTestId('text-box-name'), { target: { value: 'Çağrı' } });
        expect(screen.getByTestId('text-box-name').value).toEqual("Çağrı");
    });
  });