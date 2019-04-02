import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import TodoForm from './components/TodoForm';
import TodoDetail from './components/TodoDetail';

class App extends Component {
  render() {
    const { todoStore } = this.props.store;

    return (
      <div className="App">
        <div>
          <h3 className="subtitle">Make a new To do</h3>
          <TodoForm todoStore={todoStore} />
        </div>
        <div className="card-container">
          {todoStore.todos.map((todo, i) => (
            <TodoDetail todo={todo} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};

export default inject('store')(observer(App));