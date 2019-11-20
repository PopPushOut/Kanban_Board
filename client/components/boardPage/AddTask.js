import React from 'react';
import { v4 } from 'node-uuid';

function isEmpty(title) {
  return title.length === 0;
}

const AddTask = React.createClass({
  componentWillMount() {
    this.state = {
      taskTitle: '',
      editMode: false,
      taskCanBeSubmitted: false
    };
  },
  changeHandler(event) {
    const title = event.target.value;
    this.setState({
      taskTitle: title,
      taskCanBeSubmitted: !isEmpty(title)
    });
  },
  addTask() {
    const [columnIndex, title, taskId] = [
      this.props.index,
      this.state.taskTitle,
      v4()
    ];
    if (isEmpty(title)) {
      this.inputEl.focus();
      this.taskCanBeSubmitted = false;
      return;
    }
    this.props.addTask(columnIndex, title, taskId);
    this.setInitialState();
  },
  setInitialState() {
    this.setState({
      taskTitle: '',
      editMode: false,
      taskCanBeSubmitted: false
    });
  },
  setEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  },
  setTitleInput(element) {
    this.inputEl = element;
  },
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div className='control-buttons'>
            <button onClick={this.setEditMode}>+ Add Task</button>
          </div>
        ) : (
          <div className='form'>
            <input
              className={!this.state.taskCanBeSubmitted ? 'error' : ''}
              type='text'
              ref={this.setTitleInput}
              onChange={this.changeHandler}
              name='title'
              id='title'
              placeholder='Task Title'
            />
            <div className='control-buttons'>
              <button onClick={this.addTask}>Save</button>
              <button onClick={this.setInitialState}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  }
});

export default AddTask;
