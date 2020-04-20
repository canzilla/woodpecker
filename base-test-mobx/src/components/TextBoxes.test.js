import React from "react";
/* eslint-disable require-jsdoc */
import {render } from '@testing-library/react';
import {Provider} from 'mobx-react';
import Store from '../stores/Store';
import * as DataTestIdTypes from '../test/DataTestIdTypes.js';
import 'mobx-react-lite/batchingForReactDom';
import '@testing-library/jest-dom/extend-expect'
import TextBoxes from './TextBoxes';

let storeInstance = new Store();
afterEach(() => {
  storeInstance = new Store();
});

export const setup = (storeInstance=new Store()) => {
  return render(  <Provider Store={storeInstance}>
    <TextBoxes />
  </Provider>);
}

test("renders TextBoxes container without any error", () => {
  const {getByTestId} = setup(storeInstance);
  const component = getByTestId(DataTestIdTypes.TEXT_BOXES_CONTAINER);
  expect(component).toBeInTheDocument();
});

test("Number of textField must be equal to length of prop(objectToDisplay)", () => {
  storeInstance.setObjectToDisplay({
    "thizz" : "this",
    "shall" : "shall",
    "pass" : "pass",
    "too" : "too"
  });
  const { getAllByTestId } = setup(storeInstance);
  const componentList = getAllByTestId(DataTestIdTypes.TEXT_FIELDS);
  expect(componentList.length).toBe(4);
});


test("Textfields must be displaying approtiate field from 'objectToDisplay'", () => {
  const exampleObject = {
    "thizz" : "this",
    "shall" : "shall",
    "pass" : "pass",
    "too" : "too"
  }
  storeInstance.setObjectToDisplay(exampleObject);
  const { getAllByTestId } = setup(storeInstance);
  const componentList = getAllByTestId(DataTestIdTypes.TEXT_INPUT_FIELDS);
  expect(componentList[1]).toHaveValue(Object.values(exampleObject)[1]);
});




