export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (taskContent) => {
  const task = {
    id: Date.now(),
    content: taskContent,
    isCompleted: false,
    createdAt: new Date(),
  };

  return {
    type: ADD_TASK,
    task: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    id: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    id: taskId,
  };
};
