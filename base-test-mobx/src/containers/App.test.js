import React from "react";
/* eslint-disable require-jsdoc */
import {render } from '@testing-library/react';
import {Provider} from 'mobx-react';
import Store from '../stores/Store';
import * as DataTestIdTypes from '../test/DataTestIdTypes.js';
import 'mobx-react-lite/batchingForReactDom';
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

let storeInstance = null;
afterEach(() => {
  storeInstance = new Store();
});

export const setup = (storeInstance=new Store()) => {
  return render(  <Provider Store={storeInstance}>
    <App />
  </Provider>);
}

test("renders App without error", () => {
  storeInstance=new Store();
  const {getByTestId,getAllByTestId} = setup(storeInstance);
  let component = getByTestId(DataTestIdTypes.GRID_CONTAINER);
  expect(component).toBeInTheDocument();
  const components = getAllByTestId(DataTestIdTypes.GRID_ITEM);
  expect(components.length).toBe(2);
});