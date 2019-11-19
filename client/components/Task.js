import React from 'react';
import { Link } from 'react-router';
import { formatDate } from '../utils/utility';

const Task = React.createClass({
  render() {
    const { id, title, createdOn } = this.props.task;
    return (
      <Link to={`/task/${id}`}>
        <li
          id={id}
          onDragStart={this.props.onDragStart}
          draggable
          className='task'>
          <h4>{title}</h4>
          {formatDate(createdOn)}
        </li>
      </Link>
    );
  }
});

export default Task;
