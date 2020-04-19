/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
import React from 'react';
import {observable, action, computed, runInAction} from 'mobx';

class TodoStore {
  @observable todoInput = React.createRef();
  @observable filter = 'all';
  @observable beforeEditCache = '';
  @observable todos = [];

  @action addTodo = (event) => {
    if (event.key === 'Enter') {
      const todoInput = this.todoInput.current.value;

      if (todoInput.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: new Date().getTime()+2000,
        title: todoInput,
        completed: false,
        editing: false,
      });

      // this.todoInput.current.value = '';
    }
  }

  @action deleteTodo = (id) => {
    console.log('deleteTodo called : ' + this.todos);
    const index = this.todos.findIndex((item) => item.id === id);
    this.todos.splice(index, 1);
  }

  @action checkTodo = (todo, _event) => {
    runInAction(() => {
      todo.completed = !todo.completed;
      const index = this.todos.findIndex((item) => item.id === todo.id);
      this.todos.splice(index, 1, todo);
    });
  }

  @action editTodo = (todo) => {
    console.log('Editing On');
    todo.editing = true;
    this.beforeEditCache = todo.title;

    const index = this.todos.findIndex((item) => item.id === todo.id);

    this.todos.splice(index, 1, todo);
  }

  @action doneEdit = (todo, event) => {
    todo.editing = false;

    if (event.target.value.trim().length === 0) {
      todo.title = this.beforeEditCache;
    } else {
      todo.title = event.target.value;
    }

    runInAction(() => {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      this.todos.splice(index, 1, todo);
    });
  }

  @action cancelEdit = (todo, _event) => {
    todo.title = this.beforeEditCache;
    todo.editing = false;

    const index = this.todos.findIndex((item) => item.id === todo.id);

    this.todos.splice(index, 1, todo);
  }

  @action checkAllTodos = (event) => {
    this.todos.forEach((todo) => todo.completed = event.target.checked);
    event.persist();
    runInAction(() => {
      this.todos.forEach((todo) => todo.completed = event.target.checked);
    });
  }

  @action updateFilter = (filter) => {
    this.filter = filter;
  }


  @action clearCompleted = () => {
    runInAction(() => {
      this.todos = this.todos.filter((todo) => !todo.completed);
    });
  }

  @computed get todosCompletedCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  @computed get todosFiltered() {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    console.log('computed values returning : ' + this.todos);
    return this.todos;
  }

  @computed get remaining() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  @computed get anyRemaining() {
    return this.remaining !== 0;
  }
}

const store = new TodoStore();
export default store;
