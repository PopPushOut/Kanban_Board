import React from 'react';
import { Link } from 'react-router';

const Task = React.createClass({
  render() {
    const { id, description } = this.props.task;
    return (
      <Link to={`/task/${id}`}>
        <li
          id={id}
          onDragStart={this.props.onDragStart}
          draggable
          className='task'>
          <h4>{description}</h4>
        </li>
      </Link>
    );
  }
});

export default Task;
