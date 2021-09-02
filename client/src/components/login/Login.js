import { Link } from 'react-router-dom';

import {
 Button,
 TextField,
 Grid,
 Container,
 Avatar,
 Typography,
 } from '@material-ui/core';

function Login() {
  return (
    <Grid container component="main">
      <Container component="main" maxWidth="xs" style={{ backgroundColor: '#ffffff', }}>
          <Avatar>
          </Avatar>
          <Typography component="h1" variant="h4">
            Expense Tracker
          </Typography>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <a href="/login" variant="body2">
                 Don't have an account? Sign Up
                </a>
              </Grid>
            </Grid>
          </form>
      </Container>
     </Grid>
  );
}

export default Login;
