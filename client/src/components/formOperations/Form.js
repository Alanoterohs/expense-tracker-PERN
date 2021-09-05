import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

import {
 Button,
 TextField,
 Grid,
 Container,
 Typography,
 MenuItem,
 Select,
 FormControl,
 InputLabel,
 } from '@material-ui/core';

function Form(props) {

  return (
    <Grid container component="main">
      <Container component="main" maxWidth="sm" style={{ backgroundColor: '#ffffff', }}>
          <Typography component="h1" variant="h4">
            Operaciones
          </Typography>
          <form onSubmit = {props.handleOnSubmit}>
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Título del gasto"
              type='text'
              value= {props.title}
              onChange= {(e) => props.setTitle(e.target.value)}
              autoFocus
            />
            <TextField
            size="small"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Monto"
            type='number'
            value= {props.amount}
            onChange= {(e) => props.setAmount(e.target.value)}
            autoFocus
            />
            <TextField
              size="small"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Description"
              type='text'
              value= {props.description}
              onChange= {(e) => props.setDescription(e.target.value)}
              multiline
              rows={4}
              autoFocus
            />

            <FormControl margin="normal" fullWidth>
            <InputLabel shrink>Ingresos o Gastos</InputLabel>
                    <Select
                    value = {props.option}
                    onChange= {(e) => props.setOption(e.target.value)}
                    displayEmpty>
                      <MenuItem value= 'gastos'>Gastos</MenuItem>
                      <MenuItem value = 'ingresos'>Ingresos</MenuItem>
                    </Select>
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel shrink>Categorías</InputLabel>
              <Select
              value= {props.category}
              onChange= {(e) => props.setCategory(e.target.value)}
              displayEmpty>

                <MenuItem value = 'compras'>Compras</MenuItem>
                <MenuItem value = 'servicios'>Servicios</MenuItem>
                <MenuItem value = 'otros'>Otros</MenuItem>
                <MenuItem value = 'entretenimiento'>Entretenimiento</MenuItem>
                <MenuItem value = 'salidas'>Salidas</MenuItem>
                <MenuItem value = 'salud'>Salud y deporte</MenuItem>
              </Select>
            </FormControl>

            <TextField
              size="small"
              margin="normal"
              fullWidth
              type='date'
              label="Día de la operacion"
              value= {props.date}
              onChange= { e => props.setDate(e.target.value)}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Adherir operación
            </Button>
          </form>
      </Container>
     </Grid>
  );
}

export default Form;
