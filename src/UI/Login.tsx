import React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from '../Hooks/useStyleLogin'; // Import your styles

function Login() {
  const classes = useStyles(); // Initialize the styles

  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <LockOutlinedIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField label="Username" variant="outlined" className={classes.textField} fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Password" variant="outlined" className={classes.textField} fullWidth type="password" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.loginButton} fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Login;
