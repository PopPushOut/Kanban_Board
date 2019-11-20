function gridColumns(state = [], action) {
  if (action.type === "REMOVE_GRID_COLUMN") {
    const i = action.i;
    return [...state.slice(0, i), ...state.slice(i + 1)];
  }
  if (action.type === "ADD_GRID_COLUMN") {
    const newColumn = {
      id: action.id,
      title: action.title
    };
    return [...state, newColumn];
  }
  if (action.type === "UPDATE_GRID_COLUMN_TITLE") {
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
  if (action.type === "ADD_TASK") {
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
  if (action.type === "CHANGE_TASKS_PARENT") {
    const { id, newIndex, oldIndex } = action;

    // Task dropped on same column, do nothing
    if (newIndex === oldIndex) {
      return [...state];
    }

    const copyOfState = [...state];
    copyOfState[newIndex].taskIds = [
      ...(copyOfState[newIndex].taskIds || []),
      id
    ];
    copyOfState[oldIndex].taskIds = copyOfState[oldIndex].taskIds.filter(
      taskId => {
        return taskId !== id;
      }
    );
    return copyOfState;
  }
  return state;
}

export default gridColumns;
