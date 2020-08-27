export default function CopyPortapapeles(value) {
  if (value) {
    //Configurar botón de Copiado
    //Hacerlo interactivo controlando Coloración
    let portapapeles = document.querySelector("#result").innerHTML;
    
    if (portapapeles != null) {
      navigator.clipboard.writeText(portapapeles).then(() => {
          console.log('Texto Copiado !!', portapapeles.length);
      });
  }
  }
}

