// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function gridColumns(state = [], action) {
  if (action.type === "REMOVE_GRID_COLUMN") {
    const i = action.i;
    return [...state.slice(0, i), ...state.slice(i + 1)];
  } else if (action.type === "ADD_GRID_COLUMN") {
    console.log(action);
  } else if (action.type === "UPDATE_GRID_COLUMN_TITLE") {
    console.log(action);
  }

  return state;
}

export default gridColumns;
