import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState)=> {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    const middleware = createStoreWithMiddleware(rootReducer, initialState);
    return middleware;
  }

export const findComponentByAttribute = (wrapper, val) => {
    return wrapper.find(`[element-identifier="${val}"]`);
}

export const findComponentChildrenByAttribute = (wrapper, val) => {
    return wrapper.find(`[element-identifier="${val}"]`).children();
}