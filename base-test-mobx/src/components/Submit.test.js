import React from "react";
/* eslint-disable require-jsdoc */
import {render,fireEvent } from '@testing-library/react';
import {Provider} from 'mobx-react';
import Store from '../stores/Store';
import * as DataTestIdTypes from '../test/DataTestIdTypes.js';
import 'mobx-react-lite/batchingForReactDom';
import '@testing-library/jest-dom/extend-expect'
import Submit from "./Submit";

let storeInstance = null;
afterEach(() => {
  storeInstance = new Store();
});

export const setup = (storeInstance=new Store()) => {
  return render(  <Provider Store={storeInstance}>
    <Submit />
  </Provider>);
}


test("renders Submit without error", () => {
  storeInstance=new Store();
  const {getByTestId} = setup(storeInstance);
  let component = getByTestId(DataTestIdTypes.TEST_SUBMIT_DIV);
  expect(component).toBeInTheDocument();
  component = getByTestId(DataTestIdTypes.TEST_SUBMIT_BUTTON);
  expect(component).toBeInTheDocument();
});


test("renders Submit without error", () => {
    storeInstance=new Store();
    const {getByTestId} = setup(storeInstance);
    let component = getByTestId(DataTestIdTypes.TEST_SUBMIT_DIV);
    expect(component).toBeInTheDocument();
    component = getByTestId(DataTestIdTypes.TEST_SUBMIT_BUTTON);
    expect(component).toBeInTheDocument();
  });

  test("button click Event on Submit without", () => {
    storeInstance=new Store();
    const {getByTestId} = setup(storeInstance);
    let button = getByTestId(DataTestIdTypes.TEST_SUBMIT_BUTTON);
    fireEvent.click(button);
    expect(storeInstance.openCloseState).toBe(true);
  });