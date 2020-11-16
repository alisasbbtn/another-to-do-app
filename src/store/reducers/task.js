import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  tasks: [],
};

const addTask = (state, action) => {
  const updatedTasks = [...state.tasks, action.task];
  return updateObject(state, { tasks: updatedTasks });
};

const updateTask = (state, action) => {
  const updatedTasks = state.tasks.map((task) => {
    return task.id === action.task.id ? action.task : task;
  });
  return updateObject(state, { tasks: updatedTasks });
};

const deleteTask = (state, action) => {
  const updatedTasks = state.tasks.filter((task) => task.id !== action.id);
  return updateObject(state, { tasks: updatedTasks });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_SUCCESS:
      return updateObject(state, { tasks: action.tasks });
    case actionTypes.ADD_TASK_SUCCESS:
      return addTask(state, action);
    case actionTypes.UPDATE_TASK_SUCCESS:
      return updateTask(state, action);
    case actionTypes.DELETE_TASK_SUCCESS:
      return deleteTask(state, action);
    default:
      return state;
  }
};

export default reducer;
