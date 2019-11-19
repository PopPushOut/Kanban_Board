import React from 'react';

const TaskInfo = React.createClass({
  render() {
    // find id of parent
    const i = this.props.tasks[this.props.params.taskId];
    console.log(i);
    return <div className='single-photo'>I'm item info</div>;
  }
});

export default TaskInfo;
