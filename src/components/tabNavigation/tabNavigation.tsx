import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useStyles from "../../Hooks/useStyles";

const tabNavigation: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.bottomNav}
    >
      <BottomNavigationAction
        label="Task List"
        icon={<ListAltIcon className={classes.action} />}
      />
      <BottomNavigationAction
        label="Add Task"
        icon={<AddCircleOutlineIcon className={classes.action} />}
      />
    </BottomNavigation>
  );
};

export default tabNavigation;
