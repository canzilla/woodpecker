/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';
import {DELETE_TODO, INPUT_EDIT, DIV_NO_EDITING} from '../test/testIds';
const TodoItem = inject('TodoStore')(observer((
    {
      TodoStore:
    {checkTodo, editTodo, deleteTodo, cancelEdit, doneEdit, todos}, todo}) => {
  return (
    <div>
      <div testingkey={todo.id} key={todo.id} className="todo-item">
        <div className="todo-item-left">
          <input type="checkbox" onChange={(event) => checkTodo(todo, event)} checked={todo.completed} />
          {!todo.editing &&
          <div
            todo={todo}
            data-testid={DIV_NO_EDITING}
            className={classNames({'todo-item-label': true, 'completed': todo.completed})}
            onDoubleClick={(event) => editTodo(todo, event)}
          >
            {todo.title}
          </div>
          }
          {todo.editing &&
          <input
            data-testid={INPUT_EDIT}
            className="todo-item-edit" type="text" autoFocus
            defaultValue={todo.title}
            onBlur={(event) => doneEdit(todo, event)}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                doneEdit(todo, event);
              } else if (event.key === 'Escape') {
                cancelEdit(todo, event);
              }
            }}
          />
          }

        </div>
        <div data-testid={DELETE_TODO}
          className="remove-item"
          onClick={(event) => deleteTodo(todo.id)}>
          &times;
        </div>
      </div>
    </div>
  );
}));

TodoItem.wrappedComponent.propTypes = {
  todo: PropTypes.object.isRequired,
  TodoStore: PropTypes.object.isRequired,
};

export default TodoItem;
