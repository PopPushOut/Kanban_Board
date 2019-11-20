import React from 'react';

import CommentCounter from '../CommentCounter';

const Task = React.createClass({
  render() {
    const { id, title } = this.props.task;
    const taskComments = this.props.comments[id] || [];
    return (
      <li
        id={id}
        onDragStart={this.props.onDragStart}
        draggable
        className='task'>
        <h4>{title}</h4>
        <CommentCounter comments={taskComments} taskId={id} />
      </li>
    );
  }
});

export default Task;
