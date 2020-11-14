import * as actionTypes from './actions';
import { updateObject } from './utility';

const initialState = {
  tasks: [],
};

const addTask = (state, action) => {
  const updatedTasks = [...state.tasks, action.task];
  return updateObject(state, { tasks: updatedTasks });
};

const toggleTask = (state, action) => {
  const taskIndex = state.tasks.findIndex((task) => task.id === action.id);
  const updatedTasks = [...state.tasks];
  updatedTasks[taskIndex].isCompleted = !updatedTasks[taskIndex].isCompleted;
  return updateObject(state, { tasks: updatedTasks });
};

const deleteTask = (state, action) => {
  const updatedTasks = state.tasks.filter((task) => task.id !== action.id);
  return updateObject(state, { tasks: updatedTasks });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.TOGGLE_TASK:
      return toggleTask(state, action);
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    default:
      return state;
  }
};

export default reducer;
