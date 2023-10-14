import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskList from "../components/TaskList/TaskList";
import TextField from "@mui/material/TextField";
import { InputAdornment, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import {
  removeTask,
  toggleTask,
  SetTask,
  SearchTask,
  resetSearch,
} from "../reducers/tasks";
import type { I_AppState } from "../store";
import { appSelector, I_AppSelectorState } from "../selectors/appSelector";
import useStyles from "../Hooks/useStyles";
import Cards from "../components/Cards/Cards";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, router } = useSelector<I_AppState, I_AppSelectorState>(
    appSelector
  );

  const [search, setSearch] = useState("");
  const classes = useStyles();

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setSearch(value);

    dispatch(SearchTask(value));
  };

  useEffect(() => {
    console.log("Search >> ", tasks.search);
  }, [tasks.search]);
  return (
    <div>
      <h1>Task List</h1>
      <TextField
        label="Search"
        variant="outlined"
        name="Search"
        value={search}
        onChange={handleChange}
        className={classes.textField}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => {
                  setSearch("");
                  dispatch(resetSearch());
                }}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/*<TaskList
        tasks={tasks}
        deleteTask={(item) => dispatch(removeTask(item.id))}
        toggleTask={(item) => dispatch(toggleTask(item.id))}
        EditTask={(item) => dispatch(SetTask(item))}
      />*/}
      <Cards
        tasks={tasks}
        deleteTask={(item) => dispatch(removeTask(item.id))}
        toggleTask={(item) => dispatch(toggleTask(item.id))}
        EditTask={(item) => dispatch(SetTask(item))}
      />
    </div>
  );
};

export default Home;
