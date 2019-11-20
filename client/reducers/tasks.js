function tasks(state = {}, action) {
  if (action.type === 'ADD_TASK') {
    const { title, id } = action;
    const creationDate = new Date();
    const createdOn = creationDate.toString();
    const updatedOn = creationDate.toString();
    const description = '';

    const newTask = {
      id,
      title,
      createdOn,
      updatedOn,
      description
    };
    return { ...state, [id]: newTask };
  }
  if (action.type === 'UPDATE_TASK') {
    const { description, id } = action;
    const updatedOn = new Date().toString();
    return {
      ...state,
      [id]: {
        ...state[id],
        description,
        updatedOn
      }
    };
  }
  if (action.type === 'REMOVE_TASK') {
    const { taskId } = action;
    const { [taskId]: value, ...restTasks } = state;
    return restTasks;
  }
  return state;
}

export default tasks;
