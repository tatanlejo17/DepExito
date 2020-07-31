
function SedesAdm(value) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "";
  const res = document.getElementById("result");
  res.style.display = "block";
  res.classList.remove("cedi", 'dependencia');
  res.classList.add('sedes');

  switch (value) {
    case 1:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 61 \n*Nombre dependencia: Sede administrativa Envigado \n*Tipo de equipo: \n*Serial: \n*Ciudad: Envigado \n*Direccion: Carrera 48 N° 32 B Sur 139 Avenida Las Vegas \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 2:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 80 \n*Nombre dependencia: Sede administrativa Bogota \n*Tipo de equipo: \n*Serial: \n*Ciudad: Bogota \n*Direccion: Cra 59 A N° 79 - 30 Exito Calle 80 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 3:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 10 \n*Nombre dependencia: Sede administrativa Barranquilla \n*Tipo de equipo: \n*Serial: \n*Ciudad: Barranquilla \n*Direccion: Calle 77 N° 71 - 49 Esquina \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 4:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 51 \n*Nombre dependencia: Sede administrativa Cali \n*Tipo de equipo: \n*Serial: \n*Ciudad: Cali \n*Direccion: Calle 5 N° 38 D - 35 Exito San Fernando \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 5:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 424 \n*Nombre dependencia: Sede administrativa Pereira \n*Tipo de equipo: \n*Serial: \n*Ciudad: Pereira \n*Direccion: Carrera 10 N° 14 - 71 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 6:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 71 \n*Nombre dependencia: Sede administrativa Bucaramanga \n*Tipo de equipo: \n*Serial: \n*Ciudad: Bucaramanga \n*Direccion: Cra 17 # 45 - 77 Exito Bucaramanga - La Rosita \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 7:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 8010 \n*Nombre dependencia: Exito.com, City plaza y Viajes Exito \n*Tipo de equipo: \n*Serial: \n*Ciudad: Medellin \n*Direccion: cra 36D Sur #27a-105a \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;

    default:
      break;
  }
}

export default SedesAdm;
