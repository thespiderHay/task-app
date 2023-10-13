import { createBrowserHistory, History } from "history";
import { configureStore } from "@reduxjs/toolkit";
import {
  routerMiddleware,
  connectRouter,
  RouterState,
} from "connected-react-router";
import tasksReducer from "./reducers/tasks";
import { TaskState } from "./shared/interfaces";

export const history = createBrowserHistory();

const rootReducer = (history: History) => ({
  tasks: tasksReducer,
  router: connectRouter(history),
});

const preloadedState = {};
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: rootReducer(history),
  preloadedState,
});

export interface I_AppState {
  tasks: TaskState;
  router: RouterState;
}
