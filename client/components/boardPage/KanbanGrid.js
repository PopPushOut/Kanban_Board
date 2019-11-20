import React from 'react';

import GridColumn from './GridColumn';
import AddGridColumn from './AddGridColumn';

const KanbanGrid = React.createClass({
  render() {
    return (
      <div className='grid'>
        {this.props.gridColumns.map((column, index) => {
          return (
            <GridColumn
              key={index}
              index={index}
              column={column}
              comments={this.props.comments || {}}
              tasks={this.props.tasks || []}
              changeTasksParent={this.props.changeTasksParent}
              removeGridColumn={this.props.removeGridColumn}
              updateGridColumnTitle={this.props.updateGridColumnTitle}
              addTask={this.props.addTask}
            />
          );
        })}
        <AddGridColumn addGridColumn={this.props.addGridColumn} />
      </div>
    );
  }
});

export default KanbanGrid;
