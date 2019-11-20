function gridColumns(state = [], action) {
  if (action.type === 'REMOVE_GRID_COLUMN') {
    const i = action.i;
    return [...state.slice(0, i), ...state.slice(i + 1)];
  }
  if (action.type === 'ADD_GRID_COLUMN') {
    const newColumn = {
      id: action.id,
      title: action.title
    };
    return [...state, newColumn];
  }
  if (action.type === 'UPDATE_GRID_COLUMN_TITLE') {
    const i = action.i;
    return [
      ...state.slice(0, i),
      {
        ...state[i],
        title: action.title
      },
      ...state.slice(i + 1)
    ];
  }
  if (action.type === 'ADD_TASK') {
    const { i, id } = action;
    return [
      ...state.slice(0, i),
      {
        ...state[i],
        taskIds: [...(state[i].taskIds || []), id]
      },
      ...state.slice(i + 1)
    ];
  }
  if (action.type === 'REMOVE_TASK') {
    const { taskId, columnIndex } = action;
    return [
      ...state.slice(0, columnIndex),
      {
        ...state[columnIndex],
        taskIds: [
          ...state[columnIndex].taskIds.filter((id) => {
            return taskId !== id;
          })
        ]
      },
      ...state.slice(columnIndex + 1)
    ];
  }
  if (action.type === 'CHANGE_TASKS_PARENT') {
    const { id, newIndex, oldIndex } = action;

    // Task dropped on same column, do nothing
    if (newIndex === oldIndex) {
      return [...state];
    }

    // Remove task id from old column task id list
    const copyOfState = [
      ...state.slice(0, oldIndex),
      {
        ...state[oldIndex],
        taskIds: [
          ...state[oldIndex].taskIds.filter((taskId) => {
            return taskId !== id;
          })
        ]
      },
      ...state.slice(oldIndex + 1)
    ];
    // Add task id to new column task id list
    return [
      ...copyOfState.slice(0, newIndex),
      {
        ...copyOfState[newIndex],
        taskIds: [...(copyOfState[newIndex].taskIds || []), id]
      },
      ...copyOfState.slice(newIndex + 1)
    ];
  }
  return state;
}

export default gridColumns;
