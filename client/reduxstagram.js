import React from "react";
import { render } from "react-dom";

import css from "./styles/style.styl";

// Components Import
import App from "./components/App";
import KanbanGrid from "./components/KanbanGrid";
import ItemInfo from "./components/ItemInfo";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={KanbanGrid}></IndexRoute>
        <Route path="/item/:itemId" component={ItemInfo}></Route>
      </Route>
    </Router>
  </Provider>
);
render(router, document.getElementById("root"));
