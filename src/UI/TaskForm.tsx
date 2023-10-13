import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStyles from "../Hooks/useStyles";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";
import type { I_AppState } from "../store";
import { appSelector, I_AppSelectorState } from "../selectors/appSelector";
import { useSelector } from "react-redux";
import type { Task2 } from "../shared/interfaces";
const TaskForm: React.FC = () => {
  const { tasks } = useSelector<I_AppState, I_AppSelectorState>(appSelector);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const classes = useStyles();

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Here, you can submit the formData to your backend or perform any action.
    console.log({ ...formData, id: tasks.tasks.length + 1, complete: false });

    const item: Task2 = {
      id: tasks.tasks.length + 1,
      name: formData.name,
      description: formData.description,
      complete: false,
    };

    dispatch(addTask(item));

    setFormData({
      name: "",
      description: "",
    });
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="description"
        variant="outlined"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Save Task
      </Button>
    </form>
  );
};

export default TaskForm;
