export function addComment(itemId, comment) {
  return {
    type: "ADD_COMMENT",
    itemId,
    comment
  };
}

export function removeComment(itemId, i) {
  return {
    type: "REMOVE_COMMENT",
    itemId,
    i
  };
}

export function removeGridColumn(i) {
  return {
    type: "REMOVE_GRID_COLUMN",
    i
  };
}
