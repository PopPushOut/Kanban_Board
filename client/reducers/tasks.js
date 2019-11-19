function tasks(state = {}, action) {
  if (action.type === 'ADD_TASK') {
    const { title, id } = action;
    const creationDate = new Date();
    const createdOn = creationDate.toString();
    const updatedOn = creationDate.toString();

    const newTask = {
      id,
      title,
      createdOn,
      updatedOn
    };
    return { ...state, [id]: newTask };
  }

  return state;
}

export default tasks;
