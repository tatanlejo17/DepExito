import React from "react";
import { Container, InputLabel, Select, TextField, MenuItem, FormControl, Button, IconButton } from "@material-ui/core";
import SedesAdm from '../data/sedes';
import Cedis from '../data/cedis';
import CopyPortapapeles from '../copyPortapapeles/copyPortapapeles';
import BuscarDependencias from '../dependencias/BuscarDependencias';
import '../App.css';

const style = {
  paper: {
    marginTop: 30,
    marginBottom: 30
    // backgroundColor: "#ffe277"
  },
  form: {
    height: 100,
    borderBottom: "1px solid #b8b8b8",
    // backgroundColor: "#00a1ab"
  },
  button: {
    marginTop: 15,
  },
  listaSedes: {
    minWidth: 250,
    // backgroundColor: "#f57b51"
  },
  copiar: {
    backgroundColor: "#b4f2e1",
    fontFamily: "Amaranth",
    fontWeight: 600,
    letterSpacing: 1,
    marginRight: 20,
    marginTop: 25
  }
};

function Section(props) {

  function BuscarDep(e) {
    console.log(e.key);
    //Capturar la tecla presionada y ejecutar la función cuando se de un ENTER
    if (e.key == 'Enter') {
      BuscarDependencias(parseInt(e.target.value))
    }
  }
  function Sede(e) { SedesAdm(parseInt(e.target.getAttribute('data-value'))) }
  function Cedi(e) { Cedis(parseInt(e.target.getAttribute('data-value'))) }
  
  return (
    <Container maxWidth="lg" style={style.prueba}>
      <div style={style.paper}>
        <form className="w-100 d-flex justify-content-around align-items-start" style={style.form}>
          <TextField
            variant="outlined"
            label="Número Dependencia"
            name="numDep"
            margin="normal"
            onKeyPress={ BuscarDep }
          />

          <FormControl
            variant="outlined"
            margin="normal"
            style={style.listaSedes}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Sedes Corporativas
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Sedes Corporativas"
              onClose={Sede}
            >
              <MenuItem value={1}>Sede Envigado</MenuItem>
              <MenuItem value={2}>Sede Bogotá</MenuItem>
              <MenuItem value={3}>Sede Barranquilla</MenuItem>
              <MenuItem value={4}>Sede Cali</MenuItem>
              <MenuItem value={5}>Sede Pereira</MenuItem>
              <MenuItem value={6}>Sede Bucaramanga</MenuItem>
              <MenuItem value={7}>Exito.com, City plaza y Viajes Exito</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            margin="normal"
            style={style.listaSedes}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Cedis
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Cedis"
              onClose={Cedi}
            >
              <MenuItem value={1}>Cedi Vegas</MenuItem>
              <MenuItem value={2}>Cedi Montevideo</MenuItem>
              <MenuItem value={3}>Cedi Yumbo</MenuItem>
              <MenuItem value={4}>Cedi Caribe</MenuItem>
              <MenuItem value={5}>Cedi Cen Medellín</MenuItem>
              <MenuItem value={6}>Cedi Calima</MenuItem>
              <MenuItem value={7}>Cedi Funza</MenuItem>
              <MenuItem value={8}>Cedi Av68</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" style={style.copiar} onClick={CopyPortapapeles} id="copiar"> 
            <i className="fa fa-clone pr-1" aria-hidden="true"></i>
            Copy
          </Button>
        </form>

        <div className="d-flex justify-content-center mt-5" id="resultado">
          <p>
            <h1 className="texto-inicial">
              <i className="far fa-smile-wink fa-3x"></i>
              <br />
              <br />
              Archivo Búsqueda de Dependencias Éxito
            </h1>
          </p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <textarea className="area" id="result" style={{display:"none"}} value=""></textarea>
        </div>
      </div>
    </Container>
  );
}

export default Section;
