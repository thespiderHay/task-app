import { RouterState } from "connected-react-router";
import type { I_AppState } from "../store";

export interface I_AppSelectorState {
  tasks: I_AppState["tasks"];
  router: RouterState;
}

export const appSelector = ({
  tasks,
  router,
}: I_AppState): I_AppSelectorState => ({
  tasks: tasks,
  router,
});
