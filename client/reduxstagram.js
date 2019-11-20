import React from "react";
import { render } from "react-dom";

import css from "./styles/style.styl";

// Components Import
import App from "./components/App";
import KanbanGrid from "./components/boardPage/KanbanGrid";
import TaskPage from "./components/taskPage/TaskPage";

import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={KanbanGrid}></IndexRoute>
        <Route path="/task/:taskId" component={TaskPage}></Route>
      </Route>
    </Router>
  </Provider>
);
render(router, document.getElementById("root"));
