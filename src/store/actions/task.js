import axios from '../../axios-tasks';
import * as actionTypes from './actionTypes';

export const fetchTasks = () => {
  return (dispatch) => {
    axios.get('/tasks.json').then((response) => {
      const tasks = [];
      for (let key in response.data) {
        tasks.push({
          ...response.data[key],
          id: key,
        });
      }
      dispatch(fetchTasksSuccess(tasks));
    });
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks,
  };
};

export const addTask = (taskContent) => {
  const taskData = {
    content: taskContent,
    isCompleted: false,
    createdAt: new Date(),
  };

  return (dispatch) =>
    axios.post('/tasks.json', taskData).then((response) => {
      taskData.id = response.data.name;
      dispatch(addTaskSuccess(taskData));
    });
};

export const addTaskSuccess = (task) => {
  return {
    type: actionTypes.ADD_TASK_SUCCESS,
    task,
  };
};

export const updateTask = (taskData, id) => {
  return (dispatch) => {
    axios.patch('/tasks/' + id + '.json', taskData).then(() => {
      taskData.id = id;
      dispatch(updateTaskSuccess(taskData));
    });
  };
};

export const updateTaskSuccess = (task) => {
  return {
    type: actionTypes.UPDATE_TASK_SUCCESS,
    task,
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    axios.delete('/tasks/' + taskId + '.json').then(() => {
      dispatch(deleteTaskSuccess(taskId));
    });
  };
};

export const deleteTaskSuccess = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK_SUCCESS,
    id: taskId,
  };
};
