import { v4 as uuid } from 'uuid';

// actions
import {
  ADD_LIST,
  REMOVE_LIST,
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  RESTORE_STATE,
} from './actions';

const appReducer = (appState, action) => {
  switch (action.type) {
    // logic for adding lists
    case ADD_LIST:
      return [
        ...appState,
        { listID: uuid(), listTitle: action.payload, tasks: [] },
      ];

    // logic for removing lists
    case REMOVE_LIST:
      return appState.filter((list) => list.listID !== action.payload);

    // logic for adding todo
    case ADD_TASK:
      return appState.map((list) => {
        if (list.listID === action.payload.listID)
          return {
            ...list,
            tasks: [
              ...list.tasks,
              {
                taskID: uuid(),
                taskTitle: action.payload.taskTitle,
                done: false,
              },
            ],
          };
        else return list;
      });

    // logic for toggling todo/done
    case EDIT_TASK:
      return appState;
    /*
      return [
        ...appState,
        appState.map((list) => {
          if (list.id === action.payload.listID)
            return {
              ...list,
              tasks: [
                ...list.tasks.reduce((acc, task) => {
                  if (task.taskID === action.payload.taskID)
                    acc.push({ ...task, done: !task.done });
                  else acc.push({ ...task });
                  return acc;
                }, []),
              ],
            };
          else return list;
        }),
      ];
*/
    // logic for removing items
    case REMOVE_TASK:
      //return appState;
      //appState.filter((list) => list.listID !== action.payload);

      return appState.map((list) => {
        if (list.listID === action.payload.listID)
          return {
            ...list,
            tasks: [
              ...list.tasks.filter(
                (task) => task.taskID !== action.payload.taskID
              ),
            ],
          };
        else return list;
      });

    // logic to get tasks from local storage when mounting
    case RESTORE_STATE:
      return action.payload;

    // default
    default:
      return appState;
  }
};

export default appReducer;

/*
case ADD_TASK:
      lists.map((list) => {
        if (list.id === action.payload.listID) {
          return list.tasks.push({
            id: uuid(),
            taskText: action.payload.taskText,
            done: false,
          });
        } else return list;
      });

      return lists; */
