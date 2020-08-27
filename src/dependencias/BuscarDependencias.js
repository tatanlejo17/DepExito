import {dep} from '../data/dep';

export default function BuscarDependencias(n) {

    // Variables de control
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const res = document.getElementById("result");
    res.style.display = "block";
    res.classList.remove("sedes");
    res.classList.remove("cedi");
    res.classList.add('dependencia');

    
    // Usar HighOrderFunction .filter() para la búsqueda
    let search = dep.filter(d => d.num === n);

    res.innerHTML = `*Codigo dependencia: ${search[0].num} \n*Nombre dependencia: ${search[0].nom} \n*Tipo de equipo: \n*Serial: \n*Ciudad: ${search[0].ciudad} \n*Direccion: ${search[0].dir} \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;

    let p = `
        <h5>IP POS &nbsp --> &nbsp ${search[0].ipPos}</h5>
    `;
    resultado.innerHTML = p;
        

}
