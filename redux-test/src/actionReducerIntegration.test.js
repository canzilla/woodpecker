import { storeFactory } from '../test/testUtils';
import { objectForDisplay } from './actions/action';

describe('objectForDisplay action dispatcher', () => {
    const emptyObject = {};
    const nonEmptyObject = {
        name: '',
        surname: ''
    };
    describe('has been fetch', () => {
        let store;
        const initialState = { objectForDisplay: emptyObject };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state corectly', () => {
            store.dispatch(objectForDisplay(nonEmptyObject));
            const newState = store.getState();
            const expectedState = {
                objectForDisplay: nonEmptyObject
            };
            expect(newState).toEqual(expectedState);
        });
    });
});