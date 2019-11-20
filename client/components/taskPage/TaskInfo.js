import React from 'react';

import { formatDate } from '../../utils/utility';
import CommentCounter from '../CommentCounter';

const TaskInfo = React.createClass({
  componentWillMount() {
    this.state = {
      description: this.props.task.description,
      editMode: false
    };
  },
  handleChange(event) {
    this.setState({
      description: event.target.value
    });
  },
  updateTaskDescription(id) {
    this.props.updateTask(this.state.description, id);
    this.switchEditMode();
  },
  switchEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  },
  render() {
    const task = this.props.task;
    const comments = this.props.taskComments;
    return (
      <figure className='grid-figure'>
        <h2 className='title'>{this.props.parentTitle}</h2>
        <div className='task-info'>
          <h2>{task.title}</h2>
          <p>
            <strong>Created</strong>
            {formatDate(task.createdOn)}
          </p>
          <p>
            <strong>Updated</strong>
            {formatDate(task.updatedOn)}
          </p>
          <div className='form'>
            {!this.state.editMode ? (
              <textarea
                className='textarea-readonly'
                value={task.description}
                onClick={this.switchEditMode}
                placeholder='Description'
                readOnly
              />
            ) : (
              <div>
                <textarea
                  className='textarea'
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder='Description'
                />
                <div className='control-buttons'>
                  <button
                    onClick={this.updateTaskDescription.bind(null, task.id)}>
                    Save
                  </button>
                  <button onClick={this.switchEditMode}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <CommentCounter comments={comments} taskId={task.id} />
      </figure>
    );
  }
});

export default TaskInfo;
