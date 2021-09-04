import { v4 as uuid } from 'uuid';

// import actions for avoiding typos

import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TODO,
  EDIT_TASK,
  REMOVE_TASK,
  RESTORE_TASKS,
} from './actions';

const appReducer = (lists, action) => {
  switch (action.type) {
    // logic for adding lists
    case ADD_LIST:
      return [...lists, { id: uuid(), listTitle: action.payload, tasks: [] }];
    // logic for removing lists
    case REMOVE_LIST:
      return lists.filter((item) => item.id !== action.payload);
    // logic for adding todo
    case ADD_TODO:
      lists.map((list) => {
        if (list.id === action.payload.listID) {
          return list.tasks.push({
            id: uuid(),
            taskText: action.payload.taskText,
            done: false,
          });
        } else return list;
      });
    // logic for toggling todo/done
    case EDIT_TASK:
      return lists;
    // logic for removing items
    case REMOVE_TASK:
      return lists;
    // logic to get tasks from local storage when mounting
    case RESTORE_TASKS:
      return lists;
    default:
      return lists;
  }
};

export default appReducer;
