import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

import {
 Button,
 TextField,
 Grid,
 Container,
 Avatar,
 Typography,
 MenuItem,
 Select,
 FormControl,
 InputLabel,
 } from '@material-ui/core';

function Form() {

  return (
    <Grid container component="main">
      <Container component="main" maxWidth="sm" style={{ backgroundColor: '#ffffff', }}>
          <Typography component="h1" variant="h4">
            Operaciones
          </Typography>
          <Fragment>
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Título del gasto"
              type='text'
              autoFocus
            />
            <TextField
            size="small"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Monto"
            type='number'
            autoFocus
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Description"
              type='text'
              multiline
              rows={4}
              autoFocus
            />
            <FormControl
            margin="normal"
            fullWidth
            >
            <InputLabel shrink>Ingresos o Gastos</InputLabel>
                    <Select
                      // value={age}
                      // onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Gastos</em>
                      </MenuItem>
                      <MenuItem
                       // value={10}
                       >Ingresos</MenuItem>
                    </Select>
            </FormControl>

            <FormControl
            margin="normal"
            fullWidth>
            <InputLabel shrink>Categorías</InputLabel>
                    <Select
                      // value={age}
                      // onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem>Compras</MenuItem>
                      <MenuItem
                       // value={10}
                       >Servicios</MenuItem>
                       <MenuItem>Otros</MenuItem>
                       <MenuItem>Entretenimiento</MenuItem>
                       <MenuItem>Salidas</MenuItem>
                       <MenuItem>Salud y deporte</MenuItem>
                    </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              label="Fecha de la operación"
              fullWidth
            />
            </MuiPickersUtilsProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Adherir operación
            </Button>
          </Fragment>
      </Container>
     </Grid>
  );
}

// <Grid container>
// <Grid item>
// <a href="/login" variant="body2">
// Have an account? Sign in
// </a>
// </Grid>
// </Grid>
export default Form;
