import axios from '../axios-tasks';

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';

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
    type: FETCH_TASKS_SUCCESS,
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
    type: ADD_TASK_SUCCESS,
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
    type: UPDATE_TASK_SUCCESS,
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
    type: DELETE_TASK_SUCCESS,
    id: taskId,
  };
};
