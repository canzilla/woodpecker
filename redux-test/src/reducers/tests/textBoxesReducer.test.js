import { actionTypes } from '../../actions/actionTypes';
import { objectForDisplay } from '../textBoxesReducer';

test('return default initial state of null object when no action is passed', () => {
    const newState = objectForDisplay(undefined, {});
    expect(newState).toStrictEqual({});
});
test('return state of object when receiving an action of type OBJECT_FOR_DISPLAY', () => {
    const newState = objectForDisplay(undefined, { type: actionTypes.OBJEC_FOR_DISPLAY, objectForDisplay: { name: 'Çağrı', surname: 'Yenice'}});
    expect(newState).toStrictEqual({ name: 'Çağrı', surname: 'Yenice' });
});
test('returns merged state from new state and old state', () => {
    const newValue = objectForDisplay({ name: 'Çağrı' }, { type: actionTypes.OBJEC_FOR_DISPLAY, objectForDisplay: { surname: 'Yenice' }});
    expect(newValue).toStrictEqual({ name: 'Çağrı', surname: 'Yenice' });
});