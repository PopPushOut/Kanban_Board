import React from "react";
import { Link } from "react-router";

const Task = React.createClass({
  render() {
    const { id, description } = this.props.item;
    return (
      <Link to={`/task/${id}`}>
        <li draggable="true">
          <h4>{description}</h4>
        </li>
      </Link>
    );
  }
});

export default Task;
