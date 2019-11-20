import React from 'react';
import { Link } from 'react-router';

const CommentCounter = React.createClass({
  render() {
    const comments = this.props.comments;
    const id = this.props.taskId;
    return (
      <Link className='decoration-none' to={`/task/${id}`}>
        <div className='control-buttons'>
          <button>
            <span className='comment-count'>
              <span className='speech-bubble'></span>
              {comments ? comments.length : 0}
            </span>
          </button>
        </div>
      </Link>
    );
  }
});

export default CommentCounter;
