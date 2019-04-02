import { types } from 'mobx-state-tree';

import TodoStore from './models/TodoStore';

const RootStore = types.model('RootStore', {
  todoStore: TodoStore
});

const store = RootStore.create({
    todoStore: TodoStore.create()
  }
);

export default store;