import { objectForDisplay, isInformationTyped, statusOfSending } from '../action';
import { actionTypes } from '../actionTypes';

test('returns initial value of object for display', () => {
  const newValue = objectForDisplay({});
  expect(newValue).toStrictEqual({ objectForDisplay: {}, type: actionTypes.OBJEC_FOR_DISPLAY});
});
test('returns new value of object for display', () => {
  const newValue = objectForDisplay({ name: 'Çağrı', surname: 'Yenice' });
  expect(newValue).toStrictEqual({ objectForDisplay: { name: 'Çağrı', surname: 'Yenice' }, type: actionTypes.OBJEC_FOR_DISPLAY });
});
test('returns initial value of is information typed', () => {
  const newValue = isInformationTyped(false);
  expect(newValue).toStrictEqual({ isInformationTyped: false, type: actionTypes.IS_INFORMATION_TYPED});
});
test('returns new value of is information typed', () => {
  const newValue = isInformationTyped(true);
  expect(newValue).toStrictEqual({ isInformationTyped: true, type: actionTypes.IS_INFORMATION_TYPED });
});
test('returns initial value of status of sending', () => {
  const newValue = statusOfSending({ status: '', open: false });
  expect(newValue).toStrictEqual({ statusOfSending: { status: '', open: false }, type: actionTypes.STATUS_OF_SENDING});
});
test('returns new value of status of sending', () => {
  const newValue = statusOfSending({ status: 'info', open: true });
  expect(newValue).toStrictEqual({ statusOfSending: { status: 'info', open: true }, type: actionTypes.STATUS_OF_SENDING });
});