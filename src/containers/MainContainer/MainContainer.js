import React, { Component } from 'react';

import classes from './MainContainer.module.scss';

import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';

import { nanoid } from 'nanoid';

class MainContainer extends Component {
  state = {
    tasks: [],
  };

  addTaskHandler = (event) => {
    if (event.which === 13 && event.target.value) {
      const task = {
        id: nanoid(),
        content: event.target.value,
        isCompleted: false,
        createdAt: new Date(),
      };
      this.setState({ tasks: [...this.state.tasks, task] });
      event.target.value = '';
    }
  };

  toggleTaskHandler = (id) => {
    const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
    const tasks = [...this.state.tasks];
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
    this.setState({ tasks: tasks });
  };

  deleteTaskHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
      const tasks = this.state.tasks.filter(
        (item, index) => index !== taskIndex
      );
      this.setState({ tasks: tasks });
    }
  };

  render() {
    return (
      <div className={classes.MainContainer}>
        <TaskInput taskAdded={this.addTaskHandler} />
        <TaskList
          tasks={this.state.tasks}
          taskDeleted={this.deleteTaskHandler}
          taskToggled={this.toggleTaskHandler}
        />
      </div>
    );
  }
}

export default MainContainer;
