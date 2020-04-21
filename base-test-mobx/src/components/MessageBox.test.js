import React from "react";
/* eslint-disable require-jsdoc */
import {render } from '@testing-library/react';
import {Provider} from 'mobx-react';
import MessageBox from './MessageBox'
import Store from '../stores/Store';
import * as DataTestIdTypes from '../test/DataTestIdTypes.js';
import 'mobx-react-lite/batchingForReactDom';
import '@testing-library/jest-dom/extend-expect'

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

let storeInstance = null;
afterEach(() => {
  storeInstance = new Store();
});

export const setup = (storeInstance=new Store()) => {
  return render(  <Provider Store={storeInstance}>
    <MessageBox />
  </Provider>);
}


test("renders MessageBox without error", () => {
  storeInstance=new Store();
  const {getByTestId} = setup(storeInstance);
  const component = getByTestId(DataTestIdTypes.MESSAGEBOX_DIV);
  expect(component).toBeInTheDocument();
});

test("renders Snackbar without error when its state us `true`", () => {
  storeInstance.openCloseState=true;
  const {queryByTestId} = setup(storeInstance);
  const component = queryByTestId(DataTestIdTypes.SNACKBAR_COMPONENT);
  // QueryByTestId returns null when the element could not be found,
  // getByTestId throws and error when the element could not be found .
  // const component = renderResult.getByTestId(DataTestIdTypes.SNACKBAR_COMPONENT);
  expect(component).toBeInTheDocument();
});

test("does not render Snackbar, when its state us `false`", () => {
  const {queryByTestId} = setup(storeInstance);
  const component = queryByTestId(DataTestIdTypes.SNACKBAR_COMPONENT);
  expect(component).toBeNull();
});

// Alert severity must be one of them
// 'success' | 'info' | 'warning' | 'error'
// Otherwise Alert component propCheck fails,

test("renders Alert Component with `error` severity", () => {
  storeInstance.openCloseState=true;
  storeInstance.openseverity = "error"
  const { queryByText,getByTestId } = setup(storeInstance);
  let component = getByTestId(DataTestIdTypes.ALERT_COMPONENT);
  expect(component).toBeInTheDocument();
  component = queryByText('error', { exact: false });
  expect(component).not.toBeNull();
});

