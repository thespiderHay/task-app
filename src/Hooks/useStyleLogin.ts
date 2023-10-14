import { makeStyles } from "@material-ui/core/styles";

const useStylesLogin = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
  },
  icon: {
    margin: theme.spacing(2),
    fontSize: '48px',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  loginButton: {
    width: '100%',
  },
}));

export default useStylesLogin;
