/* 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
	Ej input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
    Salida → ['e','a','d','f'] */

function busquedaLetras(arreglo) {
    let letras = [];
    for (let i = 0; i < arreglo.length; i++) {
        if ((arreglo[i] / arreglo[i]) != 1) {
            letras.push(arreglo[i]);
            // console.log(arreglo[i]);
        }
    }
    return letras;

}

const arreglo = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];

console.log(busquedaLetras(arreglo));