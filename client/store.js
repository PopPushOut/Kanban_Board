import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import throttle from "lodash/throttle";

// import the root reducer
import rootReducer from "./reducers/index";
import { saveState, loadState } from "./localstorage";

import tasks from "./data/tasks";
import gridColumns from "./data/columns";

// Sample Data, use if lazy as default store value, pass instead of persistedState
const defaultState = {
  gridColumns,
  tasks
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
