import { types } from 'mobx-state-tree';

const Todo = types
  .model('Todo', {
    name: types.string,
    details: types.string,
    is_done: false
  })
  .actions(self => ({
    markDone() {
      self.is_done = true;
    }
  }))
  .views(self => ({
    status() {
      return self.is_done ? 'Done' : 'Not Done'
    }
  }));

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