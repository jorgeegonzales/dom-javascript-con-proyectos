// Seleccionar los elementos del DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for(let i=0; i<6 ;i++){
        let indiceAletaorio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAletaorio] ;                                                        
    }

    return colorHex;
}

boton.addEventListener('click',function(){
    let colorAleatorio = generarColorHexAleatorio();
    // Actualizar el texto
    color.textContent = colorAleatorio;
    // Actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
})

