import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  addTaskHandler = (event) => {
    if (event.which === 13 && event.target.value) {
      this.props.onAddTask(event.target.value);
      event.target.value = '';
    }
  };

  toggleTaskHandler = (id) => {
    const taskIndex = this.props.tasks.findIndex((task) => task.id === id);
    const taskData = this.props.tasks[taskIndex];
    delete taskData.id;
    taskData.isCompleted = !taskData.isCompleted;

    this.props.onUpdateTask(taskData, id);
  };

  render() {
    return (
      <React.Fragment>
        <TaskInput taskAdded={this.addTaskHandler} />
        <TaskList
          tasks={this.props.tasks}
          taskDeleted={this.props.onDeleteTask}
          taskToggled={this.toggleTaskHandler}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTasks: () => dispatch(actions.fetchTasks()),
    onAddTask: (content) => dispatch(actions.addTask(content)),
    onUpdateTask: (taskData, id) => dispatch(actions.updateTask(taskData, id)),
    onDeleteTask: (id) => dispatch(actions.deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
