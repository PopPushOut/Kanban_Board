import React from "react";
import Task from "./Task";

const GridColumn = React.createClass({
  render() {
    return (
      <figure className="grid-figure">
        <button
          className="remove-column"
          onClick={this.props.removeGridColumn.bind(null, this.props.index)}
        >
          &times;
        </button>
        <h3>{this.props.column.title}</h3>
        {this.props.column.items
          ? this.props.column.items.map((item, index) => {
              return <Task key={item.id} item={item}></Task>;
            })
          : ""}
      </figure>
    );
  }
});

export default GridColumn;
