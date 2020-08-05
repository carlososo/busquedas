/* 3.- Crear una función que busque el numero más grande en un arreglo
	Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
    Salida -> 12 */

function masGrande(arreglo) {

    arreglo.sort(function(a, b) {
        return a - b;
    })
    return arreglo[arreglo.length - 1];
}

const arreglo = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];

console.log(masGrande(arreglo));