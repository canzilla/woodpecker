/* eslint-disable require-jsdoc */
import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from 'mobx-react';
import App from '../components/App';
import TodoStore from '../stores/TodoStore';
import * as testIds from '../test/testIds';
import 'mobx-react-lite/batchingForReactDom';

afterEach(cleanup);

it('addTodo function Test', () => {
  const todoStore = TodoStore;
  const {getByTestId} = render(
      <Provider TodoStore={todoStore}>
        <App />
      </Provider>);
  // Expecting initial value on Store, 0 items on todos array.
  expect(getByTestId(testIds.LIST_TODO).childElementCount).toBe(0);
  // Achieving domObject of input;
  const inputElement = getByTestId(testIds.INPUT);
  // Simulating onChange event on inputElement
  fireEvent.input(inputElement, {target: {value: 'Any Todo'}});
  // Simulating keyUp event on inputElement
  fireEvent.keyUp(inputElement, {
    key: 'Enter',
  });
  fireEvent.keyUp(inputElement, {
    key: 'Enter',
  });
  fireEvent.keyUp(inputElement, {
    key: 'Enter',
  });
  fireEvent.keyUp(inputElement, {
    key: 'Enter',
  });
  // Checking result
  expect(getByTestId(testIds.LIST_TODO).childElementCount).toBe(4);
});

// Generating a random item for reality of the test
const getRandomElementIndex = (length) => {
  return parseInt((Math.random() * length));
};

it('deleteTodo function manipulating store testing', async () => {
  const todoStore = TodoStore;
  const {getByTestId, getAllByTestId} = render(
      <Provider TodoStore={todoStore}>
        <App />
      </Provider>);
  // Expecting initial value on Store, 4 items on todos array.
  expect(getByTestId(testIds.LIST_TODO).childElementCount).toBe(4);
  const listContainer = getByTestId(testIds.LIST_TODO);
  // Achieving domObject, and picking a random element inside it;
  const randomPositon = getRandomElementIndex(listContainer.childElementCount);

  const todoItemId = listContainer
      .children[randomPositon]
      .firstElementChild.getAttribute('testingkey');

  // DOM element for delete button
  const deleteElement = getAllByTestId(testIds.DELETE_TODO)[randomPositon];
  // Simulating onClick event on delete Button
  fireEvent.click(deleteElement, todoItemId);
  // checking result of our operation
  expect(todoStore.todosFiltered.length).toBe(3);
  // const resultList = getAllByTestId(testIds.DELETE_TODO);
  // expect(resultList.length).toBe(4);
});

// Delete event causing rerendering and it will be catch on next iteration thats why
// we check the result here
it('After Delete Operation hom many item rendered', async () => {
  const todoStore = TodoStore;
  const {getAllByTestId} = render(
      <Provider TodoStore={todoStore}>
        <App />
      </Provider>);
  expect(getAllByTestId(testIds.DELETE_TODO).length).toBe(3);
});

// A variable to be ensure the size of effectted component
let lengthBeforeTestOperationDone = 0;
it('After Delete Operation hom many item rendered', () => {
  const todoStore = TodoStore;
  const {getAllByTestId} = render(
      <Provider TodoStore={todoStore}>
        <App />
      </Provider>);

  const components = getAllByTestId(testIds.DIV_NO_EDITING);
  lengthBeforeTestOperationDone = components.length;
  const randomPositon = getRandomElementIndex(components.length);
  const randomComponent = components[randomPositon];
  fireEvent.dblClick(randomComponent, randomComponent.getAttribute('todo'));
  expect(todoStore.todos[randomPositon].editing).toBe(true);
});

// Edit event causing rerendering and it will be catch on next iteration thats why
// we check the result here
it('Editing effect on render', () => {
  const todoStore = TodoStore;
  const {getAllByTestId} = render(
      <Provider TodoStore={todoStore}>
        <App />
      </Provider>);
  const components = getAllByTestId(testIds.DIV_NO_EDITING);
  expect(components.length).toBe(lengthBeforeTestOperationDone-1);
});
