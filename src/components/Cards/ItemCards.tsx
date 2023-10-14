import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Checkbox,
  Grid,
  TextField,
  Dialog,
  DialogContent,
  Button
} from "@mui/material";
import useStyles from "../../Hooks/useStyles";
import type { TaskState, Task2 } from "../../shared/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface ItemCardsrops {
  task: Task2;
  deleteTask(item: Task2): void;
  toggleTask(item: Task2): void;
  EditTask(item: Task2): void;
}

const ItemCards: React.FC<ItemCardsrops> = ({
  task,
  deleteTask,
  toggleTask,
  EditTask,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [seletedItem, setSeletedItem] = useState({
    id: 0,
    name: "",
    description: "",
    complete: false,
  });

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
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setSeletedItem({
      ...seletedItem,
      [name]: value,
    });
  };
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="div">
            {task.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary">
                <Checkbox
                  edge="start"
                  checked={task.complete}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => toggleTask(task)}
                />{" "}
                is Completed
              </Typography>
            </Grid>
            <Grid item xs={3}>
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
            </Grid>
            <Grid item xs={3}>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(task)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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
    </>
  );
};

export default ItemCards;
