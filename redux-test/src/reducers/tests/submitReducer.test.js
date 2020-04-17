import { actionTypes } from '../../actions/actionTypes';
import { isInformationTyped, statusOfSending } from '../submitReducer';

test('return default initial state of isInformationTyped when no action is passed', () => {
    const newState = isInformationTyped(undefined, {});
    expect(newState).toStrictEqual(false);
});
test('return state of isInformationTyped when receiving an action of type IS_INFORMATION_TYPED', () => {
    const newState = isInformationTyped(undefined, { type: actionTypes.IS_INFORMATION_TYPED, isInformationTyped: true });
    expect(newState).toStrictEqual(true);
});
test('return default initial state of statusOfSending when no action is passed', () => {
    const newState = statusOfSending(undefined, {});
    expect(newState).toStrictEqual({ status: '', open: false });
});
test('return state of statusOfSending when receiving an action of type STATUS_OF_SENDING', () => {
    const newState = statusOfSending(undefined, { type: actionTypes.STATUS_OF_SENDING, statusOfSending: { status: 'error', open: true } });
    expect(newState).toStrictEqual({ status: 'error', open: true });
});