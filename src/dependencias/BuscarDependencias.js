import {dep} from '../data/dep';

export default function BuscarDependencias(array, num) {

    //Variables de control de la función
    let min = 0;
    let max = dep.length - 1;
    let bin;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const res = document.getElementById("result");
    res.style.display = "block";
    res.classList.remove("sedes");
    res.classList.remove("cedi");
    res.classList.add('dependencia');

    if (num >= 0 && num < 5000) {
        console.log('Ingresando al Bucle ...', typeof num, min, max);

        while (max >= min) {
            bin = Math.floor((min + max) / 2);
            console.log('Valor de Bin actual: ' + bin);

            if (array[bin].num === num) {
                res.innerHTML = "";
                res.innerHTML = `*Codigo dependencia: ${array[bin].num} \n*Nombre dependencia: ${array[bin].nom} \n*Tipo de equipo: \n*Serial: \n*Ciudad: ${array[bin].ciudad} \n*Direccion: ${array[bin].dir} \n*Piso-area: \n*Telefono: ${array[bin].ext} \n*Celular: \n*Horario de atencion: \n*Diagnostico: `;
                break; 
            } else if(array[bin].num < num){
                console.log('Valor de min: ' + min);
                min = bin + 1;
                console.log('Buscar hacia arriba !!', 'V. bin', bin, 'V.min',min);            
            } else if(array[bin].num > num){
                console.log('Valor de max: ' + max);
                max = bin - 1;
                console.log('Buscar hacia abajo !!', 'V. bin', bin, 'V.max', max);
            }
        }
    }
}
