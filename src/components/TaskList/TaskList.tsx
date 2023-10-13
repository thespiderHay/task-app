import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { TaskState, Task2 } from "../../shared/interfaces";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import useStyles from "../../Hooks/useStyles";

interface TaskListProps {
  tasks: TaskState;
  deleteTask(item: Task2): void;
  toggleTask(item: Task2): void;
  EditTask(item: Task2): void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleTask,
  EditTask,
}) => {
  const [open, setOpen] = useState(false);
  const [seletedItem, setSeletedItem] = useState({
    id: 0,
    name: "",
    description: "",
    complete: false,
  });

  const classes = useStyles();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Here, you can submit the formData to your backend or perform any action.
    //console.log(seletedItem);

    if (seletedItem.id !== 0) {
      EditTask(seletedItem);
    }

    setSeletedItem({
      id: 0,
      name: "",
      description: "",
      complete: false,
    });

    setOpen(false);

    /*const item: Task2 = {
      id: tasks.tasks.length + 1,
      name: formData.name,
      description: formData.description,
      complete: false,
    };*/
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setSeletedItem({
      ...seletedItem,
      [name]: value,
    });
  };
  return (
    <div>
      <List component="nav">
        {tasks.search.length > 0
          ? tasks.search.map((task) => (
              <ListItem key={task.id} button>
                <Checkbox
                  edge="start"
                  checked={task.complete}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => toggleTask(task)}
                />
                <ListItemText primary={task.name} />
                <ListItemText primary={task.description} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setOpen(true);
                    setSeletedItem(task);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTask(task)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          : tasks.tasks.map((task) => (
              <ListItem key={task.id} button>
                <Checkbox
                  edge="start"
                  checked={task.complete}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => toggleTask(task)}
                />
                <ListItemText primary={task.name} />
                <ListItemText primary={task.description} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setOpen(true);
                    setSeletedItem(task);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTask(task)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
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
              value={seletedItem.name}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="description"
              variant="outlined"
              name="description"
              value={seletedItem.description}
              onChange={handleChange}
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Save Task
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Divider />
    </div>
  );
};

export default TaskList;
