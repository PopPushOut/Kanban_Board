function tasks(state = {}, action) {
  if (action.type === 'ADD_TASK') {
    const { description, id } = action;
    const newTask = {
      id,
      description
    };
    return { ...state, [id]: newTask };
  }

  return state;
}

export default tasks;
