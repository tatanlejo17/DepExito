import {dep} from '../data/dep';

export default function BuscarDependencias(num) {

    // Variables de control
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const res = document.getElementById("result");
    res.style.display = "block";
    res.classList.remove("sedes");
    res.classList.remove("cedi");
    res.classList.add('dependencia');

    
    // Usar HighOrderFunction .filter() para la búsqueda
    let search = dep.filter(d => d.num === num);
    console.log(search[0]);
    res.innerHTML = `
        IP POS   ->   ${search[0].ipPos}
        
        *Codigo dependencia: ${search[0].num} 
        *Nombre dependencia: ${search[0].nom}
        *Tipo de equipo: 
        *Serial: 
        *Ciudad: ${search[0].ciudad} 
        *Direccion: ${search[0].dir} 
        *Piso-area: 
        *Telefono: 
        *Celular: 
        *Horario de atencion: 
        *Diagnostico: `;


}
