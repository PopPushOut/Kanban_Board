function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log('ADD_COMMENT - ', state);
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      console.log('REMOVE_COMMENT - ', state);
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.taskId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this task with a new one
      [action.taskId]: postComments(state[action.taskId], action)
    };
  }
  return state;
}

export default comments;
