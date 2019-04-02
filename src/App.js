import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import TodoForm from './components/TodoForm';
import TodoDetail from './components/TodoDetail';

const App = ({ todos }) => {
  return (
    <div className="App">
      <div>
        <h3 className="subtitle">Make a new ToDo</h3>
        <TodoForm />
      </div>
      <div className="card-container">
        {todos.map((todo, i) => (
          <TodoDetail todo={todo} key={i} />
        ))}
      </div>
    </div>
  );
};

App.propTypes = {
  todos: PropTypes.array
};

const mapStoreToProps = ({ todoStore }) => {
  return {
    todos: todoStore.todos
  };
};

export default inject(mapStoreToProps)(observer(App));