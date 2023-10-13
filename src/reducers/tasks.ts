import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task2, TaskState } from "../shared/interfaces";

const initialState: TaskState = {
  tasks: [],
  search: []
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task2>) => {
      if (
        state.tasks.findIndex((item) => item.id === action.payload.id) !== -1
      ) {
        return console.error(
          "Launcher",
          "Illegal Action: addTask - ID Collision"
        );
      }
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    SetTask: (stat, action: PayloadAction<Task2>) => {
      const payload = action.payload;
      const newState = [...stat.tasks];
      const newTaskIdx = stat.tasks.findIndex((t) => t.id === payload.id);
      if (newTaskIdx !== -1) {
        const newTask = { ...stat.tasks[newTaskIdx], ...payload };
        console.log("newTask >> ", newTask);
        newState[newTaskIdx] = newTask;
        stat.tasks = newState;
      }
    },
    SearchTask: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      if (payload.length !== 0) {
        const tempList = state.tasks.filter((task) =>
          task.name.toLowerCase().includes(payload.toLowerCase())
        );
        state.search = tempList;
      }else state.search = [];
    },
    resetSearch: (state) => {
        state.search = [];
    }
  },
});

// Export actions and reducer
export const { addTask, removeTask, toggleTask, SetTask, SearchTask, resetSearch } =
  taskSlice.actions;
export default taskSlice.reducer;
