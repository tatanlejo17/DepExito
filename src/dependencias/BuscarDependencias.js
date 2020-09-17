import {dep} from '../data/dep';
import swal from '@sweetalert/with-react';

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
    console.log(search);

    if(search.length) {
        res.innerHTML = `*Codigo dependencia: ${search[0].num} \n*Nombre dependencia: ${search[0].nom} \n*Tipo de equipo: \n*Serial: \n*Ciudad: ${search[0].ciudad} \n*Direccion: ${search[0].dir} \n*Piso-area: \n*Telefono: \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;

        let p = `
            <h5>IP POS &nbsp --> &nbsp ${search[0].ipPos} &nbsp &nbsp &nbsp</h5>
            <h5>&nbsp Regional: ${search[0].zona}</h5>
        `;
        resultado.innerHTML = p;
    } else {
        res.style.display = "none";
        res.classList.remove("sedes");
        res.classList.remove("cedi");
        res.classList.remove('dependencia');

        let ini = `
            <p>
                <h1 className="texto-inicial">
                    <i className="far fa-smile-wink fa-3x"></i>
                    <br />
                    <br />
                    Archivo Búsqueda de Dependencias Éxito
                </h1>
            </p>
        `;
        resultado.innerHTML = ini;

        swal("Uupps", "La dependencia ingresada no existe !!", "warning");
    }


        

}
