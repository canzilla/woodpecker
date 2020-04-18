/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {LIST_TODO} from '../test/testIds';
import TodoItem from './TodoItem';
import {observer} from 'mobx-react-lite';
import {inject} from 'mobx-react';
const TodoItemContainer =

inject('TodoStore')
(observer(({TodoStore: {todosFiltered}}) => {
  return (
    <ReactCSSTransitionGroup
      data-testid={LIST_TODO}
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {todosFiltered.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ReactCSSTransitionGroup>
  );
}));
export default TodoItemContainer;
