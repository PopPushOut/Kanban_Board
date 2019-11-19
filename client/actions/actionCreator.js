export function addTask(i, title, parentTitle, id) {
  return {
    type: 'ADD_TASK',
    i,
    title,
    id,
    parentTitle
  };
}

export function changeTasksParent(id, newIndex, oldIndex) {
  return {
    type: 'CHANGE_TASKS_PARENT',
    id,
    newIndex,
    oldIndex
  };
}

export function removeGridColumn(i) {
  return {
    type: 'REMOVE_GRID_COLUMN',
    i
  };
}

export function addGridColumn(id, title) {
  return {
    type: 'ADD_GRID_COLUMN',
    id,
    title
  };
}

export function updateGridColumnTitle(i, title) {
  return {
    type: 'UPDATE_GRID_COLUMN_TITLE',
    i,
    title
  };
}
