import React from 'react';
import generateId from '../helpers/generator';

const AddTask = React.createClass({
  taskDescription: null,
  setDescriptionInput(element) {
    this.taskDescription = element;
  },
  addTask() {
    const [columnIndex, description, taskId] = [
      this.props.index,
      this.taskDescription.value,
      generateId()
    ];
    this.props.addTask(columnIndex, description, taskId);
  },
  render() {
    return (
      <li className='task form'>
        <input
          type='text'
          ref={this.setDescriptionInput}
          name='description'
          id='description'
          placeholder='Description'
        />
        <button onClick={this.addTask} className='save-button'>
          + Add Task
        </button>
      </li>
    );
  }
});

export default AddTask;
