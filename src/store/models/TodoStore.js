import { types } from 'mobx-state-tree';

import Todo from './Todo';

const TodoStore = types
  .model('Todo', {
    todos: types.array(Todo)
  })
  .actions(self => ({
    add(task) {
      self.todos.push(task);
    }
  }));

export default TodoStore;