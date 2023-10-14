import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    width: "90%", // You can adjust the width as needed
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    border: "1px solid #e0e0e0",
  },
  bottomNav: {
    backgroundColor: '#2196F3', // Change the background color
  },
  action: {
    color: 'white', // Change the icon color
  },
}));

export default useStyles;
