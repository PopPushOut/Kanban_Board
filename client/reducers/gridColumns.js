// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function gridColumns(state = [], action) {
if (action.type === "REMOVE_GRID_COLUMN"){
  const i = action.i;
  return [
      ...state.slice(0, i),
      ...state.slice(i + 1)
  ]
}

return state;
}

export default gridColumns;
