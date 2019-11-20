export function updateTask(description, id) {
  return {
    type: 'UPDATE_TASK',
    description,
    id
  };
}

export function addTask(i, title, id) {
  return {
    type: 'ADD_TASK',
    i,
    title,
    id
  };
}

export function removeTask(taskId, columnIndex) {
  return {
    type: 'REMOVE_TASK',
    taskId,
    columnIndex
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

// Comments actions
export function addComment(taskId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    taskId,
    author,
    comment
  };
}

export function removeComment(taskId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    taskId
  };
}
