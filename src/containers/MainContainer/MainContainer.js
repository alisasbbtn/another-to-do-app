import React, { Component } from 'react';

import classes from './MainContainer.module.scss';

import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';

import axios from '../../axios-tasks';

class MainContainer extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    axios.get('/tasks.json').then((response) => {
      const tasks = [];
      for (let key in response.data) {
        tasks.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ tasks: tasks });
    });
  }

  addTaskHandler = (event) => {
    if (event.which === 13 && event.target.value) {
      const taskData = {
        content: event.target.value,
        isCompleted: false,
        createdAt: new Date(),
      };

      axios.post('/tasks.json', taskData).then((response) => {
        const task = { id: response.data.name, ...taskData };
        this.setState({ tasks: [...this.state.tasks, task] });
        event.target.value = '';
      });
    }
  };

  toggleTaskHandler = (id) => {
    const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
    const tasks = [...this.state.tasks];
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;

    axios
      .patch('/tasks/' + id + '.json', {
        isCompleted: tasks[taskIndex].isCompleted,
      })
      .then((response) => {
        this.setState({ tasks: tasks });
      });
  };

  deleteTaskHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      axios.delete('/tasks/' + id + '.json').then(() => {
        const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
        const tasks = this.state.tasks.filter(
          (item, index) => index !== taskIndex
        );
        this.setState({ tasks: tasks });
      });
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
