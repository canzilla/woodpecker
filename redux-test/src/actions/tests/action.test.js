import { objectForDisplay } from '../action';
import { actionTypes } from '../actionTypes';

test('returns initial value of object for display', () => {
  const newValue = objectForDisplay({});
  expect(newValue).toStrictEqual({ objectForDisplay: {}, type: actionTypes.OBJEC_FOR_DISPLAY});
});
test('returns new value of object for display', () => {
  const newValue = objectForDisplay({ name: 'Çağrı', surname: 'Yenice' });
  expect(newValue).toStrictEqual({ objectForDisplay: { name: 'Çağrı', surname: 'Yenice' }, type: actionTypes.OBJEC_FOR_DISPLAY });
});