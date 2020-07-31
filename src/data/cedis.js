export default function Cedis(value) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "";
  const res = document.getElementById("result");
  res.style.display = "block";
  res.classList.remove("sedes", "dependencia");
  res.classList.add("cedi");

  switch (value) {
    case 1:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 20 \n*Nombre dependencia: CEDI VEGAS \n*Tipo de equipo: \n*Serial: \n*Ciudad: Envigado \n*Direccion: Calle 43 Sur # 48 - 127 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 2:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 842 \n*Nombre dependencia: CEDI MONTEVIDEO \n*Tipo de equipo: \n*Serial: \n*Ciudad: Montevideo \n*Direccion: Cra 68 D # 21 - 25 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 3:
      res.innerHTML = `*Codigo dependencia: 50 \n*Nombre dependencia: CEDI JUMBO \n*Tipo de equipo: \n*Serial: \n*Ciudad: Jumbo \n*Direccion: Cra 36 A 16-79 - Cali \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 4:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 146 \n*Nombre dependencia: CEDI CARIBE \n*Tipo de equipo: \n*Serial: \n*Ciudad: Barranquilla \n*Direccion: Centro Industrial Pimsa \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 5:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 1938 \n*Nombre dependencia: CEDICEN MEDELLIN \n*Tipo de equipo: \n*Serial: \n*Ciudad: Medellin \n*Direccion: Cra 43 A # 6 Sur - 140 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 6:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 55 \n*Nombre dependencia: CEDI CALIMA \n*Tipo de equipo: \n*Serial: \n*Ciudad: Cali \n*Direccion: Cra 4 Norte # 55-51 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 7:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 927 \n*Nombre dependencia: CEDICOM FUNZA \n*Tipo de equipo: \n*Serial: \n*Ciudad: Funza \n*Direccion: KM 2.7 via Funza, Parque Industrial San Carlos 2 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;
    case 8:
      res.innerHTML = "";
      res.innerHTML = `*Codigo dependencia: 858 \n*Nombre dependencia: CEDI AVENIDA 68 \n*Tipo de equipo: \n*Serial: \n*Ciudad: Bogota \n*Direccion: Cra 68 # 9 - 67 \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
      break;

    default:
      console.log("No ingreso un valor válido");
      break;
  }
}

