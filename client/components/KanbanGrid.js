import React from "react";
import GridColumn from "./GridColumn";
import AddGridColumn from "./AddGridColumn";

const KanbanGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.gridColumns.map((column, index) => {
          return (
            <GridColumn key={column.id} index={index} column={column} removeGridColumn={this.props.removeGridColumn}></GridColumn>
          );
        })}
        <AddGridColumn/>
      </div>
    );
  }
});

export default KanbanGrid;
