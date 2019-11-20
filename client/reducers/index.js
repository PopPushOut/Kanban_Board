import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gridColumns from './gridColumns';
import tasks from './tasks';
import comments from './comments';

const rootReducer = combineReducers({
  gridColumns,
  tasks,
  comments,
  routing: routerReducer
});

export default rootReducer;
